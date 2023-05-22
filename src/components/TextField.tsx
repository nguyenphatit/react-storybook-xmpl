interface TextFieldProps {
  placeholder: string;
  label?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
}

export const TextField = ({
  placeholder,
  value,
  required,
  label,
  disabled
}: TextFieldProps) => {
  const id = `${Math.random()}${label}`;

  return (
    <div className="p-2 my-5">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type="text"
        className="p-2 mt-1 group bg-transparent w-full border border-gray-600 focus:outline-none"
        placeholder={placeholder}
        defaultValue={value ?? ""}
        required={required}
        disabled={disabled}
        aria-labelledby={label}
      />
    </div>
  );
};
