import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Tags from "../../components/Tags/Tags";
import Collapse from "../../components/Collapse/Collapse";
import Owner from "../../components/Owner/Owner";
import "../Housing/Housing.scss";

export default function Housing() {
  const parameters = useParams();
  const [appart, setAppart] = useState();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.id === parameters.id);
        checkValidID(filteredData.length);
        setAppart(...filteredData);
      })
      .catch((error) => console.error(error));
  }, []);

  function checkValidID(id) {
    if (id === 0) {
      window.location.href = "/housing/";
    }
  }

  const images = appart && appart.pictures;
  const nom = appart && appart.title;
  const rating = appart && appart.rating;
  const loc = appart && appart.location;
  const desc = appart && appart.description;
  const equip = appart && appart.equipments;
  const tags = appart && appart.tags;
  const owner = appart && appart.host.name;
  const ownerpp = appart && appart.host.picture;

  return (
    <div>
      <Carousel slides={images} />
      <div className="info_wrap">
        <div className="info_wrap_left">
          <h1>{nom}</h1>
          <h2>{loc}</h2>
          <div>
            <Tags list={tags} />
          </div>
        </div>
        <div className="info_wrap_right">
          <Owner name={owner} picture={ownerpp} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="wrap_collapse_housing">
        <Collapse title="Description" classDetail="collapse">
          {desc}
        </Collapse>
        <Collapse title="Équipements" classDetail="collapse">
          {equip}
        </Collapse>
      </div>
    </div>
  );
}
