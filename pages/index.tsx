import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Master from './master'

const Home: NextPage = () => {
  return (
    <Master>
      <div className={styles.container}>
        <main className={styles.main}>
          <a className="btn btn-primary">سلام دنیا</a>
          ترکیبی از nextjs و daisyUI با فونت فارسی
        </main>

        <footer className={styles.footer}>
          <Link href={'https://github.com/cafecodingir/next-cafe'}>مخزن</Link>
        </footer>
      </div>
    </Master>
  )
}

export default Home
