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
      console.log("Login berhasil")
      console.log(response)
      alert("Login berhasil")
    } catch (error) {
      console.log(error)
      alert("Terjadi masalah ketika login. Antara user server, user id, atau password salah")
    }}

    //"from_origin": "*", "userServer": "cooluruz", "userId": "admin", "userPassword": "admin", "envServer": "dev", "referrer": "bodev.uruz.id" 

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen bg-linear-to-br from-blue-500 via-blue-300 to-blue-400">
        <Card className="flex flex-col min-w-[50%] border-2 border-gray-200">
          <CardHeader className="flex flex-col items-center">
            <svg width="80px" height="80px" viewBox="0 0 64 64" strokeWidth="3" stroke="#000000" fill="none"><circle cx="32" cy="18.14" r="11.14"/><path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"/></svg>
            <CardTitle className="text-center text-4xl font-bold">Login to Uruz Page</CardTitle>
          </CardHeader>
          <hr className="h-2 border-t-4"></hr>
          <CardContent className="flex flex-col">
            <h2 className="text-2xl">User Server</h2>
            <input className="text-xl border rounded-md pl-2 hover:bg-gray-100" type="text" value={userServer} onChange={(e) => setUserServer(e.target.value)} required autoComplete="false" placeholder="user server"/>
            <h2 className="text-2xl">User Id</h2>
            <input className="text-xl border rounded-md pl-2 hover:bg-gray-100" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required autoComplete="false" placeholder="user id"/>
            <h2 className="text-2xl">Password</h2>
            <input className="text-xl border rounded-md pl-2 hover:bg-gray-100" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="false" placeholder="password"/>
            <div className="flex justify-center">
            <Button className="mt-3 text-3xl min-h-10 border" onClick={handleLogin}>Login</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
