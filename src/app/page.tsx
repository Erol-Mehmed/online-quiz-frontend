import Link from "next/link";

const Home = () => {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-4xl font-bold">Online Quiz System</h1>

      <p className="text-gray-600">Solve quizzes and challenge yourself.</p>

      <div className="flex justify-center gap-4">
        <Link
          href="/quizzes"
          className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Browse Quizzes
        </Link>
      </div>
    </div>
  );
};

export default Home;
