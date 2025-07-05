
export function CheckControl({ label, id, checked, onChange }) {
    return (
        <div className="flex items-center text-sm mb-4">
            <input
                type="checkbox"
                id={id}
                className="mr-2 accent-indigo-500 hover:accent-indigo-700"
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id} className="text-slate-400">
                {label}
            </label>
        </div>
    );
}

export function CheckControlGroup({ children }) {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    );
}
