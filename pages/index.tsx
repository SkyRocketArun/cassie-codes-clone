import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Index from '../Component/Layout'
import styles from '../styles/Home.module.css'
import HomePage from './home'

const Home: NextPage = () => {

  return (
    <Index>
      <HomePage />
    </Index>
  )
}

export default Home
