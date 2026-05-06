import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Navbar,
  Dropdown,
  Card,
  Stack,
  Form,
  ProgressBar,
  Spinner,
  Table,
  Tab
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { IoMdNotifications } from "react-icons/io";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { FaBars, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import $ from "jquery";
import Swal from "sweetalert2";
import {LinkContainer} from 'react-router-bootstrap';
import Tabs from 'react-bootstrap/Tabs';


function ShowPaymentDetails() {
  const navigate = useNavigate();

  // const PId=sessionStorage.getItem("Pid")
  const DocID = sessionStorage.getItem("DocID");

  const tglContent = () => {
    let Menu = document.querySelector(".menuTab");

    if (Menu.classList.contains("collapsed")) {
      Menu.classList.remove("collapsed");
    } else {
      Menu.classList.add("collapsed");
    }
  };
  let DoctorName = sessionStorage.getItem("DocName");

  $(document).ready(function () {
    $("input[name$='payment']").click(function () {
      var test = $(this).val();
      $(".desc").hide();
      $("#pay" + test).show();
    });
  });

  const [paymentDetails, setPaymentDetails] = useState([]);

  
  const [search, setSearch] = useState("");
  
  const [filteredNames, setFilteredNames] = useState([]);


  // ------------------------------------------------ET-----------------------------------------------------
  const getEtUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetPatientPayment/1";


  useEffect(()=>{
    fetch(getEtUrl)
    .then((res)=>res.json())
    .then((payment)=>{
      console.log(payment.Data);
      setPaymentDetails(payment.Data);
      setFilteredNames(payment.Data)
    })
  },[])


  // ---------------------------------------------------------------------------------------------------------
  const [search2, setSearch2] = useState("");
  
  const [filteredNames2, setFilteredNames2] = useState([]);

  const [ChequePaymentDetails, setChequePaymentDetails] = useState([]);


  // ------------------------------------------------Cheque-----------------------------------------------------

  const getChequeUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetPatientPayment/2";

  useEffect(()=>{
    fetch(getChequeUrl)
    .then((res)=>res.json())
    .then((paymentCheque)=>{
      console.log(paymentCheque.Data);
      setChequePaymentDetails(paymentCheque.Data);
      setFilteredNames2(paymentCheque.Data)
    })
  },[])

  // ---------------------------------------------------------------------------------------------------------

  const [search3, setSearch3] = useState("");
  
  const [filteredNames3, setFilteredNames3] = useState([]);


  const [CashPaymentDetails, setCashPaymentDetails] = useState([])


  // ------------------------------------------------Cash-----------------------------------------------------
  const getCashUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetPatientPayment/3";



  useEffect(()=>{
    fetch(getCashUrl)
    .then((res)=>res.json())
    .then((paymentCash)=>{
      console.log(paymentCash.Data);
      setCashPaymentDetails(paymentCash.Data);
      setFilteredNames3(paymentCash.Data)
    })
  },[])

  // ---------------------------------------------------------------------------------------------------------

  const columns=[
    {
      name:"Doctor Name",
      selector: (row) => row.DoctorName,
      sortable: true,
    },
    {name:"Payment Mode",
      selector: (row) => row.PaymentMode,
      sortable: true,
    },
    {
      name:"Transaction No.",
      selector:(row)=>row.TransactionNo,
      sortable:true,
    },
    {
      name:"Amount",
      selector:(row)=>row.PayAmount,
      sortable:true,
    },
    {
      name:"Date",
      selector:(row)=>row.PaymentDate,
      sortable:true,
    }
  ]


  const columns2=[
    {
      name:"Doctor Name",
      selector: (row) => row.DoctorName,
      sortable: true,
    },
    {name:"Bank Name",
      selector: (row) => row.NameOfBank,
      sortable: true,
    },
    {
      name:"Branch",
      selector:(row)=>row.BranchName,
      sortable:true,
    },
    {
      name:"Cheque No.",
      selector:(row)=>row.ChequeNo,
      sortable:true,
    },
    {
      name:"Amount",
      selector:(row)=>row.PayAmount,
      sortable:true,
    },
    {
      name:"Payment Date",
      selector:(row)=>row.PaymentDate,
      sortable:true,
    },
    {
      name:"Deposit Date",
      selector:(row)=>row.DepositDate,
      sortable:true,
    },
    {
      name:"Clearence Date",
      selector:(row)=>row.ClearenceDate,
      sortable:true,
    },
    {
      name:"Cheque Status",
      selector:(row)=>row.ChequeStatus,
      sortable:true,
    },
  ]


  const columns3=[
    {
      name:"Doctor Name",
      selector: (row) => row.DoctorName,
      sortable: true,
    },
    {name:"Amount",
      selector: (row) => row.PayAmount,
      sortable: true,
    },
    {
      name:"Currency",
      selector:(row)=>row.Currency,
      sortable:true,
    },
    {
      name:"Date",
      selector:(row)=>row.PaymentDate,
      sortable:true,
    },
   
  ]

  useEffect(() => {
    const result = paymentDetails.filter((patientname) => {
      return patientname.DoctorName.toLowerCase().match(search.toLowerCase());
    });
    setFilteredNames(result);



    
  }, [search]);


  useEffect(()=>{
    const result2 = ChequePaymentDetails.filter((patientname) => {
      return patientname.DoctorName.toLowerCase().match(search2.toLowerCase());
    });
    setFilteredNames2(result2);
  },[search2])



  useEffect(()=>{
    const result3 = CashPaymentDetails.filter((patientname) => {
      return patientname.DoctorName.toLowerCase().match(search3.toLowerCase());
    });
    setFilteredNames3(result3);
  },[search3])


// --------------------------------------------------------------------------------------------

const [monthPay, setMonthPay] = useState([]);

const [searchMon, setSearchMon] = useState("");
  
  const [filteredNamesMon, setFilteredNamesMon] = useState([]);

const monthUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetPatientPaymentMonthReport";


useEffect(()=>{
  fetch(monthUrl)
  .then((res)=>res.json())
  .then((monthP)=>{
    console.log(monthP.Data);
    setMonthPay(monthP.Data);
    setFilteredNamesMon(monthP.Data)
  })
},[])



  const columnsMonth=[
    {
      name:"Month",
      selector: (row) => row.MonthPay,
      sortable: true,
    },
    // {
    //   name:"Year",
    //   selector: (row) => row.YearNo,
    //   sortable: true,
    // },
    {
      name:"GPay",
    selector: (row) => row.GPay,
    sortable: true,
  },
  {
    name:"Paytm",
  selector: (row) => row.Paytm,
  sortable: true,
},
{
  name:"Cheque",
selector: (row) => row.Cheque,
sortable: true,
},
{
  name:"Cash",
selector: (row) => row.Cash,
sortable: true,
},
{
  name:"Total",
selector: (row) => row.GPay+row.Paytm+row.Cheque+row.Cash,
sortable: true,
},
    // {
    //   name:"Total Amount",
    //   selector:(row)=>row.Currency,
    //   sortable:true,
    // },
   
   
  ]

  useEffect(()=>{
    const resultMon = monthPay.filter((patientname) => {
      return patientname.YearNo.toLowerCase().match(searchMon.toLowerCase());
    });
    setFilteredNamesMon(resultMon);
  },[searchMon])

// -------------------------------------------------------------------------------




const [monthPayDocWise, setMonthPayDocWise] = useState([]);

const [searchMonDoc, setSearchMonDoc] = useState("");
  
  const [filteredNamesMonDoc, setFilteredNamesMonDoc] = useState([]);


 let yrNo=sessionStorage.getItem("yearNo");
 let mNo=sessionStorage.getItem("monthNo");
  const monthDocUrl=`https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetPatientPaymentDoctorReport/${yrNo}/${mNo}/0`;



  const monthlyData=()=>{
    fetch(monthDocUrl)
    .then((res)=>res.json())
    .then((monthDocP)=>{
      console.log(monthDocP.Data);
      setMonthPayDocWise(monthDocP.Data);
      setFilteredNamesMonDoc(monthDocP.Data)
    })
  }

  useEffect(()=>{
    monthlyData();
  },[])

  const columnsMonthDoctor=[
    {
      name:"Doctor Name",
      selector: (row) => row.DoctorName,
      sortable: true,
    },
    {name:"GPay",
      selector: (row) => row.GPay,
      sortable: true,
    },
    {name:"Paytm",
      selector: (row) => row.Paytm,
      sortable: true,
    },
    {name:"Cheque",
      selector: (row) => row.Cheque,
      sortable: true,
    },
    {name:"Cash",
      selector: (row) => row.Cash,
      sortable: true,
    },
    {
      name:"Total",
      selector: (row) => row.GPay+row.Paytm+row.Cheque+row.Cash,
      sortable: true,
    },
    // {
    //   name:"Total Amount",
    //   selector:(row)=>row.Currency,
    //   sortable:true,
    // },
   
   
  ]



  useEffect(()=>{
    const resultMonDoc = monthPayDocWise.filter((patientname) => {
      return patientname.DoctorName.toLowerCase().match(searchMonDoc.toLowerCase());
    });
    setFilteredNamesMon(resultMonDoc);
  },[searchMonDoc])




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
                    <Dropdown.Item href="#/action-1">
                      <CgProfile fontSize={25} />
                      <span className="px-3">Profile</span>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-2">
                      <FiPower fontSize={25} />
                      <span className="px-3" onClick={() => navigate("/")}>
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
      <Container fluid>
        <Row className="menuTab">
          <Col>
            <Card body className="border-0">
              <Nav className="justify-content-center">
                <LinkContainer to={`/admin-dashboard`}>

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

      <Container fluid>
        <Row className="justify-content-center">
          <Col md={10}>


          <Row className="mt-5">
            <Col>
              <Tabs
                    defaultActiveKey="ap"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
              <Tab eventKey="ap" title="All Payments">
                <Row
                  className="mt-5 mb-5 p-5 pt-3 justify-content-center"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 15px  #C49358",
                    borderRadius: "8px",
                  }}
                >
                    <p style={{fontSize:"1.4em",fontWeight:"500"}}>Payment Details</p>
                  <Col md={2}>
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      name="payment"
                      label="Electronic Transfers"
                      value="1"
                      // style={{ float: "right" }}
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      name="payment"
                      label="Cheque"
                      value="2"
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      name="payment"
                      label="Cash"
                      value="3"
                    />
                  </Col>
                  <hr className="mt-3" />
                  <Row
                    className="justify-content-center desc"
                    id="pay1"
                    style={{ display: "none" }}
                  >
                    <Col>
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
              
              {/*
              <Table striped bordered hover>
                    <thead>
                      <tr>
              <th>Doctor Name</th>
              <th>Payment Mode</th>
              <th>Transaction No.</th>
              <th>Amount</th>
              <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
              
                      {paymentDetails?.map((et,i)=>{
              return(
                <>
                <tr>
              <td>{et.DoctorName}</td>
              <td>{et.PaymentMode}</td>
              <td>{et.TransactionNo}</td>
              <td>{et.PayAmount}</td>
              <td>{et.PaymentDate}</td>
              
              
              </tr>
                </>
              )
                      })
              
              
              
                      }
              
              
              
                    </tbody>
                  </Table> */}
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-center desc"
                    id="pay2"
                    style={{ display: "none" }}
                  >
                    <Col>
                    {/* <Table striped bordered hover>
                    <thead>
                      <tr>
              <th>Doctor Name</th>
              <th>Payment Type</th>
              <th>Cheque No.</th>
              <th>Bank Name</th>
              <th>Branch Name</th>
              <th>Amount</th>
              <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              
                      </tr>
              
                      <tr>
              
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              
                      </tr>
              
                    </tbody>
                  </Table> */}
              
              <DataTable
                      columns={columns2}
                      data={filteredNames2}
                      pagination
                      fixedHeader
                      highlightOnHover
                      subHeader
                      subHeaderComponent={
                        <input
                          type="text"
                          className="w-25 form-control mt-4 mb-4"
                          placeholder="Search by Name"
                          value={search2}
                          onChange={(e) => setSearch2(e.target.value)}
                        ></input>
                      }/>
                    </Col>
              
                  </Row>
                  <Row
                    className="justify-content-center desc"
                    id="pay3"
                    style={{ display: "none" }}
                  >
                    <Col>
                    <DataTable
                      columns={columns3}
                      data={filteredNames3}
                      pagination
                      fixedHeader
                      highlightOnHover
                      subHeader
                      subHeaderComponent={
                        <input
                          type="text"
                          className="w-25 form-control mt-4 mb-4"
                          placeholder="Search by Name"
                          value={search3}
                          onChange={(e) => setSearch3(e.target.value)}
                        ></input>
                      }/>
                    </Col>
              
                  </Row>
                </Row>
                </Tab>
                <Tab eventKey="mp" title="Monthly Payment">
                  <Row>
                    <Col>
                    <DataTable
                      columns={columnsMonth}
                      data={filteredNamesMon}
                      pagination
                      fixedHeader
                      highlightOnHover
                    expandableRows
                    // expandOnRowClicked
                    
                    onRowClicked={(rw)=>{
                      console.log(rw.MonthNo);

                     
                    }}
                    expandableRowsComponent={(rw)=>{
                      // console.log(rw);
                      sessionStorage.setItem("yearNo",rw.data.YearNo);
                      sessionStorage.setItem("monthNo",rw.data.MonthNo);

                      monthlyData();
                      // stop()
                      return(
                        <>
                        <Row className="justify-content-center">
                          <Col md={10}>
                         <DataTable
                      columns={columnsMonthDoctor}
                      data={filteredNamesMonDoc}
                      pagination
                      // fixedHeader
                      highlightOnHover
                      // subHeader
                      // subHeaderComponent={
                      //   <input
                      //     type="text"
                      //     className="w-25 form-control mt-4 mb-4"
                      //     placeholder="Search by Name"
                      //     value={searchMonDoc}
                      //     onChange={(e) => setSearchMonDoc(e.target.value)}
                      //   ></input>
                      // }
                      />
                      </Col>
                      </Row>
                        </>
                      );
                    }}
                      subHeader
                      subHeaderComponent={
                        <input
                          type="text"
                          className="w-25 form-control mt-4 mb-4"
                          placeholder="Search by Year"
                          value={searchMon}
                          onChange={(e) => setSearchMon(e.target.value)}
                        ></input>
                      }/>
                    </Col>
                  </Row>
                </Tab>
                </Tabs>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShowPaymentDetails;
