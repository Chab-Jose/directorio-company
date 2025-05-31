

function TableMain() {
    return(
        <>
            <div className="p-1 bg-white shadow rounded h-2/4">
                <div className="flex justify-between p-2 md:justify-end md:p-4">
                    <input
                        type="text"
                        placeholder=" Buscar..."
                        className="w-64 max-w-sm rounded-md text-gray-700 placeholder-gray-500 ring-1 ring-neutral-300
                            focus:outline-none focus:ring-2 focus:ring-stone-950"
                    />
                </div>
                <div className="overflow-x-auto md:text-sm text-xs h-full">
                    <table className="min-w-full border border-neutral-200">
                        <thead>
                            <tr>
                                <th className="bg-neutral-100 p-2 ">Header 1</th>
                                <th className="bg-neutral-100 p-2 ">Header 2</th>
                                <th className="bg-neutral-100 p-2 ">Header 3</th>
                                <th className="bg-neutral-100 p-2 ">Header 4</th>
                                <th className="bg-neutral-100 p-2 ">Header 5</th>
                                <th className="bg-neutral-100 p-2 ">Header 6</th>
                                <th className="bg-neutral-100 p-2 ">Header 7</th>
                                <th className="bg-neutral-100 p-2 ">Header 8</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b border-neutral-100 hover:bg-sky-100">
                                <td className="text-justify p-2">Data 1</td>
                                <td>Data 2</td>
                                <td>Data 3</td>
                                <td>Data 4</td>
                                <td>Data 5</td>
                                <td>Data 6</td>
                                <td>Data 7</td>
                                <td>Data 8</td>
                            </tr>
                            <tr className=" border-b border-neutral-100 hover:bg-sky-100">
                                <td className="text-justify p-2">Data 1</td>
                                <td>Data 2</td>
                                <td>Data 3</td>
                                <td>Data 4</td>
                                <td>Data 5</td>
                                <td>Data 6</td>
                                <td>Data 7</td>
                                <td>Data 8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TableMain;
