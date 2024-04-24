import React from "react";
import styles from '../Header/Header.module.css';
import imageOne from '../../assets/image/logo (4).png';
import imageTwo from '../../assets/image/phone-call.svg' ;

const header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}> 
        <img src={imageOne} alt="imageOne" /> 
        <h1>COURSE</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT US</a>
          </li>
          <li>
            <a href="">COURSES</a>
          </li>
          <li>
            <a href="">ELEMENTS</a>
          </li>
          <li>
            <a href="">NEWS</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className={styles.phone}>
      
         <img src={imageTwo} alt="imageTwo" />
            <p>+43 4566 7788 2457</p>
      </div>
    </div>

  );
};

export default header;
