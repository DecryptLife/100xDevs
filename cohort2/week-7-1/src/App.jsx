import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Landing = lazy(() => import("../pages/Landing"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
