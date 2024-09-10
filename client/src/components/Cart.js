import React from "react";
import "../style.css";

function Cart() {
    return (
      <div>
        {/* Навигация */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Shop name</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/About">About</a></li>
                <li className="nav-item"><a className="nav-link" href="/contacts">Contacts</a></li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </button>
              </form>
            </div>
          </div>
        </nav>
  
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
  