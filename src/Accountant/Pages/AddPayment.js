import React, { useEffect, useState } from "react";
import "../../Admin/Styles/DoctorsList.css";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Dropdown,
  Card,
  Form,
  Table,
  ToastHeader,
} from "react-bootstrap";
import { IoMdNotifications } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

import { FiMessageSquare, FiPower } from "react-icons/fi";
import {HiCurrencyRupee} from "react-icons/hi";
import { FaBars, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import logo from "../../Assets/Logoremovebg.png";
import user from "../../Assets/user.png";
import ReactHTMLTableToExcel from "react-html-to-excel";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate ,useParams} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import $ from "jquery";
import DataTable from "react-data-table-component";
import axios from "axios";


function AddPayment() {

    const tglContent = () => {
        let Menu = document.querySelector(".menuTab");
    
        if (Menu.classList.contains("collapsed")) {
          Menu.classList.remove("collapsed");
        } else {
          Menu.classList.add("collapsed");
        }
      };
    
      $(document).ready(function () {
        $(".editbtn").click(function () {
          var currentTD = $(this).parents("tr").find("td");
          if ($(this).html() == "Edit") {
            currentTD = $(this).parents("tr").find("td");
            $.each(currentTD, function () {
              $(this).prop("contenteditable", true);
              $(this).parents("tr").find("td").focus();
            });
          } else {
            $.each(currentTD, function () {
              $(this).prop("contenteditable", false);
            });
          }
    
          $(this).html($(this).html() == "Edit" ? "Save" : "Edit");
          
        });
      });
    
      const navigate = useNavigate();
    //   const urlParams = useParams()
    //   console.log(urlParams);
    // const ID=urlParams.DoctorId;  
    
    
      const [data, setData] = useState([]);
      const url =
        "https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetDoctorList/0/0";
    
      useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((list) => {
            console.log(list.Data);
            setData(list.Data);
            // setInactive({Doctorid:list.DoctorID})
            // let status=document.getElementById("stat").innerText
            // console.log(status);
            
           
          });
      }, []);
      const [filteredResults, setFilteredResults] = useState([]);
    
