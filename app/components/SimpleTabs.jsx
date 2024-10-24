"use client";
import { useState } from "react";
import React from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

import { buttonsCategories } from "../data/btnCategories";

const SimpleTabs = () => {
  // define state with initial value to let the tabs start with that value
  const [activeTab, setActiveTab] = useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };

  return (
    <Tabs activeTab={activeTab} onTabClick={onTabClick}>
      {buttonsCategories.map((item, i) => (
        <Tab key={i} > {item.displayName}</Tab>
      ))}
    </Tabs>
  );
};

export default SimpleTabs;
