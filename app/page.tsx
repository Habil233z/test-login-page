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
  const envServer = "dev"
  const referrer = "bodev.uruz.id" 

  async function handleLogin() {
    try {
      const response = await api.post("/authV5 ", {
        from_origin: origin,
        userServer: userServer,
        userId: userId,
        userPassword: password,
        envServer: envServer,
        referrer: referrer
      })
      console.log(response)
      alert("Login successfull")
    } catch (error) {
      console.log(error)
    }}

    //"from_origin": "*", "userServer": "cooluruz", "userId": "admin", "userPassword": "admin", "envServer": "dev", "referrer": "bodev.uruz.id" 

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <Card className="flex flex-col min-w-[50%]">
          <CardHeader>
            <CardTitle className="text-center text-4xl font-bold">Login to Uruz Page</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <h2 className="text-2xl">User Server</h2>
            <input className="text-xl border rounded-md pl-2" type="text" value={userServer} onChange={(e) => setUserServer(e.target.value)} required autoComplete="false" placeholder="user server"/>
            <h2 className="text-2xl">User Id</h2>
            <input className="text-xl border rounded-md pl-2" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required autoComplete="false" placeholder="user id"/>
            <h2 className="text-2xl">Password</h2>
            <input className="text-xl border rounded-md pl-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="false" placeholder="password"/>
            <div className="flex justify-center">
            <Button className="mt-2" onClick={handleLogin}>Login</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
