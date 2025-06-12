import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Submission = {
  id: number;
  form_id: number;
  user_identifier: string | null;
  created_at: string;
  form: {
    id: number;
    name: string;
  };
};

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/submissions")
      .then((res) => res.json())
      .then((res) => setSubmissions(res.data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Daftar Submissions
      </h2>

      <div className="overflow-auto rounded-lg border border-gray-300">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Form</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Tanggal</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub.id} className="border-t">
                <td className="px-4 py-2">{sub.id}</td>
                <td className="px-4 py-2">{sub.form?.name ?? "-"}</td>
                <td className="px-4 py-2">{sub.user_identifier ?? "-"}</td>
                <td className="px-4 py-2">
                  {new Date(sub.created_at).toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => navigate(`/submissions/${sub.id}`)}
                    className="text-blue-400 hover:underline"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
            {submissions.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center px-4 py-6 text-gray-500">
                  Belum ada submission
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
