import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'; 

const Home = () => {
    return (
        <div>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Shop name</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="contacts.html">Contacts</a></li>
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

            {/* Header */}
            <header className="bg-header py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Welcome to our Craft Shop!</h1>
                        <p className="lead fw-normal text-white-50 mb-0">You can not only choose products for yourself, but also order your own individual design!</p>
                    </div>
                </div>
            </header>

            {/* Section */}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {/* Card 1 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="/products_images/photo_2024-06-03_16-53-40 (2).jpg" alt="Based on your photo" />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Based on your photo</h5>
                                        <span>25₪</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                <img className="card-img-top" src="/products_images/photo_2024-06-03_16-53-40.jpg" alt="Birthday set" />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Birthday set</h5>
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        <span>$18.00</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                <img className="card-img-top" src="/products_images/photo_2024-06-03_16-53-36.jpg" alt="Tel Aviv - Jaffa set" />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Tel Aviv - Jaffa set</h5>
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        <span>$25.00</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="/products_images/photo_2024-06-03_17-43-07.jpg" alt="Funny deer" />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Funny deer</h5>
                                        <span>$40.00</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                <img className="card-img-top" src="/products_images/photo_2024-06-03_16-53-35.jpg" alt="Sarona-Azrieli" />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Sarona-Azrieli</h5>
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        <span>$25.00</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="/products_images/photo_2024-06-03_16-53-39.jpg" alt="Beagle set" />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Beagle set</h5>
                                        <span>$120.00 - $280.00</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        {/* Card 7 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                <img className="card-img-top" src="/products_images/photo_2024-06-03_17-42-30.jpg" alt="Happy Hanukkah" />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Happy Hanukkah</h5>
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        <span>$18.00</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                                </div>
                            </div>
                        </div>
                        {/* Card 8 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="/products_images/photo_2024-06-03_16-53-32.jpg" alt="Yom Ahava set" />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Yom Ahava set</h5>
                                        <span>$40.00</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                        {/* Card 9 */}
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="products_images/photo_2024-06-03_16-53-38.jpg" alt="Random set" />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Random set</h5>
                                        <span>$40.00</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Pola Gur 2024</p></div>
            </footer>
        </div>
    );
};

export default Home;
