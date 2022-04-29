import {useState} from "react";
import styles from "../../styles/sidebar.module.css";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import {SidebaData, sidebarData} from './SidebarData'
import SubMenu from "./submenu";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavIcon = styled.div`
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
   top:0;
   left:${({ sidebar }) =>(sidebar ? '0' : '-100%')};
  // transition:350ms;
  // z-index: 10;
`;
const SidebarWrapee = styled.div`
width:100%
`;
export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaBars onClick={showSidebar} className={styles.icon}/>
        </NavIcon>
      </Nav>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrapee>
          <NavIcon to="#">
            <AiOutlineClose  onClick={showSidebar} className={styles.icon} />
          </NavIcon>
          {sidebarData.map((item, index) => {
            return <SubMenu  item={item} key={index} />

          })}
        </SidebarWrapee>
      </SidebarNav>
    </>
  );
}
