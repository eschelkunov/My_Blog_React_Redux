import React from 'react';
import Footer from '../Footer.jsx';
import HeaderHome from './HeaderHome.jsx';
import SideBar from './SideBar.jsx';
import ContentHome from './ContentHome.jsx';
import styles from './css/Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HeaderHome />
      <SideBar />
      <ContentHome />
      <Footer />
    </div>
  );
}
