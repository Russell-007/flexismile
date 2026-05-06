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
  } from "react-bootstrap";
  import "../../Doctor/Styles/PatientList.css";
  import "../Styles/VideoRejectionReason.css";
  import user from "../../Assets/user.png";
  import logo from "../../Assets/Logoremovebg.png";
  import { IoMdNotifications } from "react-icons/io";
  import { FiMessageSquare, FiPower } from "react-icons/fi";
  import { FaBars } from "react-icons/fa";
  import { CgProfile } from "react-icons/cg";
  import Male from "../../Assets/Male.png";
  import DataTable from "react-data-table-component";
  import axios from "axios";
  import {useNavigate} from "react-router-dom";
  import { useParams } from "react-router-dom";

function VideoRejectionReason(){
  const navigate=useNavigate();


  const tglContent = () => {
    let Menu = document.querySelector(".menuTab");

    if (Menu.classList.contains("collapsed")) {
      Menu.classList.remove("collapsed");
    } else {
      Menu.classList.add("collapsed");
    }
  };

let DoctorName=sessionStorage.getItem("DocName");



const [reasons, setReasons] = useState([]);

  
const [search, setSearch] = useState("");

const [filteredNames, setFilteredNames] = useState([]);


// ------------------------------------------------ET-----------------------------------------------------
const getReasonUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetPatientVideoRejected/0";


useEffect(()=>{
  fetch(getReasonUrl)
  .then((res)=>res.json())
  .then((reasons)=>{
    console.log(reasons.Data);
    setReasons(reasons.Data);
    setFilteredNames(reasons.Data)
  })
},[])





const columns=[

  // {
  //   name:"#",
  //   cell:(row,i)=>i+1
  // },     

  
  {
    id:"dtCells",
    name:"Patient Name",
    selector: (row) => row.Name,
    sortable: true,
  },
  {
    id:"dtCells",

    name:"Rejected Video",
    cell: (row) =>(
      <video src={row.PathVideo} width={300} controls className="m-2"></video>
    ),
    // sortable: true,
  },
  {
    id:"dtCells",

    name:"Rejection Reason",
    cell:(row)=>(
      <p>{row.ConfirmNotes}</p>
    ),
    // sortable:true,
  },
  // {
  //   name:"Amount",
  //   selector:(row)=>row.PayAmount,
  //   sortable:true,
  // },
  // {
  //   name:"Date",
  //   selector:(row)=>row.PaymentDate,
  //   sortable:true,
  // }
]


useEffect(() => {
  const result = reasons.filter((patientname) => {
    return patientname.Name.toLowerCase().match(search.toLowerCase());
  });
  setFilteredNames(result);



  
}, [search]);




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
              <Nav.Link href="#deets">
                <IoMdNotifications fontSize={30} color="#C49358" className="notification" />
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                <FiMessageSquare fontSize={30} color="#C49358" className="me-2 notification" />
              </Nav.Link> */}
              <span className="address">
                <img src={user} alt="" width={35} className="mt-1" />
              </span>
              <Nav.Link href="" className="p-0 mx-2 mt-1">
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user"
                  >
                    {DoctorName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-2">
                      <FiPower fontSize={25} />
                      <span className="px-3" onClick={()=>{navigate("/")
                    // sessionStorage.clear();
                    }}>Logout</span>

                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Container fluid className="Reasons">
      <Row className="justify-content-center">
          <Col md={10}>
          
            <Row
              className="mt-5 mb-5 p-5 pt-3 justify-content-center"
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 15px  #C49358",
                borderRadius: "8px",
              }}
            >
              <p className="fs-3">Video Rejection Reasons</p>
                      <DataTable
                  columns={columns}
                  data={filteredNames}
                  pagination
                  fixedHeader
                  highlightOnHover
                  subHeader
                  subHeaderComponent={
                    <input
                      type="text"
                      className="w-25 form-control mt-4 mb-4"
                      placeholder="Search by Name"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    ></input>
                  }/>
                  </Row>
                      </Col>
                    </Row>

      </Container>
        </>
    );
}


export default VideoRejectionReason;