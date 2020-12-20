import CardTables from "../../components/Cards/CardTables";

const Tables = () => {
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <CardTables color="light" />
                </div>
                <div className="w-full mb-12 px-4">
                    <CardTables color="dark" />
                </div>
            </div>
        </>
    );
}

export default Tables;
