import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-500">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-linear-to-r from-[#2f6a4a] to-[#63a883] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}