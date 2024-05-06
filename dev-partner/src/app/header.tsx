"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {signIn, signOut} from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();
  return (
    <header>
      <div>
        {session.data ? <Button onClick={() => signOut()}>Sign Out</Button> : <Button onClick={()=> signIn("google")}>Sign In</Button>}
        <ModeToggle />
      </div>
      {session.data?.user?.name}
    </header>
  );
}