import React, { useRef } from "react";
import "../Styles/Ipr.css";
import { Col, Row ,Form,Container,Card, Button} from "react-bootstrap";
import ReactToPdf from "react-to-pdf";


function Ipr(){
    const ref = useRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [21,9]
    };
    return(
        <>
        <Container fluid>
            <Row className="text-end mt-3">
                <Col>
                <ReactToPdf targetRef={ref} filename="IPR.pdf" options={options}>
        {({toPdf}) => (
            <Button onClick={toPdf} variant="" className="btn btn-outline-dark">Download</Button>
        )}
    </ReactToPdf>
                </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Card className="mt-3" ref={ref}>
                    <Row className="m-3">
                        <Col>
                            <p className="fs-3">Please Do This Striping Before Giving The First Aligner</p>
                            <Row style={{backgroundColor:"white"}}>
                                <Col className="pt-4 pb-5">
                                <table className="mt-3">
                                                            <tbody>
                                                              <tr>
                                                                <td></td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    18
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                          className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    17
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    16
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    15
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    14
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    13
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    12
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    11
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    21
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    22
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    23
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    24
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    25
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    26
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    27
                                                                    <br />
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, -55px)"}}
                
                                                                    />
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div className="" style={{transform:"translateY(-1.2em)",color:"#C49358",fontWeight:"bold"}}>
                                                                    28
                                                                    <br />
                                                                    {/* <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                
                                                                      name="DoNotMoveTheseTeeth"
                
                                                                    /> */}
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td style={{ padding: "0px 8px",fontWeight:"bold" }}>
                                                                  R
                                                                </td>
                                                                <td colspan="16">
                                                                  <hr
                                                                    className="hrrl"
                                                                    style={{
                                                                      borderTop:
                                                                        "margin-top: 25px; margin-bottom:0px;",
                                                                    }}
                                                                  />
                                                                </td>
                                                                <td style={{ padding: "0px 8px",fontWeight:"bold" }}>
                                                                  L
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td></td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    48
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    47
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    46
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    45
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    44
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    43
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    42
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    41
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    31
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    32
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    33
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    34
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    35
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    36
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{color:"#C49358",fontWeight:"bold"}}>
                                                                    <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                                                                      className="iprLbl"
                                                                      name="DoNotMoveTheseTeeth"
                                                                      style={{transform: "translate(29px, 55px)"}}
                
                                                                    />
                                                                    37
                                                                  </div>
                                                                </td>
                                                                <td>
                                                                  <div style={{transform:"translateY(1.2em)",color:"#C49358",fontWeight:"bold"}}>
                                                                    {/* <Form.Control
                                                                    type="text"
                                                                      aria-label="option 1"
                
                                                                      name="DoNotMoveTheseTeeth"
                
                                                                    /> */}
                                                                    38
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mt-5">
                                <Col md={8}>
                                <Card className="p-4">
                
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>ADDITIONAL INSTRUCTIONS (IF ANY)</b></Form.Label>
                        <Form.Control as="textarea" rows={8} />
                      </Form.Group>
                                </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
              </Col>
            </Row>
        </Container>
        </>
    );
}


export default Ipr;