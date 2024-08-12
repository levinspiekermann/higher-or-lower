import { cn } from '@/lib/utils';

export default function GameTitle({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        'text-center text-4xl font-bold text-neutral-900',
        className
      )}
    >
      <span className="text-red-500">Higher</span> or{' '}
      <span className="text-blue-500">Lower</span>
    </h1>
  );
}
