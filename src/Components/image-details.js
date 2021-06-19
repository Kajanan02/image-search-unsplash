import React from "react";
import {Row, Col} from "react-bootstrap";

const ImageDetails = (props) => {
    console.log(props);

    return (
        <div className={"sa-modal-bg "}>
            <div className="sa-modal-bg-inner">
                <div className="sa-view-modal-box">
                <div>
                    <h3 className={'d-inline'}>Image Details</h3>
                    <h3 className={'float-right font-weight-bold btn'} onClick={props.onClose}> X  </h3>
                </div>
                    <div className={'container mt-5'}>
                    <Row className={'mt-2'}>
                        <Col>
                            <Row className={'align-items-center'}>
                                <Col sm={4}>Alt Description : </Col>
                                <Col className={'img-data'}>{props.imageData.alt_description}</Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className={'align-items-center'}>
                                <Col sm={4}>Color : </Col>
                                <Col className={'img-data'}>{props.imageData.color}</Col>
                            </Row>
                        </Col>
                    </Row>
                        <Row className={'mt-3'}>
                            <Col>
                                <Row className={'align-items-center'}>
                                    <Col sm={4}>Description : </Col>
                                    <Col className={'img-data'}>{props.imageData.description ? props.imageData.description : 'NA' }</Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className={'align-items-center'}>
                                    <Col sm={4}>Created :  </Col>
                                    <Col className={'img-data'}>{props.imageData.created_at}</Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className={'mt-3'}>
                            <Col>
                                <Row className={'align-items-center'}>
                                    <Col sm={4}>Height : </Col>
                                    <Col className={'img-data'}>{props.imageData.height}</Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className={'align-items-center'}>
                                    <Col sm={4}>Width : </Col>
                                    <Col className={'img-data'}>{props.imageData.width}</Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className={'mt-3'}>
                            <Col>
                                <Row className={'align-items-center'}>
                                    <Col sm={4}>Likes : </Col>
                                    <Col className={'img-data'}>{props.imageData.likes}</Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className={'align-items-center'}>
                                    <Col sm={4}>ID : </Col>
                                    <Col className={'img-data'}>{props.imageData.id}</Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default ImageDetails;
