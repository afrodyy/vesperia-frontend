import type { AnswerValue, Form } from "../types/form";

type Props = {
  form: Form;
  answers: Record<number, AnswerValue>;
  onChange?: (fieldId: number, value: AnswerValue) => void;
  readonly?: boolean;
};

export default function FormRenderer({
  form,
  answers,
  onChange,
  readonly = false,
}: Props) {
  const isDisabled = readonly || !onChange;

  if (!form.fields) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{form.name}</h2>

      {form.fields.map((field) => {
        const value = answers[field.id] ?? "";

        return (
          <div key={field.id} className="space-y-1">
            <label className="block font-medium text-gray-700">
              {field.label}
            </label>
            <p className="text-sm">{field.description}</p>

            {field.type === "text" && (
              <input
                type={field.sub_type === "date" ? "date" : "text"}
                value={value}
                disabled={isDisabled}
                onChange={(e) => onChange?.(field.id, e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            )}

            {field.type === "long_text" && (
              <textarea
                value={value}
                disabled={isDisabled}
                onChange={(e) => onChange?.(field.id, e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            )}

            {field.type === "radio_button" && (
              <div className="space-y-1">
                {field.options?.map((opt) => (
                  <label key={opt.id} className="flex items-center gap-2">
                    <input
                      type="radio"
                      disabled={isDisabled}
                      name={`field-${field.id}`}
                      value={opt.label}
                      checked={value === opt.label}
                      onChange={() => onChange?.(field.id, opt.label)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            )}

            {field.type === "checkbox" && (
              <div className="space-y-1">
                {field.options?.map((opt) => (
                  <label key={opt.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      disabled={isDisabled}
                      value={opt.label}
                      checked={value?.includes(opt.label)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const prev = Array.isArray(value) ? value : [];

                        onChange?.(
                          field.id,
                          checked
                            ? [...prev, opt.label]
                            : prev.filter((v) => v !== opt.label)
                        );
                      }}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
