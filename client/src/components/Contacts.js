import React from "react";
import "../style.css";

function Contacts() {
    return (
      <div>

        {/* Заголовок */}
        <header className="bg-header py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Want to know more</h1>
              <h1 className="display-4 fw-bolder">or ask questions?</h1>
              <p className="lead fw-normal text-white-50 mb-0">This is the right page!</p>
            </div>
          </div>
        </header>
  
        {/* Секция */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            {/* Здесь можно добавить перечень гиперссылок на соц.сети и форму обратной связи */}
            <p>Здесь будет перечень гиперссылок на соц.сети + форма обратной связи?</p>
          </div>
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
  
  export default Contacts;
  