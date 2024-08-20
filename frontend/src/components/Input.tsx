import { Dispatch, SetStateAction } from 'react';

interface InputProps {
  type: string;
  htmlFor: string;
  disabled: boolean;
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
}
export const Input = ({ type, htmlFor, disabled, placeholder, onChange }: InputProps) => {
  return (
    <label htmlFor={htmlFor}>
      <input
        id={htmlFor}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded-lg"
      />
    </label>
  );
};
