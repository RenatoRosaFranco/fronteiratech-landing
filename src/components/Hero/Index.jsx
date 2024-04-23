import React from "react";
import './style.scss';

const Hero = () => {
    return(
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="bold title">Fronteira[Tech]</h1>
                        <p className="subtitle">A primeira comunidade tech de São Borja.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Hero);