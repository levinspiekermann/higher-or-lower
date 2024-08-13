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
        'flex w-full flex-col items-center justify-between rounded-lg bg-white p-4 shadow-md md:p-6 lg:p-8',
        className
      )}
    >
      <div className="relative min-h-[200px] w-full overflow-hidden rounded-lg md:min-h-[300px] lg:min-h-[400px]">
        {/* <Image
          src={question.thumbnail}
          alt={question.name}
          fill
          className="absolute inset-0 h-full w-full object-cover"
        /> */}

        <BlurImage source={question.thumbnail} alt={question.name} />

        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-20 blur-lg" />
      </div>
      <div className="mt-4 flex flex-col items-center justify-between md:mt-6 lg:mt-8">
        <h3 className="text-lg font-semibold text-neutral-900 md:text-xl lg:text-2xl">
          {question.name}
        </h3>

        {question.solved && (
          <p className="text-sm text-neutral-500 md:text-base lg:text-lg">
            {formatNumberWithCommas(question.value)}
          </p>
        )}
        {/* <p className="text-sm text-neutral-500">{question.value}</p> */}
      </div>
    </div>
  );
}
