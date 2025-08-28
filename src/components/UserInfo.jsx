"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function UserInfo() {
  const session = useSession();
  return (
    <div>
      <p>form client component</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
