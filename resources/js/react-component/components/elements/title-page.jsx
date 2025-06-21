import BtnCreate from "./btn-create";

export default function TitlePage({title}) {
    return (
        <>
            <div className="bg-white shadow rounded p-4 w-full mb-3">
                {title}
            </div>
            <BtnCreate />
        </>
    );
}
