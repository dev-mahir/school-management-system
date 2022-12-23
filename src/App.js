import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Button from "./components/Button/Button";
import Layout from "./components/Layout/Layout";
import ConfirmDelete from "./components/Modal/ConfirmDelete";
import Error from "./components/Error/Error";
import UsersView from "./components/View/UsersManagements/UsersView";
import AddUser from "./components/View/UsersManagements/AddUser";
import UpdateUser from "./components/View/UsersManagements/UpdateUser";
import UsersProfile from "./components/View/UsersManagements/UsersProfile";
import ChangePassword from "./components/View/UsersManagements/ChangePassword";
import PasswordConfirmationCode from "./components/View/UsersManagements/PasswordConfirmationCode";
import AddClass from "./components/View/SetupManagements/Class/AddClass";
import ClassView from "./components/View/SetupManagements/Class/ClassView";
import GroupsView from "./components/View/SetupManagements/ClassGroup/GroupsView";
import AddGroup from "./components/View/SetupManagements/ClassGroup/AddGroup";
import AddFeeCategory from "./components/View/SetupManagements/FeeCategaories/AddFeeCategory";
import FeeCategories from "./components/View/SetupManagements/FeeCategaories/FeeCategories";
import AddFeeAmount from "./components/View/SetupManagements/Amount/AddFeeAmount";
import FeeAmountView from "./components/View/SetupManagements/Amount/FeeAmountView";
import AddDesignation from "./components/View/SetupManagements/Designation/AddDesignation";
import Designation from "./components/View/SetupManagements/Designation/Designation";
import Dashboard from "./components/View/Dashboard/Dashboard";
import StudentView from "./components/View/SetupManagements/Student/StudentView";
import StudentRegistration from "./components/View/SetupManagements/Student/StudentRegistration";
import AddSubject from "./components/View/SetupManagements/SubjectAndClass/AddSubject";
import SingleClassView from "./components/View/SetupManagements/SubjectAndClass/SingleClassView";
import SubjectAndClassView from "./components/View/SetupManagements/SubjectAndClass/SubjectAndClassView";
import AssignSubjectAndMarks from "./components/View/SetupManagements/SubjectAndClass/AssignSubjectAndMarks";
import Test from "./Test/Test";
import RollGenerate from "./components/View/SetupManagements/Student/RollGenerate";
import MonthlyFee from "./components/View/SetupManagements/Student/MonthlyFee";

function App() {
  // theme mode
  if (localStorage.isDarkMode === "true") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <ToastContainer className="z-[99999]" />
      <ConfirmDelete />

      <Routes>

        <Route path='/test' element={ <Test/>}></Route>


        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/button" element={<Button />}></Route>

          <Route path="/users/view" element={<UsersView />}></Route>
          <Route path="/users/add" element={<AddUser />}></Route>
          <Route path="/users/update-profile" element={<UpdateUser />}></Route>
          <Route path="/users/view-profile" element={<UsersProfile />}></Route>
          <Route
            path="/users/change-password"
            element={<ChangePassword />}></Route>

          <Route
            path="/confirm-code"
            element={<PasswordConfirmationCode />}></Route>

          <Route
            path="/setup/student/class/view"
            element={<ClassView />}></Route>
          <Route path="/setup/student/class/add" element={<AddClass />}></Route>

          <Route
            path="/setup/student/group/view"
            element={<GroupsView />}></Route>
          <Route path="/setup/student/group/add" element={<AddGroup />}></Route>

          <Route
            path="/setup/fee/category/view"
            element={<FeeCategories />}></Route>
          <Route
            path="/setup/fee/category/add"
            element={<AddFeeCategory />}></Route>

          <Route
            path="/setup/fee/amount/view"
            element={<FeeAmountView />}></Route>
          <Route
            path="/setup/fee/amount/add"
            element={<AddFeeAmount />}></Route>

          <Route
            path="/setup/employee/designation/view"
            element={<Designation />}></Route>
          <Route
            path="/setup/employee/designation/add"
            element={<AddDesignation />}></Route>
          
          <Route
            path="/setup/subject-and-class/view"
            element={<SubjectAndClassView />}></Route>
          <Route
            path="/setup/subject/add"
            element={<AddSubject />}></Route>
          <Route
            path="/setup/student/assign-subject-marks"
            element={<AssignSubjectAndMarks />}></Route>
          
          <Route
            path="/setup/student/:id/view"
            element={<SingleClassView />}></Route>

          <Route path="/student/view" element={<StudentView />}></Route>
          <Route path="/student/registration" element={<StudentRegistration />}></Route>
          <Route path="/student/roll/generate" element={<RollGenerate />}></Route>
          <Route path="/student/monthly/fee/view" element={<MonthlyFee />}></Route>
          <Route path="/student/exam/fee/view" element={<MonthlyFee />}></Route>

          <Route path="*" element={<Error />}></Route>
        </Route>

        
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
