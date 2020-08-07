import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'


function Footer() {
    return(
        <footer className="mt-1">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sd={12}>
                            Matthew Brogan
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This React site was built by Matthew Brogan
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}





export default Footer;