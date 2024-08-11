import GameTitle from '@/components/game-title';
import { Game } from '@/types/types';
import { sql } from '@vercel/postgres';
import GameItem from './(components)/game-item';

export const revalidate = 3600;

export default async function Home() {
  const { rows: games }: { rows: Game[] } = await sql`SELECT * FROM games`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FBFAF4] py-24">
      <div className="container">
        <GameTitle />
        <p className="text-center text-lg text-neutral-500">
          Guess the number of different things in a list.
        </p>
        <section className="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameItem
              key={game.id}
              title={game.name}
              description={game.description}
              thumbnail={game.thumbnail}
              href={`/game/${game.slug}`}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
