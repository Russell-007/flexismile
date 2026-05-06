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
    Stack,
    Form,
    ProgressBar,
    Spinner,
  } from "react-bootstrap";
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

// import { useEffect } from "react";

function Payment(){


  let Role=sessionStorage.getItem("Role");

  


  const navigate = useNavigate();



  let payDocID=sessionStorage.getItem("payDocID");

  // const PId=sessionStorage.getItem("Pid")
const DocID=sessionStorage.getItem("DocID");

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



  const [Pmode, setPmode] = useState([])
  const modeUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetElectronicTransfersModeList";

  useEffect(()=>{
    fetch(modeUrl).then((res)=>res.json())
    .then((mode)=>{
      console.log(mode.Data);
      setPmode(mode.Data)
    })
  },[])


  




  const [payDetails, setpayDetails] = useState({
    PatientId:0,
    DocotrId:payDocID,
    PaymentDate:"",
    PaymentMode:"",
    ElectronicTransfersId:"",
    TransactionNo:"",
    NameOfBank:"",
    ChequeNo:"",
    DepositDate:"",
    BranchName:"",
    PayAmount:"",
    currency:"",
    ClearenceDate:"",
    ChequeStatus:"",
    CreateBy:1,
    
  })

  useEffect(()=>{
    let etlbl=document.querySelector("#etbtn");

    if(etlbl.checked){
      let valget=etlbl.getAttribute('value');

      console.log(valget);
      setpayDetails((pre)=>{
        return{...pre,
        ElectronicTransfersId:valget
        }
      })
    }
   
   
     // console.log("label is");

     
   
   },)

  const handle=(e)=>{
    const newdata={...payDetails}
    newdata[e.target.name]=e.target.value;
    
    setpayDetails(newdata);
    console.log(newdata);

    let etlbl=document.querySelector("#etbtn");

    // if(etlbl.checked){
    //   let lbl1get=etlbl.getAttribute('lbl');

    //   console.log(lbl1get);
    //   setpayDetails((pre)=>{
    //     return{...pre,
    //     PaymentMode:lbl1get
    //     }
    //   })
    // }

    // var mode_select = document.querySelector("#selMode");
    // var mode_id = mode_select.options[mode_select.selectedIndex].getAttribute('code');

    // console.log(mode_id);

    // setpayDetails((pre)=>{
    //   return{...pre,ElectronicTransfersId:mode_id}
    // })

    console.log(payDetails);
  }


 




  const ETSubmit=(e)=>{
    e.preventDefault();

   const subUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/AddPatientPayment";
   
  //  setpayDetails((pre)=>{
  //   return{...pre,PatientId:PId}
  //  })

   console.log(payDetails);


   if(payDetails.PayAmount==="" || payDetails.TransactionNo==="" || payDetails.PaymentMode==="" || payDetails.PaymentDate===""){
    alert("Please fill all the details!")
   }

   fetch(subUrl,{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payDetails),
  }).then((res)=>res.json())
  .then((result)=>{
    console.log(result);
    console.log(payDetails);
    if(result.status===true){
      Swal.fire({
        title:"Payment Added Successfully!",
        icon:"success"
      })

      setTimeout(() => {
        window.location.reload()
      }, 500);
     }
  })

  }




  
  const [chequeDetails, setChequeDetails] = useState({
    PatientId:0,
    DocotrId:payDocID,
    PaymentDate:"",
    PaymentMode:"",
    ElectronicTransfersId:"",
    TransactionNo:0,
    NameOfBank:"",
    ChequeNo:"",
    DepositDate:"",
    BranchName:"",
    PayAmount:"",
    currency:"",
    ClearenceDate:"",
    ChequeStatus:"",
    CreateBy:1,
  })


  useEffect(()=>{
    let etlbl=document.querySelector("#chqbtn");

    if(etlbl.checked){
      let valget=etlbl.getAttribute('value');

      console.log(valget);
      setChequeDetails((pre)=>{
        return{...pre,
        ElectronicTransfersId:valget
        }
      })
    }
   
   
     // console.log("label is");

     
   
   },)




  const handleCheque=(e)=>{
    const newdata={...chequeDetails}
    newdata[e.target.name]=e.target.value;
    
    setChequeDetails(newdata);
    console.log(newdata);


    let etlbl2=document.querySelector("#chqbtn");

    if(etlbl2.checked){
      let lbl2get=etlbl2.getAttribute('lbl');

      console.log(lbl2get);
      setChequeDetails((pre)=>{
        return{...pre,
        PaymentMode:lbl2get
        }
      })
    }
    
    
  }

  const chequeSubmit=(e)=>{
    e.preventDefault();

    const subCUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/AddPatientPayment";



    if(chequeDetails.NameOfBank==="" || chequeDetails.BranchName==="" || chequeDetails.ChequeNo==="" || chequeDetails.PaymentDate==="" || chequeDetails.PayAmount==="" || chequeDetails.DepositDate==="" || chequeDetails.ClearenceDate==="" || chequeDetails.ChequeStatus===""){
      alert("Please fill all the details!")
    }else{    
   
    fetch(subCUrl,{
     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
     },
     body: JSON.stringify(chequeDetails),
   }).then((res)=>res.json())
   .then((result)=>{
     console.log(result);
     console.log(chequeDetails);
     if(result.status===true){
      Swal.fire({
        title:"Payment Added Successfully!",
        icon:"success"
      })

      setTimeout(() => {
        window.location.reload()
      }, 500);
     }
   })
  }
  }



  


  const [cashDetails, setCashDetails] = useState({
    PatientId:0,
    DocotrId:payDocID,
    PaymentDate:"",
    PaymentMode:"",
    ElectronicTransfersId:"",
    TransactionNo:0,
    NameOfBank:0,
    ChequeNo:0,
    DepositDate:"",
    BranchName:0,
    PayAmount:"",
    currency:"",
    ClearenceDate:"",
    ChequeStatus:"",
    CreateBy:1,
  })


  useEffect(()=>{
    let etlbl=document.querySelector("#cashbtn");

    if(etlbl.checked){
      let valget=etlbl.getAttribute('value');

      console.log(valget);
      setCashDetails((pre)=>{
        return{...pre,
        ElectronicTransfersId:valget
        }
      })
    }
   
   
     // console.log("label is");

     
   
   },)

  const handleCash=(e)=>{
    const newdata={...cashDetails}
    newdata[e.target.name]=e.target.value;
    
    setCashDetails(newdata);
    console.log(newdata);


    let etlbl3=document.querySelector("#cashbtn");

    if(etlbl3.checked){
      let lbl3get=etlbl3.getAttribute('lbl');

      console.log(lbl3get);
      setCashDetails((pre)=>{
        return{...pre,
        PaymentMode:lbl3get
        }
      })
    }
  }


  const submitCash=(e)=>{
    e.preventDefault();

    const cashUrl="https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/AddPatientPayment";



    if(cashDetails.currency==="" || cashDetails.PayAmount==="" || cashDetails.PaymentDate===""){
      alert("Please fill all the details!")
    }else{    
    fetch(cashUrl,{
     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
     },
     body: JSON.stringify(cashDetails),
   }).then((res)=>res.json())
   .then((result)=>{
     console.log(result);
     console.log(cashDetails);
     if(result.status===true){
      Swal.fire({
        title:"Payment Added Successfully!",
        icon:"success"
      })

      setTimeout(() => {
        window.location.reload()
      }, 500);
     }
   })
  }
  }

  const RoleId = sessionStorage.getItem("Role");

 let payPntID=sessionStorage.getItem("pntPayId");

  const [AmountData, setAmountData] = useState([])


