import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import TodoList_Admin from "../components/TodoList_Admin"

export default function Home() {
  const router = useRouter();
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/auth/signin");
    },
  });
  
  return (
    <div>
      <TodoList_Admin />
    </div>
  );
}
