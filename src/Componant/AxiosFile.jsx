import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowNews from "./ShowNews";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
// import { useDispatch } from "react-redux";


function AxiosFile() {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const clickedVal = useSelector((state) => state.clickedValue);

  // const dispatch = useDispatch();
 
  useEffect(() => {

    const getData = async () => {

      await axios
        .get(
          `http://newsapi.org/v2/everything?q=${clickedVal}&from=2020-10-27&sortBy=publishedAt&apiKey=bab5fbcb40754b61977713d67530ce82`
        )
        .then((response) => {

          setData(response.data.articles);

          // dispatch({ type: "SET-FETCH-DATA", payload: response.data.articles });
          

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
              {index === 0 ? <Header /> : <></>}
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
