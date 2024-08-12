'use client';

import GameTitle from '@/components/game-title';
import { shuffleArray } from '@/lib/utils';
import { GameStatus, type Game, type Question } from '@/types/types';
import * as React from 'react';
import DecisionButton from './decision-button';
import ScoreIsland from './score-island';
import Slide from './slide';

export default function Game({
  game,
  questions
}: {
  game: Game;
  questions: Question[];
}) {
  const [gameStatus, setGameStatus] = React.useState<GameStatus>(
    GameStatus.ACTIVE
  );
  const [questionsState, setQuestionsState] = React.useState(
    shuffleArray(questions)
  );
  const [score, setScore] = React.useState(0);
  const [highscore, setHighscore] = React.useState(
    parseInt(localStorage.getItem('highscore') || '0')
  );

  const [questionIndex, setQuestionIndex] = React.useState(0);

  const resetGame = () => {
    setGameStatus(GameStatus.ACTIVE);
    setQuestionIndex(0);

    setQuestionsState((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions.forEach((question) => {
        question.solved = false;
      });
      return shuffleArray(newQuestions);
    });

    setScore(0);
    setHighscore(parseInt(localStorage.getItem('highscore') || '0'));
  };

  const handleAnswer = (answer: Question['id']) => {
    const leftSideQuestion = questionsState[questionIndex];
    const rightSideQuestion = questionsState[questionIndex + 1];

    const leftIsCorrect =
      leftSideQuestion.id === answer &&
      leftSideQuestion.value > rightSideQuestion.value;
    const rightIsCorrect =
      rightSideQuestion.id === answer &&
      rightSideQuestion.value > leftSideQuestion.value;

    const isCorrect = leftIsCorrect || rightIsCorrect;

    if (!isCorrect) {
      setGameStatus(GameStatus.FAILED);
      return;
    }

    // No more questions left
    if (!questionsState[questionIndex + 2]) {
      setGameStatus(GameStatus.COMPLETED);
      return;
    }

    // Mark question as solved
    setQuestionsState((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[questionIndex + 1].solved = true;
      console.log(newQuestions);
      return newQuestions;
    });

    setQuestionIndex((prevIndex) => prevIndex + 1);

    setScore((prevScore) => {
      const newScore = prevScore + 1;
      setHighscore((prevHighscore) => {
        const newHighscore = Math.max(prevHighscore, newScore);
        localStorage.setItem('highscore', newHighscore.toString());
        return newHighscore;
      });
      return newScore;
    });
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 p-4">
      {gameStatus === GameStatus.ACTIVE ? (
        <>
          <ScoreIsland score={score} highscore={highscore} />
          <GameTitle className="hidden md:block" />

          <div className="mt-4 grid h-full w-full grid-cols-1 gap-4 md:grid-cols-3">
            <Slide question={questionsState[questionIndex]} />
            <DecisionButton
              title={game.question}
              currentQuestions={[
                questionsState[questionIndex],
                questionsState[questionIndex + 1]
              ]}
              onAnswer={handleAnswer}
            />
            <Slide question={questionsState[questionIndex + 1]} />
          </div>
        </>
      ) : (
        (GameStatus.COMPLETED || GameStatus.FAILED) && (
          <>
            <GameTitle />

            {gameStatus === GameStatus.COMPLETED && (
              <p className="text-center text-lg text-neutral-500">
                You won! 🎉
              </p>
            )}

            {gameStatus === GameStatus.FAILED && (
              <p className="text-center text-lg text-neutral-500">
                You lost 😔
              </p>
            )}

            <p className="text-center text-lg text-neutral-500">
              Score: {score}
            </p>

            <button
              className="mt-4 text-center text-lg text-neutral-500 underline"
              onClick={() => resetGame()}
            >
              Restart
            </button>
          </>
        )
      )}
    </section>
  );
}
