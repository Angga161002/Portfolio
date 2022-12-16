import React from 'react';

export default function Contact() {
    return (
        <section className="contact" id="contact">
        <h1 className="heading"> <span>contact</span> me </h1>

        <div className="row">

            <div className="content">

                <h3 className="title">contact info</h3>

                <div className="info">
                    <h3> <i className="fas fa-envelope"></i> syahbandarpujangga16@gmail.com </h3>
                    <h3> <i className="fas fa-phone"></i> +62 81372281810 </h3>
                    <h3> <i className="fas fa-map-marker-alt"></i> Pariaman, Indonesia - 25522. </h3>
                    <a href=" https://github.com/Angga161002?tab=repositories" style={{textDecoration:"none"}}><h3> <i className="fab fa-github"></i>Angga160210 </h3></a>
                    
                </div>

            </div>

            <form action="">

                <input type="text" placeholder="name" className="box"/>
                <input type="email" placeholder="email" className="box"/>
                <input type="text" placeholder="project" className="box"/>
                <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i> </button>

            </form>

        </div>
    </section>

    );
}
