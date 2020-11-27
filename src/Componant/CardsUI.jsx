import React from "react";
import MainCard from "./MainCard";
import { useId } from "react-id-generator";
import Footer from "./Footer";
import Header from "./Header";
const CardsUI = () => {
  const [htmlId] = useId();
  const CardData = [
    {
      icon: "faHome",
      name: "Sports",
    },
    {
      icon: "faCoffee",
      name: "Politics",
    },
    {
      icon: "faCoffee",
      name: "Technology",
    },
    {
      icon: "faCoffee",
      name: "World",
    },
    {
      icon: "faCoffee",
      name: "Science",
    },
    {
      icon: "faCoffee",
      name: "Entertainment",
    },
    {
      icon: "faCoffee",
      name: "Weather",
    
    },
    {
      icon: "faCoffee",
      name: "Economy",
  
    },
    {
      icon: "faCoffee",
      name: "Romance",
    },
  ];

  return (
    <>
      <Header />
      {CardData.map((item, index) => {
        return (
          <>
            <MainCard
              key={htmlId}
              icon={item.icon}
              name={item.name}
            />
          </>
        );
      })}
      <Footer />
    </>
  );
};

export default CardsUI;
