import React, { Component } from 'react';
import bantamHome from '../../images/bantam-home.png';
import everlastPages from '../../images/Webpages-Everlast.jpg';
import { PortfolioDiv, OverviewImg, OverviewText, ProjectsDiv } from '../../theme/Grid';
import  { PortfolioTitle, PortfolioText, Title, AboutDesc } from '../../theme/Type';
import devIcon from '../../images/Bantam-Media-Template.png';
import { Button, Col, Row } from 'mdbreact';
import { Parallax, Background } from 'react-parallax';
import ec1 from '../../images/BTR/labelsOnProduct.jpg';
import ec2 from '../../images/BTR/LAbels.jpg';
import ec3 from '../../images/BTR/csa-dayAd2.jpg';
import ec4 from '../../images/BTR/IMG_3506.png';
import ec5 from '../../images/BTR/IMG_3531.png';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


//require ('/node_modules/mdbreact/docs/pages/pro/Lightbox.css');

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-75%,-50%)'};
const insideStyles2 = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(50%,50%)'};


const images = [
	{ src: ec2},
  { src: ec3},
  { src: ec4},
  { src: ec5}
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
      <Title>BACK TO ROOTS</Title>

      <AboutDesc>
Back to Roots Urban Farm was a farm which I was a co-founder of in Downtown Minneapolis. We grew food for the community, helped out with schoolyard gardens and had garden workshops for 5 years.
      </AboutDesc>

<ProjectsDiv>

<Parallax strength={300} bgWidth="100%" bgHeight="300px">
		 <div style={{height: 500, width: 1280}}> </div>
		 <Background className="custom-bg" style={insideStyles2}>
			 <img src={ec1} alt="Bantam Pages" />
		 </Background>
	 </Parallax>
</ProjectsDiv>
<ProjectsDiv>
   <div className="row">

        <div className="col">

        <OverviewText>
        <PortfolioTitle>Overview</PortfolioTitle>
        <PortfolioText>
I designed, created and managed the website for Back to Roots as well as designing and producing the logo and labels for the prepared good we made. I also managed the created marketing campaigns to sell the CSA shares.
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

export default Everlast;
