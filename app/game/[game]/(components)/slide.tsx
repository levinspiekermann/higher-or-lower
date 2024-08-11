import { cn, formatNumberWithCommas } from '@/lib/utils';
import { Question } from '@/types/types';
import Image from 'next/image';

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
        'flex w-full flex-col items-center justify-between rounded-lg bg-white p-4 shadow-md',
        className
      )}
    >
      <div className="relative h-80 w-full overflow-hidden rounded-lg">
        <Image
          src={question.thumbnail}
          alt={question.name}
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-20 blur-lg" />
      </div>
      <div className="mt-4 flex flex-col items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">
          {question.name}
        </h3>
        {question.solved && (
          <p className="text-sm text-neutral-500">
            {formatNumberWithCommas(question.value)}
          </p>
        )}
        {/* <p className="text-sm text-neutral-500">{question.value}</p> */}
      </div>
    </div>
  );
}
