import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row gap-3 p-3 w-full bg-white/60 rounded-xl shadow">
      <button
        onClick={() => navigate("/form/1")}
        className="w-min-32 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 ease-in-out duration-150 text-black cursor-pointer"
      >
        Form Detail Kejadian Risiko Operasional
      </button>
      <button
        onClick={() => navigate("/form/2")}
        className="w-min-32 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 ease-in-out duration-150 text-black cursor-pointer"
      >
        Detail Kerugian
      </button>
      <button
        onClick={() => navigate("submissions")}
        className="w-min-32 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 ease-in-out duration-150 text-black cursor-pointer"
      >
        Submissions
      </button>
    </div>
  );
}
