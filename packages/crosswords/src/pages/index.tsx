import Head from 'next/head'

import Grid from '@/components/grid/grid'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crosswords</title>
      </Head>
      <main>
          <Grid height={10} width={12}></Grid>
      </main>
    </>
  )
}
