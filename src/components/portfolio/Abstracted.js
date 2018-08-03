import React, { Component } from 'react';
import bantamHome from '../../images/bantam-home.png';
import abPages from '../../images/abstracted/abstractedweb.png';
import { PortfolioDiv, OverviewImg, OverviewText, ProjectsDiv } from '../../theme/Grid';
import  { PortfolioTitle, PortfolioText, Title, AboutDesc } from '../../theme/Type';
import devIcon from '../../images/Bantam-Media-Template.png';
import { Button } from 'mdbreact';

import ec1 from '../../images/abstracted/portfolio-17.jpg';
import ec2 from '../../images/abstracted/portfolio-18.jpg';
import ec3 from '../../images/abstracted/portfolio-19.jpg';
import ec4 from '../../images/abstracted/Untitled-2.jpg';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { Parallax, Background } from 'react-parallax';
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-75%,-50%)'};
const insideStyles2 = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(50%,50%)'};

const images = [
	{ src: ec1},
  { src: ec2},
	{ src: ec3},
	{ src: ec4}
];
class Abstracted extends Component {
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

					<Title>The Abstracted Gallery</Title>

					<AboutDesc>
					The Abstracted Art Gallery is a bold and daring community based studio/gallery in the heart of the Northeast Arts District of Minneapolis, Minnesota. The innovative collective features exhibits from emerging, mid-career, and established artists of all varieties, from local to worldwide.  </AboutDesc>
					<ProjectsDiv>

			<Parallax strength={300} bgWidth="100%" bgHeight="300px">
			 <div style={{height: 500, width: 1280}}> </div>
			 <Background className="custom-bg" style={insideStyles2}>
				 <img src={abPages} alt="Bantam Pages" />
			 </Background>
			</Parallax>
			</ProjectsDiv>
			<ProjectsDiv>
			<div className="row">

					<div className="col">

					<OverviewText>
					<PortfolioTitle>Overview</PortfolioTitle>
					<PortfolioText>
						I created the entire brand identity for The Abstracted Gallery, from logos, business cards, flyers, the website, email and online promotions, to curating the physical spaces branding and image. I also created a marketing plan and brand guidelines for the gallery.
					</PortfolioText>
					</OverviewText>
					</div>


					</div>
					</ProjectsDiv>

			<PortfolioDiv>

			<ProjectsDiv>
			<div className="row">





						</div>
						</ProjectsDiv>
				</PortfolioDiv>
        <Gallery photos={images} onClick={this.openLightbox} />
        <Lightbox images={images}
        	onClose={this.closeLightbox}
        	onClickPrev={this.gotoPrevious}
        	onClickNext={this.gotoNext}
        	currentImage={this.state.currentImage}
        	isOpen={this.state.lightboxIsOpen}
        />


			</div>
			);
			}
			}



export default Abstracted;
