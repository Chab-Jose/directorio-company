
/**
 * Componente del titulo de la página con botón de crear
 * @param  {string} title - Título de la página
 * @returns
 */
export default function TitleSingle({title} ) {
    return (
        <>
            <div className="w-full mb-3 flex justify-between px-3 items-center">
                <p className="text-xl font-bold">{title}</p>
            </div>
        </>
    );
}
