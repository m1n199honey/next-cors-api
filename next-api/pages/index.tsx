import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next API with Cors</title>
        <meta name="description" content="Generated by TechSnippetHub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={``}>
        <div className="para w-screen h-screen flex justify-center items-center text-red-500">
          <span className="">just add /api to url and use it</span>
        </div>
      </main>
    </>
  )
}
