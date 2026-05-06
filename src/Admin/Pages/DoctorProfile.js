import React,{useState,useEffect} from "react";
import { Container ,Nav,Row,Col,Card,Dropdown,Navbar,Button} from "react-bootstrap";
import user from "../../Assets/user.png";
  import logo from "../../Assets/Logoremovebg.png";
  import { IoMdNotifications } from "react-icons/io";
  import { FiMessageSquare, FiPower } from "react-icons/fi";
  import { FaBars, FaEdit } from "react-icons/fa";
  import { CgProfile } from "react-icons/cg";
  import ProgressBar from "react-bootstrap/ProgressBar";
  import advertisement from "../../Assets/advertisement.png";
  import {LinkContainer} from 'react-router-bootstrap';
  import {useNavigate,useParams} from "react-router-dom";

function DoctorProfile(){
    const tglContent = () => {
        let Menu = document.querySelector(".menuTab");
    
        if (Menu.classList.contains("collapsed")) {
          Menu.classList.remove("collapsed");
        } else {
          Menu.classList.add("collapsed");
        }
      };
    
      const navigate=useNavigate();
      const urlParams = useParams()
      console.log(urlParams);
    const ID=urlParams.DoctorId;  
    
    
      const [data, setData] = useState([]);
      const url =
        "https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetDoctorSelect/"+ID;
    
      useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((list) => {
            console.log(list.Data);
            setData(list.Data);
          });
  }, []);

  let AdminName=sessionStorage.getItem("DocName")

    return(
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
                <IoMdNotifications
                  fontSize={30}
                  color="#C49358"
                  className="notification"
                />
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                <FiMessageSquare
                  fontSize={30}
                  color="#C49358"
                  className="me-2 notification"
                />
              </Nav.Link> */}
              <span className="address">
                <img src={user} alt="" width={35} className="mt-1" />
              </span>
              <Nav.Link href="" className="p-0 mx-2 mt-1">
                <Dropdown className="out-dd">
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user"
                  >
                   {AdminName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-2">
                      <FiPower fontSize={25} />
                      <span className="px-3" onClick={()=>{
                        navigate("/");
                        // sessionStorage.clear();
                      }
                    }>Logout</span>
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
                <LinkContainer to={`/admin-dashboard`}>

                  <Nav.Link className="doc-tab active" onClick={()=>navigate("/admin-dashboard")}>
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
        <Container fluid>
            <Row className="justify-content-center mt-5">
                <Col md={9}>
                <Card className="border-0 mt-5 p-3" style={{boxShadow:"0px 0px 40px #C49358"}}>
                  <Row className="pt-2 mx-3">
                    <Col>
                    <p style={{fontSize:"1.4em",fontWeight:"bold"}}>{data[0]?.Name}'s Profile</p>
                    </Col>
                    <Col className="text-end">
                    <Button variant="" className=""><FaEdit fontSize={20} onClick={()=>navigate(`/edit-doctor/${data[0]?.DoctorID}`)}/></Button>
                    </Col>
                  </Row>
                  <hr />
                    <Row className="m-3">
                        <Col>
                        <p className="" style={{fontSize:"1.2em"}}><span className="" style={{fontWeight:"bold",fontSize:"1.1em"}}>Name:</span> {"       "}{data[0]?.Name} </p>
                        </Col>
                        <Col>
                        <p style={{fontSize:"1.2em"}}><span className="fs-5" style={{fontWeight:"bold",fontSize:"1.1em"}}>Id:</span> {"       "}{data[0]?.DoctorID} </p>

                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col>
                        <p style={{fontSize:"1.2em"}}><span className="fs-5" style={{fontWeight:"bold",fontSize:"1.1em"}}>Phone No:</span> {"       "}{data[0]?.PhoneNo} </p>
                        </Col>
                        <Col>
                        <p style={{fontSize:"1.2em"}}><span className="fs-5" style={{fontWeight:"bold",fontSize:"1.1em"}}>Email:</span> {"       "}{data[0]?.PracticeEmail} </p>

                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col>
                        <p style={{fontSize:"1.2em"}}><span className="fs-5" style={{fontWeight:"bold",fontSize:"1.1em"}}>Practice Name:</span> {"       "}{data[0]?.PracticeName} </p>
                        </Col>
                        <Col>
                        <p style={{fontSize:"1.2em"}}><span className="fs-5" style={{fontWeight:"bold",fontSize:"1.1em"}}>Practice Name 1:</span> {"       "}{data[0]?.PracticeName1} </p>

                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col>
                        <p style={{fontSize:"1.2em"}}><span className="fs-5" style={{fontWeight:"bold",fontSize:"1.1em"}}>Practice Website:</span> {"       "}{data[0]?.PracticeWebsite} </p>
                        </Col>
                        <Col>
                        <p style={{fontSize:"1.2em"}}><span className="fs-5" style={{fontWeight:"bold",fontSize:"1.1em"}}>Address:</span> {"       "}{data[0]?.Address} </p>

                        </Col>
                    </Row>
                    <Row className="m-3">
                        <Col>
                        <p style={{fontSize:"1.2em"}}><span className="fs-5" style={{fontWeight:"bold",fontSize:"1.1em"}}>Fax:</span> {"       "}{data[0]?.Fax} </p>
                        </Col>
                        <Col>
                        <p style={{fontSize:"1.2em"}}><span className="fs-5" style={{fontWeight:"bold",fontSize:"1.1em"}}>Tax Id:</span> {"       "}{data[0]?.TaxID} </p>

                        </Col>
                    </Row>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default DoctorProfile;