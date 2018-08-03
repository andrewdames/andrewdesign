import React, { Component } from 'react';
import bantamHome from '../../images/bantam-home.png';
import conPages from '../../images/Isometric-Web-Mockup-Con.jpg';
import { PortfolioDiv, OverviewImg, OverviewText, ProjectsDiv } from '../../theme/Grid';
import  { PortfolioTitle, PortfolioText, Title, AboutDesc } from '../../theme/Type';
import devIcon from '../../images/Bantam-Media-Template.png';
import { Button } from 'mdbreact';

import { Parallax, Background } from 'react-parallax';
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-75%,-50%)'};
const insideStyles2 = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(50%,50%)'};

class Concentric extends Component {




	render() {
		return (
				<div>

					<Title>Concentric Ag</Title>

					<AboutDesc>
					Concentric Ag is an international company which produces quality biological soil ammendments for agricultural use.  </AboutDesc>
					<ProjectsDiv>

			<Parallax strength={300} bgWidth="100%" bgHeight="300px">
			 <div style={{height: 500, width: 1280}}> </div>
			 <Background className="custom-bg" style={insideStyles2}>
				 <img src={conPages} alt="Bantam Pages" />
			 </Background>
			</Parallax>
			</ProjectsDiv>
			<ProjectsDiv>
			<div className="row">

					<div className="col">

					<OverviewText>
					<PortfolioTitle>Overview</PortfolioTitle>
					<PortfolioText>
						For this project I worked with a design team and played the role of lead developer of the website. We used Wordpress as a content management system and build a custom template on top of their framework for the front end of the site.
					</PortfolioText>
					</OverviewText>
					</div>

					<div className="col-6 col-md-4">
					<a href="https://www.concentricag.com" target="_blank" rel="noopener noreferrer">


						<Button size="lg" gradient="blue">
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



export default Concentric;
