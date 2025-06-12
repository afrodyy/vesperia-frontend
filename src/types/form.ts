export interface Form {
  id: number;
  name: string;
  fields: FormField[];
}

export interface FormField {
  id: number;
  label: string;
  type: "text" | "long_text" | "radio_button" | "checkbox" | "select";
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

export type AnswerValue = string | string[] | null;
