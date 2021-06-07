import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home() {

  //document.title = 'Home';

  return (

    // className={styles.container}

    <div >

      <h1 className={styles.title}>Home Page</h1>

      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic earum possimus laudantium veniam est repellat rerum. Similique corrupti dolores earum a saepe eius dolore? Eos cupiditate sed quia neque exercitationem, recusandae temporibus quis, labore aperiam id animi, earum quisquam.</p>

      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, suscipit corporis veniam maiores illo mollitia ipsum, aspernatur, vitae amet sunt voluptatibus! Est nihil optio ipsam.</p>

      <Link href="/users">
        <a className={styles.btn}>See User List</a>
      </Link>

    </div>
  )
}
