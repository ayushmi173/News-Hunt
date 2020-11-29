import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowNews from "./ShowNews";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";

function AxiosFile() {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [toastVal, setToast] = useState(true);
  const clickedVal = useSelector((state) => state.clickedValue);

  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const day = currentDate.getDate();
  const apiKey = "47cac021c66248cd8d301424ab647054";

  const showToast = () => {
    toast(`20 New Notifications : ${clickedVal}`);
  };

  // const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `http://newsapi.org/v2/everything?q=${clickedVal}&from=${year}-${month}-${day}&sortBy=publishedAt&apiKey=${apiKey}`
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

  useEffect(() => {
    if (toastVal) {
      showToast();
    }
    setToast(false);
  }, [setToast]);

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
              <>
                <div>
                  <ToastContainer />
                </div>
              </>
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
