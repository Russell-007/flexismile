import React,{useState,useEffect} from "react";
import { Col, Container, Row, Table } from "react-bootstrap";


function SetsAllocationReport(){
    const [report, setReport] = useState([]);


    let patientId = sessionStorage.getItem("pID");
    let patientSetId = sessionStorage.getItem("PSID");


    let url=`https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetPatientTotalsetView/${patientId}/${patientSetId}`

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((setsdata)=>{
            console.log(setsdata.Data);
            setReport(setsdata.Data);
        })
    },[])
    return(
        <>
        <Container fluid>
            <Row>
                <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>Total Sets</th>
                            <th>Upper Sets</th>
                            <th>Lower Sets</th>
                            <th>Delivery Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                                    report?.map((r)=>{
                                        return(
                                            <>
                                            <tr>
                                                <td>{r?.NoOfSets}</td>
                                                <td>{r?.TotalNoOfUpperSets}</td>
                                                <td>{r.TotalNoOfLowerSets}</td>
                                                <td>{r?.ReceivedDate.split(" ")[0]}</td>

                                            </tr>
                                            </>
                                        );
                                    })
                        }
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default SetsAllocationReport;