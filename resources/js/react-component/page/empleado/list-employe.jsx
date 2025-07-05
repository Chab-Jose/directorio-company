import TitlePage from "../../components/elements/title-page";
import TableMain from "../../components/table-general/table-main";


function TableEmploye(){
    return(
        <>
            <TitlePage
                title="Empleados"
                nameBtn="Nuevo Empleado"
                pathBtn="/empleado/crear"
            />
            <TableMain />
        </>
    );
}

export default TableEmploye;
