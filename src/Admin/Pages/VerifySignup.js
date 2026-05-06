import React,{useState} from "react";
import "../../Admin/Styles/VerifySignup.css";
import {Form,Row,Col,Container, Button} from "react-bootstrap";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

function VerifySignup(){

    const navigate=useNavigate();
    const [data, setData] = useState({
        MobileNo:""
    })



    const handleChange=(e)=>{
        setData({MobileNo:e.target.value})
        console.log(data);
    }   




    const submit=(e)=>{
        e.preventDefault();


        let url=`https://www.orthosquareportal.com/OrthosquareAPI/OrthoService.svc/CheckDoctorMobileNumber/${data.MobileNo}`


        let url2=`https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetCheckDoctorMobileNo/${data.MobileNo}`


        fetch(url)
        .then((res)=>res.json())
        .then((respData)=>{
            console.log(respData);
            

            if(respData.status==="1"){
                Swal.fire({
                    title:"Alert",
                    icon:"warning",
                    text:"Please contact to your Admin in order to access the Flexismile Portal!",
                    confirmButtonText:"Ok"
                    
                })
            }
            else{

                fetch(url2)
                .then((res)=>res.json())
                .then((respData)=>{
                    console.log(respData);

                    if(respData.status==="1"){
                        Swal.fire({
                            title:"Alert",
                            icon:"warning",
                            text:"Please contact to your Admin in order to access the Flexismile Portal!",
                            confirmButtonText:"Ok"
                        })
                    }
                    else{
                        Swal.fire({
                            title:"Thank you !",
                            icon:"success",
                            // text:"Please contact to your Admin in order to access the Flexismile Portal!",
                            // confirmButtonText:"Ok"
                        })
                        navigate("/add-doctor")
                    }
                })
               
            }

            
        })
    }
    return(
        <>
        {/* {JSON.stringify(data)} */}
         <Container>
        <Row style={{ backgroundColor: "white" }} className="mt-5 mb-5 pb-5 ver-crd">
          <Col md={{ span: 12 }} xs={{ span: 12 }}>
            <Row className="m-2">
              <Col>
                    <p className="ver-t mt-2">Verify Doctor</p>
                    <hr />
                    <Form>
                       <Row className="justify-content-center">
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control type="tel" placeholder="Mobile No." name="MobileNo" onChange={(e)=>handleChange(e)}/>
       
      </Form.Group>

      <Row className="text-center">
        <Col>
        <Button type="submit" variant="" className="ver-btn" onClick={submit}>Verify</Button>
        </Col>
      </Row>
                        </Col>
                       </Row>
                    </Form>
            
               </Col>
               </Row>
           
          </Col>
        </Row>
      </Container>
        </>
    );
}

export default VerifySignup;