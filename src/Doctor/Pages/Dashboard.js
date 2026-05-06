import React,{useState,useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Navbar,
  Dropdown,
  Card,
  Badge,
  Tooltip,
  Toast,
  ToastContainer
} from "react-bootstrap";
import "../../Doctor/Styles/Dashboard.css";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import handover from "../../Assets/hanover.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { BsDot,BsTrash } from "react-icons/bs";

import { CgProfile } from "react-icons/cg";
import ProgressBar from "react-bootstrap/ProgressBar";
import advertisement from "../../Assets/advertisement.png";
import {LinkContainer} from 'react-router-bootstrap';
import patientimg from "../../Assets/mock1.jpg";
import {useNavigate,useParams} from "react-router-dom";
import Swal from "sweetalert2";

function Dashboard() {
  const tglContent = () => {
    let Menu = document.querySelector(".menuTab");

    if (Menu.classList.contains("collapsed")) {
      Menu.classList.remove("collapsed");
    } else {
      Menu.classList.add("collapsed");
    }
  };

  const navigate=useNavigate();
const [DocDetails, setDocDetails] = useState([]);
  const urlParams = useParams()
  console.log(urlParams);
  const ID=urlParams.DoctorUserId;
    const url ="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetDoctorDashboard/"+ID;
  
  useEffect(() => {
    console.log(urlParams);
    fetch(url)
      .then((res) => res.json())
      .then((det) => {
        console.log(det.Data);
        setDocDetails(det.Data);
        // console.log(patient);
      });
  }, []);

  // const [data, setData] = useState([]);
  // const url =
  //   "https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetDoctorList/0/0";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((list) => {
  //       console.log(list.Data);
  //       setData(list.Data);
  //     });
  // }, []);

let DoctorName=sessionStorage.getItem("DocName");
let DoctorPhone=sessionStorage.getItem("DocPhone");
let DoctorEmail=sessionStorage.getItem("DocEmail");
let DoctorPracticeName=sessionStorage.getItem("DocPracName");
let DoctorRole=sessionStorage.getItem("DocRole");
let DoctorUser=sessionStorage.getItem("DocUserId");
let DoctorAddress=sessionStorage.getItem("DocAddress");
let DoctorLicense=sessionStorage.getItem("DocLicense");



const [notifyData, setNotifyData] = useState([]);

const notifyUrl=`https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetNotification/${DoctorUser}/2`;
useEffect(()=>{
  fetch(notifyUrl).then((res)=>res.json())
  .then((notData)=>{
    console.log(notData);
    setNotifyData(notData);
// console.log(notifyData);
  })
},[])

const [show, setShow] = useState(false);



useEffect(()=>{
  if(DoctorUser){
   console.log("logged in");
  }
  else{
    // alert("Please Login First");
    Swal.fire({
      icon:"error",
      title:"Please Login to continue!"
    })
    navigate("/")
  }
},[])
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navb">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Button variant="" onClick={tglContent} className="navhide">
                <FaBars fontSize={28} color="#C49358" />
              </Button>
            </Nav>
            <Nav>
              <Nav.Link href="">
      <Dropdown>
      <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user noti-d"
                  >
                   <IoMdNotifications
                  fontSize={35}
                  color="#C49358"
                  className="notification"
                /><Badge bg="secondary" className="badge-p">{notifyData?.TotalNotification}</Badge>

                  </Dropdown.Toggle>


                  <Dropdown.Menu className="noti-menu">
                  
                   {
                   
                    notifyData.Data?.map((noti)=>{
                      return(
                        <>
                        <Row className="m-1">
                          <Col>
                           <BsDot fontSize={40} color="green"/><span onClick={()=>{
                            if(noti?.NotificationType==="Add Patient Video"){
                              navigate(`/patient-details-doc/${noti?.PatientId}`)
                            }
                           }}>{noti?.Notification}</span><span><Button variant="" style={{transform:"translateY(-0.2em)"}} onClick={()=>{

                            // console.log(noti.NotificationId);
                            const notifUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/ReadNotification"

                            let notifId={
                              NotificationId:noti.NotificationId
                            };
                            fetch(notifUrl,{
                              method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notifId),
                            })
                            .then((res)=>res.json())
                            .then((result)=>{
                              console.log(result);
                              console.log("Id sent");
                            })
                           }}><BsTrash color="red"/></Button></span>
                          </Col>
                        </Row>
                        {notifyData?.TotalNotification>1?<Dropdown.Divider/>:""}
                        </>
                      );
                    })
                   }




                  </Dropdown.Menu>
      </Dropdown>
                

              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                <FiMessageSquare
                  fontSize={30}
                  color="#C49358"
                  className="me-2 notification"
                />
              </Nav.Link> */}
              <span className="address mx-3 m-0">
                <img src={user} alt="" width={35} className="mt-2" />
              </span>
              <Nav.Link href="" className="p-0 mt-1">
                <Dropdown className="out-dd mt-2">
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user"
                  >
                   {DocDetails[0]?.PracticeName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr /> */}
                   
                    <Dropdown.Item href="#/action-2" onClick={()=>{
                        navigate("/");
                        sessionStorage.removeItem("Role");
                      }
                    }>
                      <FiPower fontSize={25} />
                      <span className="px-3" >Logout</span>
                    </Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row className="menuTab">
          <Col>
            <Card body className="border-0">
              <Nav className="justify-content-center">
                <LinkContainer to={`/doctor-dashboard/${DoctorUser}`}>
                  <Nav.Link className="doc-tab active">
                  Dashboard
                  </Nav.Link>
                </LinkContainer>
                {/* <Nav.Link href="#deets" className="prof-tab">
                  Profile
                </Nav.Link> */}
              </Nav>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="middle-center">
        
      <Toast bg="warning" color="" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Body>Under Maintenance</Toast.Body>
                      </Toast>
      </ToastContainer>
      <Container>
        <Row style={{ backgroundColor: "white" }} className="mt-5 mb-5">
          <Col md={{ span: 12 }} xs={{ span: 12 }}>
            <Row>
              <Col md={{ span: 6 }}>
                <Row className="mt-5">
                  <Col
                    md={{ span: 5, offset: 1 }}
                    xs={{ span: 10, offset: 1 }}
                    style={{ backgroundColor: "#C49358", color: "white",cursor:"pointer"  }}
                    className="mb-1"
                    onClick={()=>navigate("/in-treatment")}
                  >
                    <p className="mt-4">
                      In Treatment <span style={{ float: "right" }}>{DocDetails[0]?.CountNoOfInTreatment}</span>
                    </p>
                    <ProgressBar now={DocDetails[0]?.CountNoOfInTreatment} className="mt-5 mb-4" />
                  </Col>
                  <Col
                    md={{ span: 5, offset: 1 }}
                    xs={{ span: 10, offset: 1 }}
                    style={{ backgroundColor: "#C49358", color: "white" }}
                    className="mb-1"
                    onClick={()=>{
                      navigate("/request-aligners")
                      // setShow(true)
                     
                    }}
                  >
                    
                    <p className="mt-4">
                      Request Aligners{" "}
                      <span style={{ float: "right" }}>{DocDetails[0]?.DoctorTotalRequest}</span>
                    </p>
                    <ProgressBar now={DocDetails[0]?.DoctorTotalRequest} className="mt-5 mb-4" />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col
                    md={{ span: 5, offset: 1 }}
                    xs={{ span: 10, offset: 1 }}
                    style={{ backgroundColor: "#C49358", color: "white",cursor:"pointer" }}
                    className="mb-1"
                    onClick={()=>navigate(`/patient-list/${DoctorUser}`)}
                  >
                    <p className="mt-4">
                      Total No of Patients
                      <span style={{ float: "right" }}>{DocDetails[0]?.NoOfPatinet}</span>
                    </p>
                    <ProgressBar now={DocDetails[0]?.NoOfPatinet} className="mt-5 mb-4" />
                  </Col>
                  <Col
                    md={{ span: 5, offset: 1 }}
                    xs={{ span: 10, offset: 1 }}
                    style={{ backgroundColor: "#C49358", color: "white",cursor:"pointer" }}
                    className="mb-1"
                    onClick={()=>navigate(`/aligners-report-doc`)}
                  >
                    <p className="mt-4">
                      Aligner's Sets Report <span style={{ float: "right" }}>{DocDetails[0]?.PatientSetReport}</span>
                    </p>
                    <ProgressBar now={DocDetails[0]?.PatientSetReport} className="mt-5 mb-4" />
                  </Col>
                </Row>
              </Col>
              <Col md={{ span: 4, offset: 1 }} className="mt-5">
                <img src={advertisement} className="w-100 mb-3"></img>
                <Button
                  className="mt-5 w-100"
                  style={{ backgroundColor: "#C49358" }}
                  onClick={()=>{
                    if(DoctorUser){
                      navigate("/add-patient")
                    }
                    else{
                      // alert("Please Login First");
                      Swal.fire({
                        icon:"error",
                        title:"Please Login to continue!"
                      })
                      navigate("/")
                    }
                }}
                >
                  Add Patient
                </Button>

                <Button
                  className="mt-5 w-100"
                  style={{ backgroundColor: "#C49358" }}
                  onClick={()=>navigate("/allocated-sets")}
                >
                  Aligner's Allocation
                </Button>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={{ span: 6 }}>
                <Row className="mt-5">
                  <Col
                    md={{ span: 8, offset: 1 }}
                    style={{ boxShadow: "0px 0px 5px 5px #dee2e6",backgroundColor:"#ebdbc6" }}
                    className="p-3"
                  >
                    <img
                      src="https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?b=1&k=20&m=922962354&s=170667a&w=0&h=gpsD4Kn3xGxc_CMswNa_twx-Nxf9og_ipyV_2rjCWj4="
                      className="w-50 p-3"
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                      }}
                    ></img>
                    <p className="text-center">
                      <span style={{ fontWeight: "bold", color: "#077396" }}>
                      {DocDetails[0]?.PracticeName}
                      </span>
                      <br />
                      <span style={{ fontWeight: "bold" }}>Orthodontist</span>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={{ span: 6 }}>
                <Row className="mt-5">
                  <Col
                    md={{ span: 11 }}
                    style={{ boxShadow: "0px 0px 5px 5px #dee2e6",backgroundColor:"#ebdbc6"}}
                    className="p-5"
                  >
                    <p style={{ fontWeight: "bold" }}>Practice Name: {DocDetails[0]?.PracticeName}</p>
                    <p style={{ fontWeight: "bold" }}>License # : {DocDetails[0]?.Licence}</p>
                    <p style={{ fontWeight: "bold" }}>
                     Address: {DocDetails[0]?.Address}
                    </p>
                    <p style={{ fontWeight: "bold" }}>Phone no : +91 {DocDetails[0]?.PhoneNo}</p>
                    <p style={{ fontWeight: "bold" }}>Email Id : {DocDetails[0]?.PracticeEmail}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Dashboard;
