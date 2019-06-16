import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css"

const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Danelle Pontzious</h1>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;