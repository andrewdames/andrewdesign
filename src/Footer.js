import React, { Component } from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends Component {
    render(){
        return(
            <Footer color="gray" className="font-small pt-4 mt-4">
                <Container className="text-left">

                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: Andrew Dames 
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
