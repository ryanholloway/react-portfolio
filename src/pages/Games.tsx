import { motion } from "framer-motion";
import GameComponent from "../components/Game";

export default function Games() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Space Invaders</h1>
          <p className="text-gray-400 text-lg">
            A classic arcade-style shooter built with Phaser 3
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition w-full flex justify-center"
        >
          <GameComponent />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 w-full"
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-4">How to Play</h2>
          <ul className="text-gray-300 space-y-3">
            <li>
              <strong className="text-blue-300">← →</strong> - Move your ship
              left and right
            </li>
            <li>
              <strong className="text-blue-300">SPACEBAR</strong> - Shoot
              bullets at enemies
            </li>
            <li>
              <strong className="text-blue-300">Goal:</strong> Destroy all
              enemies before they reach the bottom
            </li>
            <li>
              <strong className="text-blue-300">Scoring:</strong> Each enemy
              destroyed = 10 points
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-gradient-to-br from-blue-900/30 to-gray-900 border border-blue-500/30 rounded-lg p-6 w-full"
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-3">Tips</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Move quickly to dodge enemies</li>
            <li>• Keep the center of the screen clear</li>
            <li>• Enemies speed up as you destroy them</li>
            <li>• Game ends when enemies reach your position</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
