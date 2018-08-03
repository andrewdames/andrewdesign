import React, { Component } from 'react';
import { Button, Col, Container, Row, Footer } from 'mdbreact';
import resume from './images/ad-resume.pdf';
import { PortfolioDiv, OverviewImg, OverviewText, ProjectsDiv } from './theme/Grid';
import  { PortfolioTitle, PortfolioText, Title, AboutDesc } from './theme/Type';
class FooterPage extends Component {
    render(){
        return(
            <Footer color="gray" className="font-small pt-4 mt-4">
            <div className="row">

                 <div className="col">
                <Container className="text-center">
                <div className="row">



                     <a href="mailto:email@andrewdames.com" target="_blank" rel="noopener noreferrer">

                       <Button size="lg">
                       Email me
                       </Button>
                    </a>
                     </div>
                </Container>
</div>
<div className="col">

                <Container className="text-center">
                <div className="row">




<a href={resume} target="_blank" rel="noopener noreferrer">

  <Button size="lg">
  Download my resume
  </Button>
</a>
</div>
</Container>
</div></div>
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
