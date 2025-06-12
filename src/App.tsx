import "./App.css";
import FormPage from "./pages/FormPage";
import { Route, Routes } from "react-router-dom";
import SubmissionsPage from "./pages/SubmissionsPage";
import Navbar from "./components/Navbar";
import SubmissionDetailPage from "./pages/SubmissionDetailPage";

function App() {
  return (
    <div className="flex flex-col gap-6 p-6 w-full bg-slate-200">
      <Navbar />

      <div className="max-w-4xl w-full mx-auto p-6 bg-slate-100 rounded-xl min-h-screen flex-1 shadow">
        <Routes>
          <Route path="/form/:formId" element={<FormPage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />
          <Route path="/submissions/:id" element={<SubmissionDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
