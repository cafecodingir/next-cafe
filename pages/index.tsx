import type { NextPage } from 'next'
import { faCoffee, faHouse, faImage, faBars, faMagnifyingGlass, faEllipsis, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          <p className="mt-3"> ترکیبی از nextjs و daisyUI با فونت فارسی</p>
          <p className="mt-3 text-xs text-green-500 hidden lg:block">جهت مشاهده ظاهر ریسپانسیو سایز صفحه را تغییر دهید</p>
        </main>
      </div>
    </Master>
  )
}

export default Home
