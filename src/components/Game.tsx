import { useEffect, useRef } from "react";
import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  player: any;
  bullets: any[] = [];
  enemies: any[] = [];
  cursors: any;
  scoreText: any;
  restartButton: any;
  score = 0;
  enemyDirection = 1;
  lastFireTime = 0;
  gameOver = false;

  constructor() {
    super("GameScene");
  }

  create() {
    // Clear any previous state
    this.bullets = [];
    this.enemies = [];
    this.score = 0;
    this.enemyDirection = 1;
    this.gameOver = false;
    this.lastFireTime = 0;

    // Destroy old score text if it exists
    if (this.scoreText) {
      this.scoreText.destroy();
    }
    if (this.restartButton) {
      this.restartButton.destroy();
    }

    // Player
    this.player = this.add.rectangle(300, 650, 40, 40, 0x3b82f6);
    this.physics.add.existing(this.player);
    (this.player.body as Phaser.Physics.Arcade.Body).setCollideWorldBounds(
      true
    );
    (this.player.body as Phaser.Physics.Arcade.Body).setBounce(0.2);

    // Cursor keys
    this.cursors = this.input.keyboard?.createCursorKeys();

    // Create enemies
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 6; x++) {
        const enemy = this.add.rectangle(
          80 + x * 80,
          50 + y * 60,
          40,
          30,
          0xef4444
        );
        this.physics.add.existing(enemy);
        (enemy.body as Phaser.Physics.Arcade.Body).setVelocity(100, 0);
        this.enemies.push(enemy);
      }
    }

    // Score text - single one at top left
    this.scoreText = this.add.text(10, 10, "Score: 0", {
      fontSize: "16px",
      color: "#ffffff",
    });
  }

  update() {
    if (!this.player || this.gameOver) return;

    // Update score display
    this.scoreText.setText(`Score: ${this.score}`);

    // Player movement
    if (this.cursors?.left.isDown) {
      (this.player.body as Phaser.Physics.Arcade.Body).setVelocity(-300, 0);
    } else if (this.cursors?.right.isDown) {
      (this.player.body as Phaser.Physics.Arcade.Body).setVelocity(300, 0);
    } else {
      (this.player.body as Phaser.Physics.Arcade.Body).setVelocity(0, 0);
    }

    // Shooting
    if (this.cursors?.space.isDown && this.time.now - this.lastFireTime > 200) {
      const bullet = this.add.rectangle(
        this.player.x,
        this.player.y - 25,
        5,
        15,
        0x60a5fa
      );
      this.physics.add.existing(bullet);
      (bullet.body as Phaser.Physics.Arcade.Body).setVelocity(0, -500);
      this.bullets.push(bullet);
      this.lastFireTime = this.time.now;
    }

    // Update bullets
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const bullet = this.bullets[i];
      if (bullet.y < 0) {
        bullet.destroy();
        this.bullets.splice(i, 1);
      }
    }

    // Update enemies - set velocity every frame
    for (const enemy of this.enemies) {
      (enemy.body as Phaser.Physics.Arcade.Body).setVelocity(
        100 * this.enemyDirection,
        0
      );
    }

    // Enemy bouncing logic
    let minX = 600;
    let maxX = 0;

    for (const enemy of this.enemies) {
      minX = Math.min(minX, enemy.x);
      maxX = Math.max(maxX, enemy.x);
    }

    // Check if enemies need to bounce
    if (maxX > 560 && this.enemyDirection === 1) {
      this.enemyDirection = -1;
      for (const enemy of this.enemies) {
        enemy.y += 30;
      }
    } else if (minX < 40 && this.enemyDirection === -1) {
      this.enemyDirection = 1;
      for (const enemy of this.enemies) {
        enemy.y += 30;
      }
    }

    // Check collisions - bullets vs enemies
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const bullet = this.bullets[i];
      for (let j = this.enemies.length - 1; j >= 0; j--) {
        const enemy = this.enemies[j];
        const dx = bullet.x - enemy.x;
        const dy = bullet.y - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 35) {
          bullet.destroy();
          enemy.destroy();
          this.bullets.splice(i, 1);
          this.enemies.splice(j, 1);
          this.score += 10;
          break;
        }
      }
    }

    // Check if enemies reached bottom (game over)
    for (const enemy of this.enemies) {
      if (enemy.y > 700) {
        this.endGame(`GAME OVER! Score: ${this.score}`, "#ef4444");
        return;
      }
    }

    // Win condition
    if (this.enemies.length === 0 && this.score > 0) {
      this.endGame(`YOU WIN! Score: ${this.score}`, "#10b981");
    }
  }

  endGame(message: string, color: string) {
    this.gameOver = true;
    this.physics.pause();

    // Create new message text in center
    const gameOverText = this.add.text(300, 300, message, {
      fontSize: "24px",
      color: color,
      align: "center",
    });
    gameOverText.setOrigin(0.5);

    // Add restart button
    this.restartButton = this.add.text(300, 420, "Press R to Restart", {
      fontSize: "18px",
      color: "#3b82f6",
      align: "center",
      backgroundColor: "#1e293b",
      padding: { x: 20, y: 10 },
    });
    this.restartButton.setOrigin(0.5);
    this.restartButton.setInteractive({ useHandCursor: true });

    // Restart on R key
    this.input.keyboard?.on("keydown-R", () => {
      this.scene.restart();
    });

    // Also allow mouse click
    this.restartButton.on("pointerdown", () => {
      this.scene.restart();
    });

    this.restartButton.on("pointerover", () => {
      this.restartButton.setStyle({ color: "#60a5fa" });
    });

    this.restartButton.on("pointerout", () => {
      this.restartButton.setStyle({ color: "#3b82f6" });
    });
  }
}

const GameComponent = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameContainerRef.current && !gameRef.current) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        parent: gameContainerRef.current,
        width: 600,
        height: 700,
        backgroundColor: "#111827",
        physics: {
          default: "arcade",
          arcade: {
            gravity: { x: 0, y: 0 },
            debug: false,
          },
        },
        scene: GameScene,
      };

      gameRef.current = new Phaser.Game(config);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={gameContainerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px auto",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    />
  );
};

export default GameComponent;
