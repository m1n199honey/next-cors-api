"use client"
// const API = "http://localhost:3000"
const API = "https://3000-techsnippet-nextcorsapi-v930s9nuvok.ws-us106.gitpod.io"
import React from "react";
export default function Home() {
  const [message, setMessage] = React.useState("message will appare here");
  const GET = async function(){
    console.log(API)
    fetch(`${API}/api/cors`).then((data)=>{
      data.json().then((value: {message: string})=>{
        setMessage(value.message)
      })
      // data.json().then((message)=>{
      //   setMessage(message ? message : "error no api message" )
      // })
    })
  }
  return <>
    <div className="" onClick={() => GET()}>Message: {message}</div>
  </>
}
