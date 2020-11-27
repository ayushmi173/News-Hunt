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
      color: "black",
    },
    {
      icon: "faCoffee",
      name: "Politics",
      color: "black",
    },
    {
      icon: "faCoffee",
      name: "Technology",
      color: "black",
    },
    {
      icon: "faCoffee",
      name: "World",
      color: "black",
    },
    {
      icon: "faCoffee",
      name: "Science",
      color: "black",
    },
    {
      icon: "faCoffee",
      name: "Entertainment",
      color: "black",
    },
    {
      icon: "faCoffee",
      name: "Weather",
      color: "black",
    },
    {
      icon: "faCoffee",
      name: "Economy",
      color: "black",
    },
    {
      icon: "faCoffee",
      name: "Romance",
      color: "black",
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
              color={item.color}
            />
          </>
        );
      })}
      <Footer />
    </>
  );
};

export default CardsUI;
