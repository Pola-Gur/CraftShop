import React from "react";
import "../style.css";

function About() {
    return (
      <div>
        {/* Заголовок */}
        <header className="bg-header py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Welcome to our Craft Shop!</h1>
              <p className="lead fw-normal text-white-50 mb-0">You can not only choose products for yourself, but also order your own individual design!</p>
            </div>
          </div>
        </header>
  
        {/* Секция */}
        <section className="py-5 about">
          We are young company. We are a shop for the soul. Here you can find postcards, keychains, gifts for any occasion!
        </section>
  
        {/* Подвал */}
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default About;
  