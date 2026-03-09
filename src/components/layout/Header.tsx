import Container from "./Container"
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-50 border-b" >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            OnlineQuiz
          </Link>

          <nav className="flex gap-6">
            <Link href="/quizzes">Quizzes</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/login">Login</Link>
            <Link href="/logout">Logout</Link>
            <Link href="/admin">Admin</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}