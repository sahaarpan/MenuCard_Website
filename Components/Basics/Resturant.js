import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js"; //importing the whole menu api
import MenuCard from "./MenuCard"; 
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
]; 

// console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu); //usestate where menu is passed as initial value for menudata.
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} /> // passing menuData as default value to MenuCard
    </>
  );
};

export default Resturant;
