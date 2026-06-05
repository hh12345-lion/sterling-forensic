"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-GB">
      <body className="flex min-h-screen items-center justify-center bg-white p-6 font-sans text-[#374151]">
        <div className="max-w-md text-center">
          <h1 className="text-2xl text-[#1C2E40]">Something went wrong</h1>
          <p className="mt-4 text-sm">
            The page could not be loaded. This can happen after a dev server
            restart — try again or restart with a clean cache.
          </p>
          {process.env.NODE_ENV === "development" && error.message ? (
            <p className="mt-4 break-words text-xs text-[#7B2D3E]">
              {error.message}
            </p>
          ) : null}
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 rounded-md bg-[#7B2D3E] px-5 py-2 text-sm text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
