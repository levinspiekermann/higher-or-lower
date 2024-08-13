import { cn, formatNumberWithCommas } from '@/lib/utils';
import { Question } from '@/types/types';
import BlurImage from './blur-image';

export default function Slide({
  question,
  className
}: {
  question: Question;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex w-full max-w-full flex-col rounded-lg bg-white p-4 shadow-md md:p-6 lg:p-8',
        className
      )}
    >
      <div className="relative h-auto w-full overflow-hidden rounded-lg">
        <BlurImage source={question.thumbnail} alt={question.name} />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-20 blur-lg" />
      </div>
      <div className="mt-4 flex flex-grow flex-col items-center justify-center">
        <h3 className="text-center text-lg font-semibold text-neutral-900 md:text-xl lg:text-2xl">
          {question.name}
        </h3>
        {question.solved && (
          <p className="text-sm text-neutral-500 md:text-base lg:text-lg">
            {formatNumberWithCommas(question.value)}
          </p>
        )}
      </div>
    </div>
  );
}
