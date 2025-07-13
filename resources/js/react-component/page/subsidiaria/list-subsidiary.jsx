import TitlePage from "../../components/elements/title-page";
import TableMain from "../../components/table-general/table-main";


function TableSubsidiary(){
    return(
        <>
            <TitlePage
                title="Subsidiarias"
                nameBtn="Nueva subsidiaria"
                pathBtn="/subsidiaria/crear"
            />
            <TableMain />
        </>
    );
}

export default TableSubsidiary;
