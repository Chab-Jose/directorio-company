
export function InputForm({ label, type, id, placeholder = 'Escriba aquí...' }) {
  return (
    <div className="flex flex-1 flex-col text-sm m-3">
      <label htmlFor={id} className="text-slate-400">{label}</label>
      <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="py-2 border-0 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none"  />
    </div>
  );
}


export function RowForm({ children}) {
  return (
    <div className="flex flex-wrap gap-4 mb-3">
      {children}
    </div>
  );
}
