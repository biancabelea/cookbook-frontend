import React from "react";
import {MDBContainer, MDBFooter} from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter className="footer">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <p>Bianca-Maria BELEA</p>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;
