"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
      <h2 className="text-2xl font-bold text-red-600">
        Something went wrong!
      </h2>

      <button
        onClick={() => reset()}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}