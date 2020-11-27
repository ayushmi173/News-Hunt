import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowNews from "./ShowNews";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";

function AxiosFile() {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const clickedVal = useSelector((state) => state.clickedValue);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `http://newsapi.org/v2/everything?q=${clickedVal}&from=2020-10-26&sortBy=publishedAt&apiKey=5753bb19f4884a16b2259e427b72356f`
        )
        .then((response) => {
          setData(response.data.articles);
          setTimeout(() => {
            setLoading(true);
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, [clickedVal]);

  return (
    <div className="grid">
      {Loading === true ? (
        data.map((item, index) => {
          return (
            <>
            {index === 0  ? <Header /> : <></>}
              <div key={+new Date() + Math.random()}>
                <ShowNews
                  id={index}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  date={item.publishedAt}
                  urlToImage={item.urlToImage}
                />
              </div>
              {data.length === index + 1 ? <Footer /> : <></>}
            </>
          );
        })
      ) : (
        <div className="spinner">
          <Spinner animation="border" role="status" />
        </div>
      )}
    </div>
  );
}

export default AxiosFile;
