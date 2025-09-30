import React from 'react';
import Login from './component/auth/Login';
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import Registration from './component/auth/registration';
import TeacherDashboard from "./component/Teacher/teacherDashboard";
import Layout from './component/Teacher/Layout';
import StudentDashboard from './component/Teacher/StudentDashboard';

import ProfileVerification from "./component/Teacher/ProfileVerification";

import NewActivity from "./component/Teacher/NewActivity"
import ActivityDetailModel from './component/Teacher/ActivityDetailModel';
import MyActivity from "./component/Teacher/MyActivity"
import VerifyActivity from "./component/Teacher/VerifyActivities";
//import Assignment from "../../SSH1/models/Assignment";
// import AssignmentStudent from "./component/Teacher/AssignmentStudent"
import AssignmentTeacher from './component/Teacher/AssignmentTeacher';
import TrisetuPage from "./component/Teacher/TrisetuPage";
const App = () => {

  return (
    <>
    <Router>
       
      <Routes>

       
        {/* <Route path="/" element={<Navigate to="/Home" />} />  */}
 <Route path="/" element={<Login/>} />
 {/* <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* Default route → Login page */}
        <Route path="/" element={<Navigate to="/login" />} /> 

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route element={<Layout />}>
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student"element={<StudentDashboard/>} />
          {/* <Route path="/student/assignments" element={<AssignmentStudent />} />
<Route path="/student/assignments/:id" element={<AssignmentStudent />} /> */}

          {/* <Route path="/AssignmentStudent"element={<AssignmentStudent/>} /> */}
          {/* <Route path="/AssignmentStudent/:id" element={<AssignmentStudent />} />
          <Route path="/student/AssignmentStudent" element={<AssignmentStudent />} /> */}
          <Route path="/AssignmentTeacher"element={<AssignmentTeacher/>} />
            
          <Route path="/profileV" element={<ProfileVerification />} />
          <Route path="/newactivity" element={< NewActivity/>} />
          <Route path="/myactivity" element={< MyActivity/>} />
          
          <Route path="/ActivityDetail" element={< ActivityDetailModel/>} />
             <Route path="/verify" element={<VerifyActivity/>} />
          <Route path="/search" element={<TrisetuPage />} />
      <Route path="/notifications" element={<TrisetuPage />} />
      <Route path="/profile" element={<TrisetuPage />} />
        </Route>
      </Routes>
      <Routes>
 
  <Route path="/TrisetuPage" element={<TrisetuPage />} />
</Routes>
    </Router>
    
  </>
  )
}


export default App;

