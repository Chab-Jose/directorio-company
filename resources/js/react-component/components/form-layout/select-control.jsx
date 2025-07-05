
export default function SelectControl({ label, id, options, value, onChange }) {
    return (
        <div className="flex flex-1 flex-col text-sm m-3">
            <label htmlFor={id} className="text-slate-400">
                {label}
            </label>
            <select
                id={id}
                className="py-2 border-0 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none"
                value={value}
                onChange={onChange}
                defaultValue=""
                >
                <option value="" disabled >
                    Seleccione una opción...
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
