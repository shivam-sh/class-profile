import Head from 'next/head';
import { Header } from '../components/layout/layout';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.scss';

const Background = dynamic(() => import('../components/threejs/floatingRects'));

export default function Home() {
  return (
    <>
      <Head>
        <title>SYDE '25</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
      </Head>

      <Header />

      <div className={styles.background}>
        <Background />
      </div>

      <div className={styles.banner}>
        <p>hi</p>
      </div>
    </>
  );
}
