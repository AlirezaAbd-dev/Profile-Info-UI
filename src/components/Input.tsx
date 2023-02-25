export default function Input({
  col,
  placeholder,
  label,
  icon,
}: {
  col: number;
  placeholder: string;
  label?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col md:m-2 space-y-1 col-span-${col}`}>
      <label htmlFor="firstname" className="text-xs">
        {label}
      </label>
      <div className="flex border border-border rounded-md">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent p-3 focus:outline-none placeholder:text-xs md:placeholder:text-md"
        />
        {icon}
      </div>
    </div>
  );
}
