import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormRenderer from "../components/FormRenderer";
import type { AnswerValue, Submission } from "../types/form";

type Answer = {
  field_id: number;
  value: string | string[];
};

export default function SubmissionDetailPage() {
  const { id } = useParams();
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});

  useEffect(() => {
    fetch(`http://localhost:8000/api/submissions/${id}`)
      .then((res) => res.json())
      .then((res) => {
        const s = res.data;
        const answerMap = s.answers.reduce(
          (acc: Record<number, AnswerValue>, a: Answer) => {
            acc[a.field_id] = a.value;
            return acc;
          },
          {}
        );

        setAnswers(answerMap);
        setSubmission(s);
      });
  }, [id]);

  if (!submission) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Detail Submission #{submission.id}
          </h1>
          <a href="/submissions" className="text-blue-400 hover:underline">
            Kembali
          </a>
        </div>
        <p className="text-gray-600">
          Form: <strong>{submission.form.name}</strong>
        </p>
        <p className="text-gray-600">
          User: {submission.user_identifier ?? "-"}
        </p>
        <p className="text-gray-600">
          Tanggal: {new Date(submission.submitted_at).toLocaleString()}
        </p>
      </div>

      <FormRenderer
        form={{ ...submission.form, fields: submission.form.fields }}
        answers={answers}
        readonly
      />
    </div>
  );
}
