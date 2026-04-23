interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type,
  placeholder,
  name,
  text,
  value,
  onChange,}: InputProps) {
    
  return (
    <div className="flex flex-col w-full max-w-[340px]">
      <label className="mt-6 text-sm" htmlFor={name}>
        {text}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
}