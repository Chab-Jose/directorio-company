import TitlePage from "../../components/elements/title-page";
import TableMain from "../../components/table-general/table-main";


function TableDepartment(){
    return(
        <>
            <TitlePage
                title="Departamentos"
                nameBtn="Nuevo Departamento"
                pathBtn="/departamento/crear"
            />
            <TableMain />
        </>
    );
}

export default TableDepartment;
