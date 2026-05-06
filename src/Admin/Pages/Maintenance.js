import React from "react";
import { Col, Container,Row } from "react-bootstrap";
import um from "../../Assets/maintanence.jpg";
import "../../Admin/Styles/Maintenance.css";

function Maintenance(){
    return(
        <>
        <Container className="cont-um">
            <Row className="justify-content-center">
                <Col md={4}>
                <img src={um} alt="" srcset="" width={500} className="um-img"/>
                </Col>
            </Row>
        </Container>
        </>
    );
}


export default Maintenance;