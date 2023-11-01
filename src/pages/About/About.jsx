import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import about from "../../data/about.json";
import "../About/About.scss";
import { Suspense } from "react";

export default function About() {
  return (
    <div>
      <Suspense fallback="">
        <Banner background="about" />
      </Suspense>
      <div className="wrap_collapse_about">
        {about.map((key) => (
          <Collapse
            title={key.aboutTitle}
            children={key.aboutText}
            classDetail="collapse_about"
          />
        ))}
      </div>
    </div>
  );
}
