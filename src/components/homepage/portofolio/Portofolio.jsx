import React from 'react';
import Profil from '../../../assets/homepage/pic.jpg';
import Por1 from '../../../assets/homepage/pic2.png';
import Por2 from '../../../assets/homepage/pic3.png';
import Por3 from '../../../assets/homepage/pic4.png';
import Por4 from '../../../assets/homepage/pic5.png';
import Por5 from '../../../assets/homepage/pic6.png';
import Por6 from '../../../assets/homepage/pic7.png';


export default function Portofolio() {
    return (
        <section className="portfolio" id="portfolio">

            <h1 className="heading"> my <span>portfolio</span> </h1>

            <div className="box-container">

                <div className="box">
                    <a href="https://github.com/Angga161002/flypass-frontend"><img src={Por1} alt='' /></a>
                </div>

                <div className="box">
                <a href="https://github.com/Angga161002/flypass-frontend"><img src={Por5} alt='' /></a>
                </div>

                <div className="box">
                <a href="https://github.com/Angga161002/flypass-frontend"><img src={Por6} alt='' /></a>
                </div>

                <div className="box">
                <a href="https://github.com/Angga161002/Chalange-Chapter-7"><img src={Por2} alt='' /></a>
                </div>

                <div className="box">
                <a href="https://github.com/Angga161002/Chalange-Chapter-7"><img src={Por3} alt='' /></a>
                </div>

                <div className="box">
                <a href="https://github.com/Angga161002/Chalange-Chapter-7"><img src={Por4} alt='' /></a>
                </div>

            </div>

        </section>
    );
}
