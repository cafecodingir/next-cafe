import { faCoffee, faHouse, faImage, faBars, faMagnifyingGlass, faEllipsis, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  children: React.ReactNode
}

export default function Master({ children }: Props) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>کافه کدینگ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div dir="rtl" className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="navbar bg-base-100 fixed">
            <div className="navbar-start">
              <label htmlFor="my-drawer" className="btn btn-ghost btn-circle lg:hidden">
                <FontAwesomeIcon icon={faBars} width={20} />
              </label>
              <Link href={'/'}>
                <a className="btn btn-ghost normal-case text-xl">کافه کدینگ</a>
              </Link>
            </div>
            <div className="navbar-center"></div>
            <div className="navbar-end">
              <ul className="menu menu-horizontal hidden p-0 lg:flex">
                <li className="pl-1">
                  <Link href="/register">
                    <a className="btn btn-ghost">عضویت</a>
                  </Link>
                </li>
                <li className="pl-1">
                  <Link href="/login">
                    <a className="btn btn-ghost">ورود</a>
                  </Link>
                </li>
              </ul>
              <div className="form-control  p-1 hidden lg:flex">
                <input type="text" placeholder="جستجو" className="input input-bordered input-md" />
              </div>
              <button className="btn btn-ghost btn-circle lg:hidden">
                <FontAwesomeIcon icon={faMagnifyingGlass} width={20} />
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FontAwesomeIcon icon={faBell} width={20} />
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <FontAwesomeIcon icon={faEllipsis} width={20} />
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a>خانه</a>
                  </li>
                  <li>
                    <a>ثبت نام</a>
                  </li>
                  <li>
                    <a>درباره ما</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>{children}</div>
          <div className="btm-nav lg:hidden">
            <label className={router.pathname == '/' ? 'active' : ''}>
              <Link href={'/'}>
                <FontAwesomeIcon icon={faHouse} width={router.pathname == '/' ? 30 : 20} />
              </Link>
            </label>
            <label className={router.pathname == '/club' ? 'active' : ''}>
              <Link href={'/club'}>
                <FontAwesomeIcon icon={faCoffee} width={router.pathname == '/club' ? 30 : 20} />
              </Link>
            </label>
            <label className={router.pathname == '/categories' ? 'active' : ''}>
              <Link href={'/categories'}>
                <FontAwesomeIcon icon={faImage} width={router.pathname == '/categories' ? 30 : 20} />
              </Link>
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li className="p-3 m-1 text-center rounded bg-base-200">منوی اصلی</li>
            <li className="hover-bordered">
              <a>ثبت نام</a>
            </li>
            <li className="hover-bordered">
              <a>سبد خرید</a>
            </li>
            <li className="hover-bordered">
              <a>باشگاه</a>
            </li>
            <li className="hover-bordered">
              <a>دسته بندی</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
