import Link from "next/link";
import styled from "styled-components";
 import styles from "../../styles/sidebar.module.css";
 import {useState} from 'react'

const SidebarLink = styled(Link)`

display: flex;
color: red;
//  color: #e1e9fc;
justify-content: space-betwen;
align-items: center;
padding: 20px;
list-style: none;
heigght: 60px;
text-decpration: none;
fonct-size: 18px

&:hover {
    background:#252831;
    border-left:4px; solid #632ce4;
    cursor: pointer;
}
`
const SidebarLabel = styled.span`
margin-left: 16px;
`;

const SubMenu = ({item}) => {

  return (
  <>
  <SidebarLink href={item.path}  >
    <div >
        {item.icon}
        <SidebarLabel className={styles.si} >
            {item.title}
        </SidebarLabel>
    </div>
   
  </SidebarLink>
  </>
  );
};

export default  SubMenu