const amountUrl=`https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetDoctorPayment/${RoleId==="1"?payPntID:payDocID}`;

  useEffect(()=>{
    fetch(amountUrl)
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result.Data[0]);
      setAmountData(result.Data[0])
    })
  },[])
 
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
      {Role==="4"?"":<Container fluid>
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
      </Container>}

      <Container fluid>
        <p className="text-center" style={{fontWeight:"500"}}>Dr. Name: <span>{AmountData?.DoctorName}</span></p>
        <Row className="justify-content-center">
          <Col md={10}>
            <Row  className="text-center">
                <Col>
                <p className="pt-3" style={{fontWeight:"500"}}>Total Amount: {AmountData?.Quotation}</p>
                </Col>
                <Col>
                <p className="pt-3" style={{fontWeight:"500"}}>Balance: {AmountData?.Quotation-AmountData?.PaidAmount}.00</p>
                </Col>
            </Row>
            <Row
              className="mt-3 mb-5 p-5 pt-5 justify-content-center"
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 15px  #C49358",
                borderRadius: "8px",
              }}
            >
             <Col md={8}>
               <Row className="ms-5">
                 <Col>
                 <Form.Check type="radio" aria-label="radio 1" name="payment" label="Electronic Transfers" lbl="Electronic Transfers" id="etbtn" value="1" />
                 </Col>
                 <Col>
                 <Form.Check type="radio" aria-label="radio 1" name="payment" label="Cheque" lbl="Cheque" id="chqbtn" value="2"/>
                 </Col>
                 <Col>
                 <Form.Check type="radio" aria-label="radio 1" name="payment" label="Cash" lbl="Cash" id="cashbtn" value="3"/>
                 </Col>
               </Row>
             </Col>
            <hr className="mt-3"/>






            <Row className="justify-content-center desc" id="pay1" style={{display:"none"}}>
                <Col md={10}>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="" name="PayAmount" value={payDetails.PayAmount} onChange={(e)=>handle(e)}/>
                          </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Transaction Id</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="" name="TransactionNo" value={payDetails.TransactionNo} onChange={(e)=>handle(e)}/>
                          </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Mode</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Select aria-label="Default select example" name="PaymentMode" id="selMode" value={payDetails.PaymentMode} onChange={(e)=>handle(e)}>
                              
                          <option selected>Select Payment Mode</option>

                          {Pmode.map((m)=>{
                           
                            return(

                            <option code={m.ElectronicTransfersId} >{m?.ModeName}</option>
                          )})
}
                        </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="date" placeholder="" name="PaymentDate" value={payDetails.PaymentDate} onChange={(e)=>handle(e)} />
                          </Form.Group>
                        </Col>
                    </Row>

                    
              
                </Col>
                <Row className="text-center mt-4">
                <Col>
                <Button variant="" type="submit" style={{backgroundColor:"rgb(196, 147, 88)",color:"White"}} onClick={(e)=>ETSubmit(e)}>Submit</Button>
                </Col>
              </Row>
            </Row>












            <Row className="justify-content-center desc" id="pay2" style={{display:"none"}}>
                <Col md={10}>
                   <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name of Bank</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="" name="NameOfBank" value={chequeDetails.NameOfBank} onChange={(e)=>handleCheque(e)}/>
                          </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Branch</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="" name="BranchName" value={chequeDetails.BranchName} onChange={(e)=>handleCheque(e)}/>
                          </Form.Group>
                    </Col>
                   </Row>
                   <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Cheque No.</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="" name="ChequeNo" value={chequeDetails.ChequeNo} onChange={(e)=>handleCheque(e)}/>
                          </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Dated</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="date" placeholder="" name="PaymentDate" value={chequeDetails.PaymentDate} onChange={(e)=>handleCheque(e)}/>
                          </Form.Group>
                    </Col>
                   </Row>
                   <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="" name="PayAmount" value={chequeDetails.PayAmount} onChange={(e)=>handleCheque(e)}/>
                          </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Deposit Date</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="date" placeholder="" name="DepositDate" value={chequeDetails.DepositDate} onChange={(e)=>handleCheque(e)}/>
                          </Form.Group>
                    </Col>
                   </Row>

                   <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Clearence Date</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="date" placeholder="" name="ClearenceDate" value={chequeDetails.ClearenceDate} onChange={(e)=>handleCheque(e)}/>
                          </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Cheque Status</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Select aria-label="Default select example" name="ChequeStatus" id="selMode" value={chequeDetails.ChequeStatus} onChange={(e)=>handleCheque(e)}>
                              
                              <option selected>Select Cheque Status</option>
                              <option selected>Cleared</option>
                              <option selected>Bounced</option>
                              <option selected>Pending</option>
    
                             
                            </Form.Select>
                          </Form.Group>
                    </Col>
                   </Row>

                    
              
                </Col>
                <Row className="text-center mt-4">
                <Col>
                <Button variant="" type="submit" style={{backgroundColor:"rgb(196, 147, 88)",color:"White"}} onClick={(e)=>chequeSubmit(e)}>Submit</Button>
                </Col>
              </Row>
            </Row>





            <Row className="justify-content-center desc" id="pay3" style={{display:"none"}}>
                <Col md={10}>
                 <Row>
                  <Col>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Currency</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Select aria-label="Default select example" name="currency" id="selMode" value={cashDetails.currency} onChange={(e)=>handleCash(e)}>
                              
                          <option>Select Currency</option>
                          <option>INR</option>

                          <option>USD</option>

                          </Form.Select>
                          </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="" name="PayAmount" value={cashDetails.PayAmount} onChange={(e)=>handleCash(e)}/>
                          </Form.Group>
                  </Col>
                 </Row>
<Row>
  <Col md={6}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Date</Form.Label> <span style={{color:"red"}}>*</span>
                            <Form.Control type="date" placeholder="" name="PaymentDate" value={cashDetails.PaymentDate} onChange={(e)=>handleCash(e)}/>
                          </Form.Group>
  </Col>
</Row>
                    
              
                </Col>
                <Row className="text-center mt-4">
                <Col>
                <Button variant="" type="submit" style={{backgroundColor:"rgb(196, 147, 88)",color:"White"}} onClick={(e)=>submitCash(e)}>Submit</Button>
                </Col>
              </Row>
            </Row>


            </Row>

            
              


          </Col>
        </Row>
      </Container>
        </>
    );
}


export default Payment;