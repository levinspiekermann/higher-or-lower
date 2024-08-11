import Link from 'next/link';

// Function to get the next available ID
export default function Footer() {
  return (
    <footer className="fixed bottom-2 flex w-full flex-col items-center justify-center gap-4 p-4">
      <p className="text-center text-lg text-neutral-500">
        Made with ❤️ by{' '}
        <Link
          href="https://github.com/levinspiekermann"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 duration-300 hover:underline"
        >
          @levinspiekermann
        </Link>
      </p>
    </footer>
  );
}
