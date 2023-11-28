"use client"
import React from "react"
import config from "@/config.json"
import style from "@/home.module.css"
type Data = { message: string }

export default function Home() {
  const [message, setMessage] = React.useState("here will come api message");
  React.useEffect(()=>{
    fetch(`${config.API_URL}/api/hello`,{
      credentials: "include",
    })
      .then(async (res)=>{
        res.json()
        .then((data: Data)=>{
            setMessage(data.message)
          })
      })
  }, [])
  return <>
    <div className={`${style.test}`}>message: {message}</div>
  </>
}
