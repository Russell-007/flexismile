import React from "react";
import Login from "./Admin/Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDoctor from "./Admin/Pages/AddDoctor";
import DoctorsList from "./Admin/Pages/DoctorsList";
import AddPatient from "./Doctor/Pages/AddPatient";
import AddTreatmentPlan from "./Doctor/Pages/AddTreatmentPlan";
import AddTreatmentPage from "./Doctor/Pages/AddTreatmentPage";
import AddReplan from "./Doctor/Pages/AddReplan";
// import PatientLogin from "./Doctor/Pages/PatientLogin";
import Upload from "./Doctor/Pages/Upload";
import PatientList from "./Doctor/Pages/PatientList";
import PlanDetails from "./Doctor/Pages/PlanDetails";
// import File from "./Doctor/Pages/File";
import Dashboard from "./Doctor/Pages/Dashboard";
import PatientDetails from "./Admin/Pages/PatientDetails";
// import PatientDetailsAd from "./Admin/Pages/patientDetailsDoc";
import PatientDetailsDoc from "./Admin/Pages/patientDetailsDoc";
import Ipr from "./Admin/Pages/Ipr";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import DoctorProfile from "./Admin/Pages/DoctorProfile";
import EditPatient from "./Admin/Pages/EditPatient";
import EditDoctor from "./Admin/Pages/EditDoctor";
import Payment from "./Admin/Pages/Payment";
import PatientsListForSets from "./Admin/Pages/PatientsListForSets";
import AlloactedSetsList from "./Admin/Pages/AllocatedSetsList";
import ShowPaymentDetails from "./Admin/Pages/ShowPaymentDetails";
import VideoRejectionReason from "./Admin/Pages/VideoRejectionReason";
import ReportOfSets from "./Admin/Pages/ReportOfSets";
import OngoingTreatmentsReport from "./Admin/Pages/OngoingTreatmentsReport";
import Test from "./Admin/Pages/Test";
import { Grid } from "ag-grid-community";
import SetsAllocationReport from "./Admin/Pages/SetsAllocationReport";
import InTreatment from "./Doctor/Pages/InTreatment";
import Handover from "./Doctor/Pages/Handover";
import VerifySignup from "./Admin/Pages/VerifySignup";
import RequestList from "./Admin/Pages/RequestList";
import RequestAligners from "./Doctor/Pages/RequestAligners";
import Maintenance from "./Admin/Pages/Maintenance";
import SetsReport from "./Doctor/Pages/SetsReport";
import ProdDashboard from "./Production/Pages/ProdDashboard";
import AddPayment from "./Accountant/Pages/AddPayment";
import ProductionManager from "./Admin/Pages/ProductionManager";
import PatientwisePayment from "./Admin/Pages/PatientwisePayment";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/view-doctors" element={<DoctorsList />} />
          <Route path="/add-patient" element={<AddPatient />} />
           <Route path="/add-treatment-plan/:PatientId" element={<AddTreatmentPage />} />
           <Route path="/replan/:PatientId" element={<AddReplan/>} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/doctor-dashboard/:DoctorUserId" element={<Dashboard/>}/>
          <Route path="/plan-details/:PatientId" element={<PlanDetails/>}/>
          <Route path="/patient-list/:DoctorUserId" element={<PatientList />} />
          <Route path="/patient-details/:PatientId" element={<PatientDetails/>}/>
          <Route path="/patient-details-doc/:PatientId" element={<PatientDetailsDoc/>}/>
          <Route path="/ipr" element={<Ipr/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/doctor-profile/:DoctorId" element={<DoctorProfile/>}/>
          <Route path="/edit-patient/:PatientId" element={<EditPatient/>}/>
          <Route path="/edit-doctor/:DoctorId" element={<EditDoctor/>}/>
          <Route path="/payment/:PatientId" element={<Payment/>}/>
          <Route path="/patient-list-for-sets/:DoctorUserId" element={<PatientsListForSets/>} />
          <Route path="/allocated-sets" element={<AlloactedSetsList/>} />
          <Route path="/payment-details" element={<ShowPaymentDetails/>} />
          <Route path="/video-reject" element={<VideoRejectionReason/>} />
          <Route path="/sets-report" element={<ReportOfSets/>} />
          <Route path="/ongoing-report" element={<OngoingTreatmentsReport/>} />
          <Route path="/ag" element={<Test/>} />
          <Route path="/gridAg" element={<Grid/>} />
          <Route path="/alloc-report/:PatientId" element={<SetsAllocationReport/>} />
          <Route path="/in-treatment" element={<InTreatment/>} />
          <Route path="/aligners-report-doc" element={<SetsReport/>} />
          <Route path="/handover" element={<Handover/>} />
          <Route path="/verify-dr" element={<VerifySignup/>} />
          <Route path="/request-list" element={<RequestList/>} />
          <Route path="/request-aligners" element={<RequestAligners/>} />
          <Route path="/maintenance" element={<Maintenance/>} />
          <Route path="/prodn-dash" element={<ProdDashboard/>} />
          <Route path="/add-payment" element={<AddPayment/>} />
          <Route path="/p-manage" element={<ProductionManager/>} />
          <Route path="/pnt-pay" element={<PatientwisePayment/>} />

          {/* <Route path="/patient-login" element={<PatientLogin/>}/> */}
          {/* <Route path="/file" element={<File/>}/> */}




        </Routes>
      </Router>
    </div>
  );
}

export default App;
