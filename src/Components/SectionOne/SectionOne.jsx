import React from "react";
import style from "../SectionOne/SectionOne.module.css";
import imageThree from "../../assets/image/slider_background.jpg";
import imageFour from "../../assets/image/earth-globe.svg";
import imageFive from "../../assets/image/books.svg";
import imageSix from "../../assets/image/professor.svg";

const SectionOne = () => {
  return (
    <div id={style.sectionFirst}>
      <div className={style.containerSecond}>
        <div className={style.writeFirst}>
          <h1 className={style.h1}>Get Your</h1>
          <h1 className={style.colorfullh1}>EDUCATION</h1>
          <h1 className={style.writeSecond}>today!</h1>
          <div>
            <div>
              <h4>Online Courses</h4>
              <p>VIEW MORE</p>
              <img src={imageFour} alt="imageFour" />
            </div>

            <div>
              <h4>Our Library</h4>
              <p>VIEW MORE</p>
              <img src={imageFive} alt="imageFive" />
            </div>

            <div>
              <h4>Our Teachers</h4>
              <p>VIEW MORE</p>
              <img src={imageSix} alt="imageSix" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
