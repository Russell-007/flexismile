import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import "../Styles/OngoingTreatmentReport.css";
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
  Table,
} from "react-bootstrap";
import user from "../../Assets/user.png";
import logo from "../../Assets/Logoremovebg.png";
import { FaBars } from "react-icons/fa";
import { FiMessageSquare, FiPower } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
function Test() {

  const navigate=useNavigate();
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
   
    {
      field: "CaseNo",
      floatingFilter:true,
      filter: "agTextColumnFilter",
      filterParams: {
        buttons: ["reset", "apply"],
      },
    },
    { headerName:"Patient Name",field: "Name", filter: "agTextColumnFilter",
    filterParams: {
      buttons: ["reset", "apply"],
    },
    floatingFilter:true,
  
  },
    { field: "PatientId", filter: "agNumberColumnFilter",
    filterParams: {
      buttons: ["reset", "apply"],
    },
    floatingFilter:true,
  
  },
    { headerName:"Doctor Name",field: "DoctorName", filter: "agTextColumnFilter",
    filterParams: {
      buttons: ["reset", "apply"],
    },
    floatingFilter:true,
  
  },

    
    { field: "NoOfSets", filter: "agNumberColumnFilter",
    filterParams: {
      buttons: ["reset", "apply"],
    },
    floatingFilter:true,

    //  cellRenderer: "agGroupCellRenderer"
     },
    {
      field: "Dispatch Aligners",
      cellRenderer: () => {
        const buttonClicked = () => {
          alert(` won!`);
        };
        return (
          <>
            <span>
              {/* <span>{cellValue}</span>&nbsp; */}
              <Button
                variant=""
                style={{ color: "#C49358" }}
                onClick={() => buttonClicked()}
              >
                Send
              </Button>
            </span>
          </>
        );
      },
    },
    { headerName: "Total Sets Status", field:"StatusSets",filter: "agTextColumnFilter",
    filterParams: {
      buttons: ["reset", "apply"],
    },
    floatingFilter:true,

    //  cellRenderer: "agGroupCellRenderer"
     },
  //   {
  //     field: "Report",
  //     cellRenderer: (event) => {
  //       const buttonClicked = () => {
         
  //         // console.log(e);
  //         sessionStorage.setItem("pID",event.data.PatientId);
  //   sessionStorage.setItem("PSID",event.data.PatientSetsId);
  // let patId=sessionStorage.getItem("pID")

  //         navigate(`/alloc-report/${patId}`);
  //       };
  //       return (
  //         <>
  //           <span>
  //             {/* <span>{cellValue}</span>&nbsp; */}
  //             <Button
  //               variant=""
  //               style={{ color: "#C49358" }}
  //               onClick={() => buttonClicked()}
  //             >
  //               Reports
  //             </Button>
  //           </span>
  //         </>
  //       );
  //     },
  //   },
  ]);

  const detailCellRendererParams = useMemo(() => {
    return {
      detailGridOptions: {
        pagination: true,
        paginationAutoPageSize: true,
        columnDefs: [{ field: "Name" }, { field: "DateofBirth" }],
        defaultColDef: {
          sortable: true,
          flex: 1,
        },
      },
      getDetailRowData: (params) => {
        params.successCallback(params.data.callRecords);
      },
    };
  }, []);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    // editable: true,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
    sessionStorage.setItem("pID",event.data.PatientId);
    sessionStorage.setItem("PSID",event.data.PatientSetsId);
    console.log(event.data.PatientId);
    console.log(event.data.PatientSetsId);
   
    //  navigate("")
  }, []);

  // Example load data from sever
  useEffect(() => {
    fetch(
      "https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetPatientTotalsetDetails/0/0/0"
    )
      .then((result) => result.json())
      .then((rowData) => {
        console.log(rowData.Data);
        setRowData(rowData.Data);
      });
    console.log(rowData);
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  const paginationNumberFormatter = useCallback((params) => {
    return "[" + params.value.toLocaleString() + "]";
  }, []);

  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.paginationGoToPage(4);
  }, []);

  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById("page-size").value;
    gridRef.current.api.paginationSetPageSize(Number(value));
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Group",
      minWidth: 170,
      field: "athlete",
      valueGetter: (params) => {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        checkbox: true,
      },
    };
  }, []);

  // let patientId = sessionStorage.getItem("pID");
  // let patientSetId = sessionStorage.getItem("PSID");






























