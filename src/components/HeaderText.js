import React from 'react'
import JumboTron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeaderText(props) {
    return(
        <JumboTron>
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        {props.title && <h1>{props.title}</h1>}
                        {props.subTitle && <h4>{props.subTitle}</h4>}
                        {props.text && <h7>{props.text}</h7>}
                    </Col>
                </Row>
            </Container>
        </JumboTron>
    )

}


export default HeaderText;