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

class Everlast extends Component {
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
      <Title>Everlast Climbing</Title>

      <AboutDesc>
      Everlast Climing makes climbing walls, along with our hand holds, mats, safety features, curriculum and accessories targeted towards educational institutions.</AboutDesc>

<ProjectsDiv>

<Parallax strength={300} bgWidth="100%" bgHeight="300px">
		 <div style={{height: 500, width: 1280}}> </div>
		 <Background className="custom-bg" style={insideStyles2}>
			 <img src={everlastPages} alt="Bantam Pages" />
		 </Background>
	 </Parallax>
</ProjectsDiv>
<ProjectsDiv>
   <div className="row">

        <div className="col">

        <OverviewText>
        <PortfolioTitle>Overview</PortfolioTitle>
        <PortfolioText>
Working in-house for Everlast Climbing allowed me to continue carving out an identity for the brand. I worked on a wide variety of projects including catalog and collateral design, web design, SEO work and art directing photo shoots. When I started at the company, they already had a branding style guide, however a lot of the materials were outdated. I was able to take aspects of the style they had been building and refine it into a consistent and clear identity. Some of the major projects I worked on were the 2014-2015 and the 2015-2016 catalogs, designing brochures for new product lines, and updating trade show displays. I also redesigned and developed the website with the focus of imporving it&#x27;s UX/UI.

        </PortfolioText>
        </OverviewText>
        </div>

				<div className="col-6 col-md-4">
				<a href="https://www.everlastclimbing.com" target="_blank" rel="noopener noreferrer">


					<Button size="lg">
					Visit the Site
					</Button>
			 </a>
			 </div>
        </div>
        </ProjectsDiv>
<Gallery photos={images} onClick={this.openLightbox} />
<Lightbox images={images}
	onClose={this.closeLightbox}
	onClickPrev={this.gotoPrevious}
	onClickNext={this.gotoNext}
	currentImage={this.state.currentImage}
	isOpen={this.state.lightboxIsOpen}
/>
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

export default Everlast;
