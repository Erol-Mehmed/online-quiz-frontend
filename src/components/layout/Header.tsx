"use client";

import Container from "./Container";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  urlEndpoint: string;
}

const NavLink = ({ children, urlEndpoint }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname == urlEndpoint;

  return (
    <Link
      href={urlEndpoint}
      className={`px-4 py-2 rounded transition 
    ${isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600 hover:bg-gray-200"}`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="bg-gray-50 border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            OnlineQuiz
          </Link>

          <nav className="flex gap-6">
            <NavLink urlEndpoint="/quizzes">Quizzes</NavLink>
            <NavLink urlEndpoint="/leaderboard">Leaderboard</NavLink>
            <NavLink urlEndpoint="/login">Login</NavLink>
            <NavLink urlEndpoint="/logout">Logout</NavLink>
            <NavLink urlEndpoint="/admin">Admin</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}
