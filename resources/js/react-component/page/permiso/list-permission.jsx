import TitlePage from "../../components/elements/title-page";
import TableMain from "../../components/table-general/table-main";


function TablePermission(){
    return(
        <>
            <TitlePage
                title="Permisos"
                nameBtn="Nuevo permiso"
                pathBtn="/permiso/crear"
            />
            <TableMain />
        </>
    );
}

export default TablePermission;
