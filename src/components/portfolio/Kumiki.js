import React, { Component } from 'react';
import bantamHome from '../../images/bantam-home.png';
import everlastPages from '../../images/Webpages-Everlast.jpg';
import { PortfolioDiv, OverviewImg, OverviewText, ProjectsDiv } from '../../theme/Grid';
import  { PortfolioTitle, PortfolioText, Title, AboutDesc } from '../../theme/Type';
import devIcon from '../../images/Bantam-Media-Template.png';
import { Button, Col, Row } from 'mdbreact';
import { Parallax, Background } from 'react-parallax';
import ec1 from '../../images/EC/ec-1.jpg';
import ec2 from '../../images/EC/ec-2.jpg';
import ec3 from '../../images/EC/ec-3.jpg';
import ec4 from '../../images/EC/ec-4.jpg';
import ec5 from '../../images/EC/ec-5.jpg';
import ec6 from '../../images/EC/ec-6.jpg';
import ec7 from '../../images/EC/ec-7.jpg';
import ec8 from '../../images/EC/ec-9.jpg';
import ec9 from '../../images/EC/ec-9.jpg';
import kumikiPages from '../../images/Webpages-Kumiki.png';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


//require ('/node_modules/mdbreact/docs/pages/pro/Lightbox.css');

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-75%,-50%)'};
const insideStyles2 = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(50%,50%)'};


const images = [
	{ src: ec1},
  { src: ec2},
	{ src: ec4},
	{ src: ec5},
	{ src: ec6},
	{ src: ec7}
];

class Kumiki extends Component {
	constructor() {
     super();
     this.state = { currentImage: 0 };
     this.closeLightbox = this.closeLightbox.bind(this);
     this.openLightbox = this.openLightbox.bind(this);
     this.gotoNext = this.gotoNext.bind(this);
     this.gotoPrevious = this.gotoPrevious.bind(this);
   }
   openLightbox(event, obj) {
     this.setState({
       currentImage: obj.index,
       lightboxIsOpen: true,
     });
   }
   closeLightbox() {
     this.setState({
       currentImage: 0,
       lightboxIsOpen: false,
     });
   }
   gotoPrevious() {
     this.setState({
       currentImage: this.state.currentImage - 1,
     });
   }
   gotoNext() {
     this.setState({
       currentImage: this.state.currentImage + 1,
     });
   }

	render() {


		return (
      <div>
      <Title>Kumiki Climbing</Title>

      <AboutDesc>
      Kumiki Climbing is a high end climbing wall hold company based in Minneapolis.  </AboutDesc>

<ProjectsDiv>

<Parallax strength={300} bgWidth="100%" bgHeight="300px">
		 <div style={{height: 500, width: 1280}}> </div>
		 <Background className="custom-bg" style={insideStyles2}>
			 <img src={kumikiPages} alt="Bantam Pages" />
		 </Background>
	 </Parallax>
</ProjectsDiv>
<ProjectsDiv>
   <div className="row">

        <div className="col">

        <OverviewText>
        <PortfolioTitle>Overview</PortfolioTitle>
        <PortfolioText>
					For this project I helped them create the entire brand identity, from the logo, to the color scheme, to the brand guidelines and the website. I also did the development of this website using a cuztomized template on the Shopify platform.
        </PortfolioText>
        </OverviewText>
        </div>

				<div className="col-6 col-md-4">
				<a href="https://www.kumikiclimbing.com" target="_blank" rel="noopener noreferrer">


					<Button size="lg">
					Visit the Site
					</Button>
			 </a>
			 </div>
        </div>
        </ProjectsDiv>

<PortfolioDiv>

<ProjectsDiv>
<div className="row">





          </div>
          </ProjectsDiv>
      </PortfolioDiv>



</div>
    );
	}
}

export default Kumiki;
