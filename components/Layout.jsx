import Head from 'next/head'
import React from 'react'
import Main from './Main'
import SideMenu from './SideMenu'

const Layout = () => {
  return (
    <div className='pt-[60px] w-full'>
      <SideMenu />
      <Main />
      <Head>
        <title>Clone Twitch</title>
        <meta name="description" content="Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export default Layout