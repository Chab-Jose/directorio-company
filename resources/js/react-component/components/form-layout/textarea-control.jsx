
export default function TextAreaControl({ label, id, placeholder, onChange }) {
    return (
        <div className="flex flex-1 flex-col text-sm m-3">
            <label htmlFor={id} className="text-slate-400">
                {label}
            </label>
            <textarea
                id={id}
                className="mt-1 block w-full py-2 border-0 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}
