import React from 'react'
import {
    Card,
    CardBody,
    CardText, Row, Col
  } from "reactstrap";
const LoadingCard = (props) =>{
    return(
        <>
        <Row style={{marginBottom:"20px"}}>
            <Col sm="6">
                <Card body outline color="default" className="text-center">
                    <CardBody>
                        <CardText>Loading...</CardText>               
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </>
    );
}

export default LoadingCard

