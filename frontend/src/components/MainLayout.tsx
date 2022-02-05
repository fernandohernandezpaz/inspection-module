import "materialize-css/dist/js/materialize.min.js";

const MainLayout = (props: any) => {
    return (
        <>
            <div className="container-fluid">
                {props.children}
            </div>
        </>
    )
}

export default MainLayout;