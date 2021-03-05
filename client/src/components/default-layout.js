import Container from "./container"
import Sidebar from "./sidebar"

const DefaulyLayout = (props) => {
    return (
        <div className="row">
            <div className="col s12 m2">
                <Sidebar></Sidebar>
            </div>
            <div className="col s12 m10 19">
                <Container>
                    {props.children}
                </Container>
            </div>
        </div>
    );
}

export default DefaulyLayout;