import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../views/log in";
import styles from "./styles.module.css";



export default function MainLayout() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={<h1 style={ "text: white,"}>Not Found</h1>}
          />
        </Routes>
      </Router>
    </>
  );
}
