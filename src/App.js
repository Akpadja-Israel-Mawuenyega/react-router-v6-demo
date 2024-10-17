import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
// import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
const About = React.lazy(() => import("./pages/About"));

// React Router Version 6 was used in this little project.

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense
              fallback={
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                  <FontAwesomeIcon icon={faSpinner} spinPulse size="4x"/>
                  <p style={{ fontSize: "30px" }}>Loading...</p>
                </div>
              }
            >
              <About />
            </React.Suspense>
          }
        />
        <Route path="products" element={<SharedProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":productId" element={<SingleProduct />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
