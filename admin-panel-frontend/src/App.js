import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import StudentList from "./pages/StudentList";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/students" element={<StudentList />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
