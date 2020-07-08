import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import iconlanguages from "../../image/languages.svg";
import {useTranslation} from "react-i18next";
import './multiLanguages.css';

function MultiLanguages() {
    const [t,i18n] = useTranslation("common");
    const menu = (
     <Menu>
       <Menu.Item key="0">
       <li onClick={() => i18n.changeLanguage("en")}>English</li>
       </Menu.Item>
       <Menu.Item key="1">
       <li onClick={() => i18n.changeLanguage("vi")}>Việt Nam</li>
       </Menu.Item>
     </Menu>
   );
   return (
     <div style={{display:"flex",justifyContent:"flex-end"}} >
     <img src={iconlanguages} style={{backgroundSize:"30px 30px",width:"30px",alignContent:"center"}} alt = "iconLanguages"></img>
       
     <Dropdown overlay={menu} trigger={['click']}>
     <button style={{border:"none", background:"transparent", cursor:"pointer"}} className="ant-dropdown-link multiLanguages" onClick={e => e.preventDefault()}>
       {t("languages.title")} <DownOutlined />
     </button>
     </Dropdown>
     </div>
   );
 }
 

export default MultiLanguages;
