import { Game, Question } from '@/types/types';
import { sql } from '@vercel/postgres';
import Link from 'next/link';
import GameComponent from './(components)/game';

export const revalidate = 3600;

export default async function GamePage({
  params
}: {
  params: { game: string };
}) {
  const { rows: games }: { rows: Game[] } =
    await sql`SELECT * FROM games WHERE slug = ${params.game} LIMIT 1`;

  const { rows: questions }: { rows: Question[] } =
    await sql`SELECT * FROM questions WHERE game_id = ${games[0].id}`;

  if (!games[0] || !questions[0]) {
    return <div>Game not found</div>;
  }

  if (questions.length < 2) {
    return <div>The game has not enough questions</div>;
  }

  return (
    <section className="bg-[#FBFAF4]">
      <Link href="/" className="absolute left-2 top-2 text-neutral-600">
        {'<'} Go Back
      </Link>
      <div className="container flex min-h-screen flex-col items-center justify-center">
        <GameComponent questions={questions} game={games[0]}></GameComponent>;
      </div>
    </section>
  );
}
