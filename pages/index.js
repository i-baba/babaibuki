import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>馬場息吹公式サイト</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="うんち！" />
        <p className="description">
          まだ工事中！ <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