const [doctors, setDoctors] = useState([])
      const [search, setSearch] = useState("");
      const [filteredNames, setFilteredNames] = useState([]);
   

      const getDoctors = async () => {
        // console.log(urlParams);
        try {
          const response = await axios.get(
            "https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetDoctorNotInorthoList/0/0" 
          );
          setDoctors(response.data.Data);
          setFilteredNames(response.data.Data);
          console.log(response.data.Data);
        } catch (error) {
          console.log(error);
        }
      };
    

      const columns = [
        // {
        //   name: "Patient Code",
          
        //   selector: (row) => row.PatientId,
        //   sortable: true,
        // },
        // {
        //   name: "CaseNo",
        //   selector: (row) => row.CaseNo,
        //   sortable: true,
        // },
        {
          name: "Name",
          selector: (row) => row.Name,
        },
        {
          name: "Practice Name",
          selector: (row) => row.PracticeName,
          sortable: true,
        },
        {
          name: "Email",
          selector: (row) => row.PracticeEmail,
          sortable: true,
        },
        {
          name: "Phone No",
          selector: (row) => row.PhoneNo,
          sortable: true,
        },
        // {
        //   name: "MI",
        //   selector: (row) => row.Mi,
        //   sortable: true,
        // },
    
        // RoleId==="1"?
        // {
          
        //   name: "Status",
        //   selector: (row) => row.Isconfirmed==="True"?"Approved":"",
        //   conditionalCellStyles: [
        //           {
        //               when: row => row.Isconfirmed==="True",
        //               classNames: ['green-text'],
        //           },
                  
                 
        //       ],
        //   sortable: true,
        // }:"",
        
        {
          name: "Action",
          cell: row =>
           <button className="edit-patient-btn"   onClick={()=>{
            sessionStorage.setItem("payDocID",row.DoctorID)
            navigate(`/payment/${row.DoctorID}`)
        
        }}>Add payment</button>
        },
    
        // {
        //   // name: `${RoleId==="1"?"Action":""}`,
        //   cell: row => RoleId==="1"? <button className="edit-patient-btn" onClick={()=>{navigate(`/payment/${row?.PatientId}`)
        // sessionStorage.setItem("Pid",row.PatientId)
        // }}>Payment</button>:""
        // }
      ];
    
      useEffect(() => {
        getDoctors();
      }, []);
    
      useEffect(() => {
        const result = doctors.filter((patientname) => {
          return patientname.Name.toLowerCase().match(search.toLowerCase());
        });
        setFilteredNames(result);
      }, [search]);
      
    
      // const [Inactive, setInactive] = useState({
      //   Doctorid:""
      // })
    
      // const [Inactive, setInactive] = useState({
      //   Doctorid:""
      // })
    
      // const url2="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/DoctorInActive"
    
      // const handleSubmit = (event) => {
      //   event.preventDefault();
        
      //    console.log(Inactive);
      //     fetch(url2,{
      //       method:"POST",
      //       headers:{
      //         Accept: "application/json",
      //         'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify(Inactive)
      //     })
      //     .then((res)=>res.json())
      //     .then((result)=>{
      //       console.log(result);
       
      //     })
      
      
        
          
      
      //   };
    
    
      // $(document).on("click", ".edit", function(){
      //   $(this).parents("tr").find("td:not(:last-child)").each(function(){
      // $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
      // });
      // $(this).parents("tr").find(".add, .edit").toggle();
      // $(".add-new").attr("disabled", "disabled");
      // });
    
    let DoctorName=sessionStorage.getItem("DocName");


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
              <Button
                variant=""
                hidden
                onClick={tglContent}
                className="navhide"
              >
                <FaBars fontSize={28} color="#C49358" />
              </Button>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">
                <IoMdNotifications
                  fontSize={30}
                  color="#C49358"
                  className="notification"
                />
              </Nav.Link> */}
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
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="user"
                  >
                    {DoctorName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr /> */}
                    <Dropdown.Item href="#/action-2">
                      <FiPower fontSize={25} />
                      <span className="px-3" onClick={() => {navigate("/")
                     sessionStorage.removeItem("Role");
                  }
                    }>
                        Logout
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Container fluid>
        <Row className="menuTab">
          <Col>
            <Card body className="border-0">
              <Nav className="justify-content-center">
                <LinkContainer to={`/admin-dashboard`}>

                  <Nav.Link className="doc-tab active" onClick={()=>navigate("/admin-dashboard")}>
                  Dashboard
                  </Nav.Link>
                </LinkContainer>
               
              </Nav>
            </Card>
          </Col>
        </Row>
      </Container> */}
      <Container fluid>
        <Row className="justify-content-center mt-5">
          <Col md={10}>
            <Card>
              {/* <Row className="text-end mt-3 me-2">
                <Col> */}
                  {/* <Button
                    variant=""
                    className="add-doc-btn"
                    onClick={() => navigate("/add-doctor")}
                  >
                    Add Doctor
                  </Button> */}
                  {/* <Button
                    variant=""
                    className="add-doc-btn mx-2"
                    onClick={() => navigate("/patient-list")}
                  >
                    View Patient
                  </Button> */}
                {/* </Col>
              </Row> */}
              <Row>
                <Col>
                  <Card className="mt-2 m-3">
                    <Row className="m-2 mt-5">
                      <Col className="" md={9}>
                        {/* <ReactHTMLTableToExcel
                          id="test-table-xls-button"
                          className="download-table-xls-button exc"
                          table="table-to-xls"
                          filename="Doctors"
                          sheet="tablexls"
                          buttonText="Excel"
                        /> */}
                      </Col>
                      {/* <Col md={3}>
                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextEmail"
                        >
                          <Form.Label column sm="3">
                            Search
                          </Form.Label>
                          <Col sm="9">
                            <Form.Control
                              type="search"
                              onChange={(e) => searchItems(e.target.value)}
                            />
                          </Col>
                        </Form.Group>
                      </Col> */}
                    </Row>

                    <Row className="m-2">
                      <Col className="dList">
                      <DataTable
                    columns={columns}
                    data={filteredNames}
                    // expandableRows
                    // expandOnRowClicked
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
                    }
                  />
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row style={{ height: "50px" }}></Row>
      </Container>
  </>
  )
}

export default AddPayment