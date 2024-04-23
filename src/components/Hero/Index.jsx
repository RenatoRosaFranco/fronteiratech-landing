import React from "react";
import logo from '../../assets/images/logo.jpg'; 
import './style.scss';

const Hero = () => {
    return(
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={logo} className="hero-image pull-left" alt="Fronteira Tech"/>
                        <h5 class='bold'>https://fronteiratech.dev</h5>
                        <h1 className="bold title">Fronteira [Tech]</h1>
                        <p className="subtitle">A primeira comunidade Tech de 
                        <span className="bold"> São Borja</span>.</p>
                    </div>

                    <a href='https://facebook.com/fronteiratechsb'>
                        <div className="social-block facebook">
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                    </a>

                    <a href='https://instagram.com/fronteiratechsb'>
                        <div className="social-block instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </a>

                    <a href='https://instagra.com/fronteiratechsb'>
                        <div className="social-block discord">
                            <i class="fa-brands fa-discord"></i>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Hero);