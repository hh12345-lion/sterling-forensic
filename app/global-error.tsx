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
      <body className="flex min-h-screen items-center justify-center bg-surface p-6 font-sans text-body">
        <div className="max-w-md text-center">
          <h1 className="font-heading text-2xl text-primary">
            Something went wrong
          </h1>
          <p className="mt-4 text-sm">
            The page could not be loaded. This can happen after a dev server
            restart — try again or restart with a clean cache.
          </p>
          {process.env.NODE_ENV === "development" && error.message ? (
            <p className="mt-4 break-words text-xs text-highlight">
              {error.message}
            </p>
          ) : null}
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 bg-highlight px-5 py-2 text-sm font-semibold text-white hover:bg-highlight-hover"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
