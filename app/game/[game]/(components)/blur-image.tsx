'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export default function BlurImage({
  source,
  alt
}: {
  source: string;
  alt: string;
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
      <Image
        alt={alt}
        src={source}
        layout="fill"
        objectFit="cover"
        className={cn(
          'duration-700 ease-in-out group-hover:opacity-75',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
