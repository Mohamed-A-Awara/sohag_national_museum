/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Main_Header from "./Main-Header.jsx";
// import Lab_View from './Lab-View'
import { Container } from "react-bootstrap";
import Mobile_View from "./Mobile-View.jsx";
import Lab_View from "./Lab-View.jsx";
import Footer from "../Footer/Footer.jsx";

function Virtual() {
    return (
        <>
            <div className="all-parent">
                
                < Main_Header />

                <section className="tour-guide mt-5 pt-3 pb-3">
                        <Container fluid>
                        <h2 className="pt-3 pb-3">Learn about some of the museum's pieces</h2>
                        </Container>
                </section>

                <section>{ViewTour()}</section>
                <Footer />
            </div>
        </>
    );
}

function ViewTour() {
    if (window.screen.availWidth <= 768) {
        return <Mobile_View />;
    } else {
        return <Lab_View />;
    }
}
export default Virtual;
