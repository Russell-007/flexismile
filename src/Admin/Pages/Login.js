import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Stack,
  Card,
  Form,
  Modal
} from "react-bootstrap";
import "../Styles/Login.css";
import logo from "../../Assets/Logoremovebg.png";
import {useNavigate} from "react-router-dom";
import gif from "../../Assets/giphy-unscreen.gif"
function Login() {
  const [validated, setValidated] = useState(false);

const [data, setData] = useState({
Username:"",
Password:""
})

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [loading, setLoading] = useState(false)
const handle=(e)=>{
  const newdata={...data}
  newdata[e.target.name]=e.target.value;
  setData(newdata);
  console.log(newdata);
}

const url=`${process.env.REACT_APP_ORTHOSQUARE_API_URL}VerifyLogin`;

// const url="http://infintrix.in/FlexAlignApi/FlexAlign.svc/VerifyLogin";


const navigate=useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
   
    setLoading(true)
    fetch(url,{
      method:"POST",
      headers:{
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res)=>res.json()).then((result)=>{
      console.log(result);
      setLoading(false)
      if(result.message==="Login Success"){
      sessionStorage.setItem("DocName",result.Data[0]?.Name)
      sessionStorage.setItem("DocPhone",result.Data[0]?.PhoneNo)
      sessionStorage.setItem("DocEmail",result.Data[0]?.PracticeEmail)
      sessionStorage.setItem("DocPracName",result.Data[0]?.PracticeName)
      sessionStorage.setItem("DocRole",result.Data[0]?.RoleId)
      sessionStorage.setItem("DocUserId",result.Data[0]?.UserId)
      sessionStorage.setItem("DocAddress",result.Data[0]?.Address)
      sessionStorage.setItem("DocLicense",result.Data[0]?.License)

      // let a=0;
      setInterval(() => {
        navigate("/");
        sessionStorage.clear();
        // console.log(a++);
        window.location.reload();
      }, 2700000);
      }
      if(result.UserId===0 && result.message==="Login Not Created"){
        alert("Password Expired!")

        if(result.message==="Login Not Created"){
          handleShow()
        }
        
      }
      if(result.UserId===-1){
        alert("Incorrect Username or Password!");
      }
      if(result.UserId===-2){
        alert(`${result.message} \nplease register!`)
        window.location.pathname = "/add-doctor";
      }
      console.log(result.Data[0].RoleId);
      sessionStorage.setItem("Role",result.Data[0].RoleId);
let DoctorUser=sessionStorage.getItem("DocUserId");
console.log(DoctorUser);
      if(result.Data[0].RoleId==="1"){
        navigate("/admin-dashboard")
      }
       if(result.Data[0].RoleId==="2"){
        navigate(`/doctor-dashboard/${DoctorUser}`)
      }
      if(result.Data[0].RoleId==="4"){
        navigate(`/add-payment`)
      }
      if(result.Data[0].RoleId==="3"){
        navigate(`/prodn-dash`)
      }
    })


  
    

  };

  

  const [docLog, setDocLog] = useState({
    UserName:"",
    Password:""
  })

  const handleRes=(e)=>{
    const newcred={...docLog}
    newcred[e.target.name]=e.target.value;
    setDocLog(newcred);
    console.log(newcred);
  }

  const urlDoc="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/AddDoctorLogin";

  
  const addDocLogin=(e)=>{
    e.preventDefault();
    let ConfirmPassword=document.getElementById("confP").value;
    let Passwd=document.getElementById("pass").value;

    if(Passwd!=ConfirmPassword){
      alert("Password and Confirm Password doesn't match!")
    }    

    

      fetch(urlDoc,{
        method:"POST",
      headers:{
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(docLog)
      }).then((res)=>res.json()).then((resdoc)=>{
        console.log(resdoc);

        if(resdoc.DoctorId==="-1"){
          alert("Please provide a valid Email Id!")
        }

        if(resdoc.message==="Added Successful"){
          handleClose();
          navigate("/");

        }

      })



    
    
    


  }


  // var details = {
  //   'userName': "Doctor",
  //   'password': "Doctor@123",
  //   'grant_type': 'password'
  //   };
    
  //   var formBody = [];
  //   for (var property in details) {
  //   var encodedKey = encodeURIComponent(property);
  //   var encodedValue = encodeURIComponent(details[property]);
  //   formBody.push(encodedKey + "=" + encodedValue);
  //   }
  //   formBody = formBody.join("&");
    
  //   fetch(url, {
  //   method: 'POST',
  //   headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   body: formBody
  //   })

  
  // };
 



  return (
    <>
      <Container fluid>
        <Stack direction="horizontal" gap={3} className="mt-3">
          <Button variant="link" className="ms-auto acc-btn action-i">
            Don't have an account?
          </Button>
          <Button variant="" className="sup-btn" onClick={()=>navigate("/verify-dr")}>
            Sign up
          </Button>
        </Stack>

        <Row className="mt-5">
          <Col md={4} className="mx-auto">
            <Card body className="pt-3 pb-3 mt-5" style={{boxShadow: "0px 0px 15px  #C49358"}}>
              <Row className="text-center">
                <Col>
                  <img src={logo} alt="" className="" height={150} width={150}/>
                </Col>
              </Row>
              <Row className="text-center mt-4">
                <Col>
                  <p className="log-text">Login</p>
                </Col>
              </Row>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mt-3 m-3">
                  <Col>
                    <Form.Group controlId="validationCustom01">
                      <Form.Label>UserName</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter UserName"
                        name="Username"
                        // id="Email"
                        onChange={(e)=>handle(e)}
                        value={data.Username}
                        className="p-2"
                      />
                      <Form.Control.Feedback type="invalid">Enter Username!</Form.Control.Feedback>
                    </Form.Group>
                    <Row className="mt-3">
                      <Col>
                        <Form.Group controlId="validationCustom02">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            required
                            type="password"
                            name="Password"
                            // id="Password"
                        onChange={(e)=>handle(e)}

                            value={data.Password}
                            placeholder="Enter Password"
                            className="p-2"
                          />
                          <Form.Control.Feedback type="invalid">
                            Enter Password!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <Button type="submit" variant="" className="sup-btn">Sign in 
                        </Button><span>{loading && <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" srcset="" width={180} /> }</span>

                      </Col>
                      {/* <Col className="text-end">
                      <Button variant="link" className="ms-auto acc-btn action-i">
            Forgot Password?
          </Button>
                      </Col> */}
                    </Row>
                    <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
          <Modal.Title>Set your Password!</Modal.Title>
        </Modal.Header>
                              <Modal.Body>
                                
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="UserName" onChange={(e)=>handleRes(e)} value={docLog.UserName} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="Password" id="pass" onChange={(e)=>handleRes(e)} value={docLog.Password}  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" id="confP" placeholder="" required/>
      </Form.Group>



                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                type="submit"
                                  variant=""
                                  style={{
                                    backgroundColor: "#C49358",
                                    color: "white",
                                  }}
                                  onClick={addDocLogin}
                                >
                                  Submit
                                </Button>
                              </Modal.Footer>
                            </Modal>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
