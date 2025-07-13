import TitlePage from "../../components/elements/title-page";
import TableMain from "../../components/table-general/table-main";


function TableRol(){
    return(
        <>
            <TitlePage
                title="Roles"
                nameBtn="Nuevo rol"
                pathBtn="/rol/crear"
            />
            <TableMain />
        </>
    );
}

export default TableRol;
