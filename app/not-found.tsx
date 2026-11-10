import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="mt-4 text-neutral-400">Page not found</p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-full bg-violet-600 text-white"
      >
        Go Home
      </Link>
    </div>
  );
}
