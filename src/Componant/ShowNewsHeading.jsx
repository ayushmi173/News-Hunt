import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Accordion, Card, Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import ShowNews from "./ShowNews";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowNewsHeading = () => {
  const NewHeaderClickedData = useSelector((state) => state.headerClickedData);
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const day = currentDate.getDate();
  const apiKey = "47cac021c66248cd8d301424ab647054";

  const showToast = () => {
    toast(`7 New Notifications : ${NewHeaderClickedData}`);
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `http://newsapi.org/v2/everything?q=${NewHeaderClickedData}&from=${year}-${month}-${day}&sortBy=publishedAt&apiKey=${apiKey}`
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
  }, [NewHeaderClickedData]);

  useEffect(() => {
    showToast();
  }, [NewHeaderClickedData]);

  return (
    <>
      <div className="chunksNews">
        {Loading === true ? (
          <>
            <Header />
            <>
              <div>
                {showToast}
                <ToastContainer />
              </div>
            </>

            {data.map((item, index) => {
              return (
                <>
                  {index === 0 ? (
                    <>
                      <div key={+new Date() + Math.random()}>
                        <ShowNews
                          id={0}
                          title={data[0].title}
                          description={data[0].description}
                          url={data[0].url}
                          date={data[0].publishedAt}
                          urlToImage={data[0].urlToImage}
                        />
                      </div>
                    </>
                  ) : (
                    index <= 6 && (
                      <Accordion>
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              <h5 className="make-center">
                                Trending News : {index + 1}
                              </h5>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <h3 className="solo-news">Title : </h3>
                              <h3 className="make-center">{item.title}</h3>
                              <p className="make-center">
                                <h3 className="solo-news">Description : </h3>
                                {item.description}
                                <a className="make-center" href={item.url}>
                                  Read More..
                                </a>
                              </p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    )
                  )}
                </>
              );
            })}
            <Footer />
          </>
        ) : (
          <div className="spinner">
            <Spinner animation="border" role="status" />
          </div>
        )}
      </div>
    </>
  );
};

export default ShowNewsHeading;