let id1=sessionStorage.getItem("pID");
let id2=sessionStorage.getItem("PSID");

  const subGridRef = useRef(); // Optional - for accessing Grid's API

  const [rd, setRd] = useState();

  var filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split('/');
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
    browserDatePicker: true,
    minValidYear: 2000,
    maxValidYear: 2021,
    inRangeFloatingFilterDateFormat: 'Do MMM YYYY',
  };

  const [cols, setCols] = useState([
    { headerName:"Total Sets",field: "NoOfSets", filter: true },
    { headerName:"Upper Sets",field: "TotalNoOfUpperSets", filter: true },
    { headerName:"Lower Sets",field: "TotalNoOfLowerSets", filter: true },
    { headerName:"Delivery Date",field: "ReceivedDate", filter: 'agDateColumnFilter',
    filterParams: filterParams, },
    { headerName:"Delivery Status",field: "ReceiveStatusSets", filter: true },


    

    
    // {field: 'PatientId', filter: true},
    // {field: 'CaseNo', filter: 'agTextColumnFilter',
    // filterParams: {
    //   buttons: ['reset', 'apply'],
    // },},
    // {field: 'NoOfSets',filter:true,cellRenderer: 'agGroupCellRenderer'},
  ]);

  const defColsDef = useMemo(() => ({
    editable: true,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  }));

  useEffect(() => {
    fetch(
      `https://www.orthosquareportal.com/FlexismileApi/FlexAlign.svc/GetPatientTotalsetView/${id1}/${id2}`
    )
      .then((result) => result.json())
      .then((subrow) => {
        console.log(subrow.Data);
        setRd(subrow.Data);
      });
    console.log(rd);
  }, [rd]);

  return (
    <>
      <Container>
        <Row style={{ backgroundColor: "white" }} className="mt-5 mb-5 pb-5">
          <Col md={{ span: 12 }} xs={{ span: 12 }}>
            <Row>
              <Col
                className="ag-theme-alpine"
                style={{ width: 500, height: 500 }}
              >
                {/* <DataTable
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
                    }
                  /> */}
                {/* <button onClick={buttonListener}>Push Me</button> */}
                <div className="example-header">
                  Page Size:
                  <select onChange={onPageSizeChanged} id="page-size">
                    <option value="10" selected={true}>
                      10
                    </option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                  </select>
                </div>

                <AgGridReact
                  className=""
                  ref={gridRef} // Ref for accessing Grid's API
                  rowData={rowData}
                  columnDefs={columnDefs}
                  autoGroupColumnDef={autoGroupColumnDef}
                  defaultColDef={defaultColDef}
                  suppressRowClickSelection={true}
                  groupSelectsChildren={true}
                  rowSelection={"multiple"}
                  rowGroupPanelShow={"always"}
                  pivotPanelShow={"always"}
                  pagination={true}
                  
                  paginationPageSize={10}
                  paginationNumberFormatter={paginationNumberFormatter}
                  // onGridReady={onGridReady}
                  masterDetail={true}
                  onCellClicked={cellClickedListener}
                  // detailCellRendererParams={detailCellRendererParams}
                  // detailCellRendererParams={()=>{
                  //   return(
                  //     <>
                  //     <p>jdskdhiald</p>
                  //     <AgGridReact
                  //     ref={subGridRef}
                  //     rowData={rd}
                  //     columnDefs={cols}
                  //     defaultColDef={defColsDef}
                  //     />
                  //     </>
                  //   );
                  // }}
                  // detailCellRenderer={() => {
                  //   return (
                  //     <>
                        
                  //     </>
                  //   );
                  // }}
                />

<Row className="mt-5">
                  <Col className="ag-theme-alpine"
                style={{ width: 500, height: 300 }}>

<div className="example-header">
                  Page Size:
                  <select onChange={onPageSizeChanged} id="page-size">
                    <option value="10" selected={true}>
                      10
                    </option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                   
                  </select>
                </div>
                  <AgGridReact
                      ref={subGridRef}
                      rowData={rd}
                      columnDefs={cols}
                      defaultColDef={defColsDef}

                      autoGroupColumnDef={autoGroupColumnDef}
                     
                      suppressRowClickSelection={true}
                      groupSelectsChildren={true}
                      rowSelection={"multiple"}
                      // rowGroupPanelShow={"always"}
                      pivotPanelShow={"always"}
                      pagination={true}
                    
                      paginationPageSize={10}
                      paginationNumberFormatter={paginationNumberFormatter}
                      // onGridReady={onGridReady}
                      // masterDetail={true}
                      // onCellClicked={cellClickedListener}
                      />
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

export default Test;
