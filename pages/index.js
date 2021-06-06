import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home() {

  return (
    <div className={styles.container}>
      <NavBar />

      <h1>Home Page</h1>

      <Link href="/users">
        <a>See User List</a>
      </Link>

      <Footer />
    </div>
  )
}
