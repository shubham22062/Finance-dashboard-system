import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;