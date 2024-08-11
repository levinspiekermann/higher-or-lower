import Link from 'next/link';

export default function GameItem({
  title,
  description,
  thumbnail,
  href
}: {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="flex w-full flex-col items-center justify-between rounded-lg bg-white p-4 shadow-md">
        <div className="relative h-80 w-full overflow-hidden rounded-lg">
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50 blur-lg" />
        </div>
        <div className="mt-4 flex flex-col items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>
      </div>
    </Link>
  );
}
