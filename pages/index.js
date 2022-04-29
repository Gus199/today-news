// import Head from 'next/head'
import { useState, useEffect } from "react";
//import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Register from "../components/register";
import Creatable from "react-select/creatable";

const roles = [
  { label: "https://www.youtube.com/", value: 1 },
  { label: "https://www.nytimes.com/", value: 2 },
  { label: "tutor", value: 3 },
  { label: "guardian", value: 4 },
];
const admin = "url";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
};

export default function Home() {
  const [roleValue, setRoleValue] = useState("");

  const handleChange = (field, value) => {
    switch (field) {
      case "roles":
        setRoleValue(value);
        break;

      default:
        break;
    }
  };

  const API_KEY = "94f14bf15caf478d9da831f70545d172";
  const [search, setSearch] = useState("https://github.com/Gus199");
  const [img, setImg] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const URL = `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=${search}&full_page="true"&fresh="true"`;

  const getScreenShot = async () => {
    setSearch("");
    setError(false);
    setLoading(true);
    const response = await fetch(URL);
    if (response.ok) {
      setImg(response);
      setLoading(false);
    } else {
      setError(true);
    }
  };

  const searchScreenShots = (e) => {
    e.preventDefault();
    getScreenShot();
    
  };

  useEffect(() => {
    setSearch("");
    setRoleValue("")
    getScreenShot();
  }, []);
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
            <div className="input">
              <label>Role(s)</label>
              <Creatable
                isClearable
                isMulti
                value={roleValue}
              onChange={(value) => handleChange("roles", value)}
            
               
                options={roles}
             
                styles={customStyles}
               
                
              />
              <button type="submit" className="btn">
              Take ScreenShot
            </button>
            </div>
            {/* <button type="submit" className="btn">
              Take ScreenShot
            </button> */}
          </form>
        </div>
        <div>
          {img && (
            <a href={img.url}>
              <img src={img.url} alt="background" />
            </a>
          )}
        </div>
      </div>
      <div></div>
    </Layout>
  );
}
