import { cn, formatNumberWithCommas } from '@/lib/utils';
import { Question } from '@/types/types';

export default function DecisionButton({
  title,
  currentQuestions,
  className,
  onAnswer
}: {
  title: string;
  currentQuestions: Question[];
  className?: string;
  onAnswer: (answer: number) => void;
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-4 p-4',
        className
      )}
    >
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      {currentQuestions.map((question, index) => (
        <Button
          key={question.id}
          question={question}
          solved={question.solved ?? false}
          onClick={() => onAnswer(question.id)}
        />
      ))}
    </div>
  );
}

function Button({
  question,
  solved = false,
  onClick
}: {
  question: Question;
  solved?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md"
    >
      <p className="text-neutral-900 transition-all duration-300 hover:scale-105">
        {question.name}
      </p>
      {solved && (
        <p className="text-sm text-neutral-500">
          {formatNumberWithCommas(question.value)}
        </p>
      )}
    </button>
  );
}
