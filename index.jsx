import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>car game</title>
        <meta name="description" content="it's a game about cars" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="box-wrapper">
        <div className="middle-box">
          <h2 className="title">car game</h2>
          <button className="play-button">
            play
          </button>
        </div>
      </div>
    </div>
  )
}
