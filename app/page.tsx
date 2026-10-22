"use client"

import api from "@/lib/axios";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const origin = "*"
  const [userServer, setUserServer] = useState<string>("")
  const [userId, setUserId] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  async function handleLogin() {
    console.log(userServer)
    console.log(userId)
    console.log(password)
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <input type="text" value={userServer} onChange={(e) => setUserServer(e.target.value)} required/>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleLogin}>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
