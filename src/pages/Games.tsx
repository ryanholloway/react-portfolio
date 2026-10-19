import GameComponent from "../components/Game";

const controls = [
  { keys: "← →", action: "Move your ship left and right" },
  { keys: "Space", action: "Shoot bullets at enemies" },
  { keys: "Goal", action: "Destroy all enemies before they reach the bottom" },
  { keys: "Score", action: "Each enemy destroyed = 10 points" },
];

const tips = [
  "Move quickly to dodge enemies",
  "Keep the center of the screen clear",
  "Enemies speed up as you destroy them",
  "Game ends when enemies reach your position",
];

export default function Games() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 pb-12">
          <p className="md:col-span-3 text-xs uppercase tracking-widest text-muted">
            Hidden page
          </p>
          <div className="md:col-span-9">
            <h1 className="text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.9]">
              Space Invaders
            </h1>
            <p className="mt-8 max-w-xl text-muted leading-relaxed">
              A classic arcade-style shooter built with Phaser 3.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">
          <div className="md:col-span-7 border border-ink bg-ink p-2 sm:p-4 flex justify-center">
            <GameComponent />
          </div>

          <aside className="md:col-span-4 md:col-start-9 space-y-12">
            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted border-b border-ink pb-3">
                How to play
              </h2>
              <dl className="divide-y divide-ink">
                {controls.map((c) => (
                  <div key={c.keys} className="py-4 grid grid-cols-3 gap-4">
                    <dt className="text-sm font-semibold text-accent">
                      {c.keys}
                    </dt>
                    <dd className="col-span-2 text-sm text-muted leading-relaxed">
                      {c.action}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest text-muted border-b border-ink pb-3">
                Tips
              </h2>
              <ul className="divide-y divide-ink">
                {tips.map((tip) => (
                  <li key={tip} className="py-4 text-sm text-muted leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
