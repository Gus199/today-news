// import Head from 'next/head'
import { useState,useEffect } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";



export default function Home() {
  const API_KEY = "94f14bf15caf478d9da831f70545d172";
  const [search, setSearch] = useState("https://github.com/Gus199");
  const [img, setImg]=useState("")
  const [error, setError] =useState(false)
  const [loading, setLoading] = useState(false)
  const URL =`https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=${search}&full_page="true"&fresh="true"`

 const getScreenShot = async () => {
   setSearch("")
   setError(false)
   setLoading(true)
   const response = await fetch(URL);
   if(response.ok) {
     setImg(response);
     setLoading(false);
   }else {
     setError(true)
   }
 }

  const searchScreenShots = (e) => {
    e.preventDefault();
    getScreenShot();
    console.log(getScreenShot)
    console.log('hello')
  }

  useEffect(() => {
setSearch('');
getScreenShot();
  }, [])
  return (
    <Layout>
      <div>
      <div className=" container">
        <form onSubmit={searchScreenShots}>
          <input
          autoFocus
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn">
            Take ScreenShot
          </button>
        </form>
      </div>
<div>
  {img &&(
    <a href={img.url} >
  <img src={img.url} alt="background"/>
  </a>
  )}
  
</div>
      

      </div>
    </Layout>
  );
}
