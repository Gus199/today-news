import Head from "next/head";
import styles from '../styles/Layout.module.css'
import Header from "./Header";
import {useRouter} from 'next/router'
import Footer from "./Footer";
// import Showcase from "./Showcase";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {/* {router.pathname === '/'  && <Showcase />} */}
      <div className={styles.container}>
          {children} 
      </div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Car Show | Find Best Car show ",
  description: " Find the latest custom cars",
  keywords: "Cars, sport cars, custom cars",
};
