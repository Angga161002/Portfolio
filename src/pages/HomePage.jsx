import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Navbar from '../components/homepage/navbar/Navbar';
import About from '../components/homepage/about/About';
import Contact from '../components/homepage/contact/Contact';
import Education from '../components/homepage/education/Education';
import Home from '../components/homepage/home/Home';
import Portofolio from '../components/homepage/portofolio/Portofolio';
import { actionType } from '../redux/reducer/globalActionType';

// style homepage
import '../styles/style.css'
import '../scripts/script.js'

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Home />
                <About />
                <Education />
                <Portofolio />
                <Contact />

                {/* example using redux */}
                {/* <h4 className="text-primary fs-5">Tes Counter</h4>
                <div className="counter">
                    <button onClick={this.props.plusCounter}>+</button>
                    <h3>{this.props.counter}</h3>
                    <button onClick={this.props.minCounter}>-</button>
                </div> */}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        plusCounter: () => dispatch({
            type: actionType.PLUS_COUNTER,
        }),
        minCounter: () => dispatch({
            type: actionType.MIN_COUNTER,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);