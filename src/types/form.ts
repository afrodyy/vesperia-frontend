export type AnswerValue = string | string[] | null;

export interface Form {
  id: number;
  name: string;
  fields: FormField[];
}

export interface FormField {
  id: number;
  label: string;
  type: "text" | "long_text" | "radio_button" | "checkbox";
  sub_type?: "date" | "amount" | string;
  description?: string;
  parent_id?: number;
  options?: FormOption[];
}

export interface FormOption {
  id: number;
  label: string;
  value: string;
  parent_id?: number;
}

export interface SubmissionAnswer {
  field_id: number;
  value: AnswerValue;
}

export interface Submission {
  id: number;
  form: FormSummary;
  user_identifier: string | null;
  created_at: string;
  answers: SubmissionAnswer[];
}

export interface FormSummary {
  id: number;
  name: string;
  fields: FormField[];
}
