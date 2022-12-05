import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Victor Malhotra</title>
        <meta name="description" content="Victor Malhotra's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    </div>
  )
}
