import { useState } from "react";
import "./App.css";
import FormPage from "./pages/FormPage";

function App() {
  const [formId, setFormId] = useState<number>(1);

  return (
    <div className="flex flex-col gap-6 p-6 w-full bg-slate-200">
      <div className="flex flex-row gap-3 p-3 w-full bg-white/60 rounded-xl">
        <button
          onClick={() => setFormId(1)}
          className="w-min-32 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 ease-in-out duration-150 text-black cursor-pointer"
        >
          Form Detail Kejadian Risiko Operasional
        </button>
        <button
          onClick={() => setFormId(2)}
          className="w-min-32 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 ease-in-out duration-150 text-black cursor-pointer"
        >
          Detail Kerugian
        </button>
      </div>

      <div className="max-w-4xl w-full mx-auto p-6 bg-slate-100 rounded-xl">
        <FormPage formId={formId} />
      </div>
    </div>
  );
}

export default App;
