import { useEffect, useState } from "react";
import type { AnswerValue, Form } from "../types/form";
import FormRenderer from "../components/FormRenderer";
import { useNavigate, useParams } from "react-router-dom";

export default function FormPage() {
  const { formId } = useParams();
  const [form, setForm] = useState<Form | null>(null);
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/forms/" + formId)
      .then((res) => res.json())
      .then((res) => setForm(res.data));
  }, [formId]);

  const handleChange = (fieldId: number, value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = async () => {
    const payload = {
      user_identifier: "user123",
      answers: Object.entries(answers).map(([fieldId, value]) => ({
        form_field_id: parseInt(fieldId),
        value,
      })),
    };

    const res = await fetch(
      `http://localhost:8000/api/forms/${formId}/submit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const json = await res.json();

    if (json.status === "success" && json.data?.submission_id) {
      navigate(`/submissions/${json.data.submission_id}`);
    } else {
      alert("Gagal menyimpan form. Coba lagi.");
    }
  };

  return (
    <>
      {form ? (
        <>
          <FormRenderer form={form} answers={answers} onChange={handleChange} />
          <button
            onClick={handleSubmit}
            className="mt-6 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </>
      ) : (
        <p>Loading form...</p>
      )}
    </>
  );
}
