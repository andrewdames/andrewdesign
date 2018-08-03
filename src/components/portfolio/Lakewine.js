import React, { Component } from 'react';
import bantamHome from '../../images/bantam-home.png';
import lwsCover from '../../images/lwsmenu/cover.jpg';
import { PortfolioDiv, OverviewImg, OverviewText, ProjectsDiv } from '../../theme/Grid';
import  { PortfolioTitle, PortfolioText, Title, AboutDesc } from '../../theme/Type';
import devIcon from '../../images/Bantam-Media-Template.png';
import { Button, Col, Row } from 'mdbreact';
import { Parallax, Background } from 'react-parallax';
import ec1 from '../../images/lwsmenu/inside.jpg';
import ec2 from '../../images/lwsmenu/insideCover.jpg';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


//require ('/node_modules/mdbreact/docs/pages/pro/Lightbox.css');

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-75%,-50%)'};
const insideStyles2 = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(50%,50%)'};


const images = [
	{ src: ec1},
  { src: ec2},

];

class Lakewine extends Component {
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
      <Title>Lake Wine & Spirits</Title>

      <AboutDesc>
Lake Wine & Spirits is a boutique wine and cheese shop located in Minneapolis.
       </AboutDesc>

<ProjectsDiv>

<Parallax strength={300} bgWidth="100%" bgHeight="300px">
		 <div style={{height: 500, width: 1280}}> </div>
		 <Background className="custom-bg" style={insideStyles2}>
			 <img src={lwsCover} alt="Bantam Pages" />
		 </Background>
	 </Parallax>
</ProjectsDiv>
<ProjectsDiv>
   <div className="row">

        <div className="col">

        <OverviewText>
        <PortfolioTitle>Overview</PortfolioTitle>
        <PortfolioText>
        This project was a redesign of the Lake Wine & Spirits cheese shop menu. We chose a high quality paper (Speckletone Kraft stock from French Paper Co.) to reflect the butcher paper used to wrap sandwiches. The hand drawn looking font used for the titles reflects hand drawn chalkboard menu at the store.
        </PortfolioText>
        </OverviewText>
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

export default Lakewine;
