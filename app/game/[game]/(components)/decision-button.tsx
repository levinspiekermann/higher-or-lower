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
        'flex flex-col items-center justify-center gap-4 py-2',
        className
      )}
    >
      <h3 className="hidden text-lg font-semibold text-neutral-900 md:block">
        {title}
      </h3>

      <div className="flex w-full items-center gap-2">
        {currentQuestions.map((question, index) => (
          <Button
            key={question.id}
            question={question}
            solved={question.solved ?? false}
            onClick={() => onAnswer(question.id)}
          />
        ))}
      </div>
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
      className="flex min-h-[50px] w-full flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md"
    >
      <p className="text-neutral-900 transition-all duration-300 hover:scale-105">
        {question.name}
      </p>
      {solved && (
        <p className="hidden text-sm text-neutral-500 md:block">
          {formatNumberWithCommas(question.value)}
        </p>
      )}
    </button>
  );
}
