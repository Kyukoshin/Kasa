import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Home/Home.scss";
import { Suspense } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home">
      <Suspense fallback="">
        <Banner
          background="home"
          filter="home"
          text="home"
          content="Chez vous, partout et ailleurs"
        />
      </Suspense>
      <section className="card_container">
        {data.map((appart, id) => (
          <div className="card_wrap" key={id}>
            <Link to={`/housing/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
