export default function ScoreIsland({
  score,
  highscore
}: {
  score: number;
  highscore: number;
}) {
  return (
    <section className="absolute top-4 z-10 flex h-[64px] items-center justify-between gap-4 p-4">
      <div className="flex flex-col items-center justify-center gap-0.5 border-neutral-800">
        <h1 className="text-lg font-bold text-neutral-600">Score</h1>
        <p className="text-neutral-400">{score}</p>
      </div>
      {/* <div className="h-full w-[1px] bg-neutral-800" /> */}
      <div className="flex flex-col items-center justify-center gap-0.5 border-neutral-800">
        <h1 className="text-lg font-bold text-neutral-600">Highscore</h1>
        <p className="text-neutral-400">{highscore}</p>
      </div>
    </section>
  );
}
