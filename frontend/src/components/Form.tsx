interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

/**
 * @returns Generic form that renders children and accepts a form onSubmit function
 */
export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
      {children}
      <button
        type="submit"
        className="p-2 bg-sky-500 text-white hover:bg-sky-600 rounded-lg transition ease-in-out"
      >
        Submit
      </button>
    </form>
  );
};
