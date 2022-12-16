import React from 'react';

export default function About() {
    return (
        <section className="about" id="about">

            <h1 className="heading"> <span>about</span> me </h1>

            <div className="row">

                <div className="info">
                    <h3> <span> name : </span> Syahbandar Pujangga </h3>
                    <h3> <span> age : </span> 20 </h3>
                    <h3> <span> post : </span> Fullstack web developer </h3>
                    <h3> <span> language : </span> Indonesia </h3>
                    <a href="https://drive.google.com/file/d/1pCZn2ZHSpmVrQyQyaa-2Eyb-vszgGZe7/view?usp=sharing"><button className="btn"> download CV <i className="fas fa-download"></i> </button></a>
                </div>

                <div className="counter">

                    <div className="box">
                        <span>10+</span>
                        <h3>porject completed</h3>
                    </div>

                </div>

            </div>

        </section>
    );
}
