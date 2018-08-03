import React, { Component } from 'react';
import Homedesc from './home-desc';
import Homeform from './home-form';
import ReactPlayer from 'react-player'
import { HomeContainer, PortfolioDiv, PortfolioItem } from '../theme/Grid';
import  { Title, Subtitle, AboutDesc } from '../theme/Type';
import VideoPlayer from 'react-simple-video-player';
import psychBanner from '../images/psych-banner.gif';
import psychVideo from '../images/psych-banner.mp4';
import KumikiSq from '../images/KumikiSq.jpg';
import ConcentricSq from '../images/ConcentricSq.jpg';
import EverlastSq from '../images/EverlastSq.jpg';
import BantamSq from '../images/BantamSq.jpg';
import LakeSq from '../images/LakeSq.jpg';
import QuarterSq from '../images/QuarterSq.jpg';
import BTRSq from '../images/BTRSq.jpg';
import { Link } from 'react-router-dom';



class Home extends Component {
	render() {
		return (
      <HomeContainer>

						<Title>About Me</Title>

				<AboutDesc>
				Graphic Designer and Web Developer with 7+ years of Design, Development and Marketing experience working in-house and for agencies. When Andrew is not working behind a computer he enjoys gardening, urban farming and cooking. During the summer he also works with youth to teach them about gardening in urban environments.

				</AboutDesc>

				<Title>Portfolio</Title>

				<PortfolioDiv>

					<PortfolioItem>
					<div className="container">
					 <Link to="/portfolio/everlast" className="portfolioLink">
					  <img src={EverlastSq} alt='Everlast Climbing' className="portfolioImg" />
					  <div className="overlay">
					    <div className="text">Everlast Climbing</div>
					  </div>
					 </Link>
					 </div>
					</PortfolioItem>

					<PortfolioItem>
					<div className="container">
					 <Link to="/portfolio/lakewine" className="portfolioLink">
						<img src={LakeSq} alt='Lake Wine Spirits' className="portfolioImg" />
						<div className="overlay">
							<div className="text">Lake Wine & Spirits</div>
						</div>
					 </Link>
					 </div>
					</PortfolioItem>

					<PortfolioItem>
					<div className="container">
					 <Link to="/portfolio/kumiki" className="portfolioLink">
						<img src={KumikiSq} alt='Kumiki Climbing' className="portfolioImg" />
						<div className="overlay">
							<div className="text">Kumiki Climbing</div>
						</div>
					 </Link>
					 </div>
					</PortfolioItem>

					<PortfolioItem>
					<div className="container">
					 <Link to="/portfolio/bantam" className="portfolioLink">
					  <img src={BantamSq} alt='Bantam Bagels' className="portfolioImg" />
					  <div className="overlay">
					    <div className="text">Bantam Bagels</div>
					  </div>
					 </Link>
					 </div>
					</PortfolioItem>

					<PortfolioItem>
					<div className="container">
					 <Link to="/portfolio/concentric" className="portfolioLink">
					  <img src={ConcentricSq} alt='Concentric' className="portfolioImg" />
					  <div className="overlay">
					    <div className="text">Concentric</div>
					  </div>
					 </Link>
					 </div>
					</PortfolioItem>

					<PortfolioItem>
					<div className="container">
					 <Link to="/portfolio/backtoroots" className="portfolioLink">
						<img src={BTRSq} alt='Back to Roots' className="portfolioImg" />
						<div className="overlay">
							<div className="text">Back to Roots</div>
						</div>
					 </Link>
					 </div>
					</PortfolioItem>

				</PortfolioDiv>

				<Title>Skills & Expertise</Title>
<br/>
				<div className="row">
					<div className="col">
					<Subtitle>Design</Subtitle>
						<ul>
							<li>Print Design</li>
							<li>Web Design</li>
							<li>Marketing Collateral</li>
							<li>UX/UI</li>
							<li>Brand Identity</li>
						</ul>
					</div>
					<div className="col">
					<Subtitle>Web & Interactive</Subtitle>
						<ul>
							<li>HTML, CSS, PHP, JS Frameworks, MySQL</li>
							<li>E-Commerce</li>
							<li>Popular and Custom CMS Development</li>
							<li>App Development</li>
							<li>SEO and AdWords</li>
						</ul>
					</div>
					<div className="col">
					<Subtitle>Tools</Subtitle>
					<ul>
						<li>Adobe Creative Suite</li>
						<li>PowerPoint and Keynote</li>
						<li>Google, Moz and Conductor Analytics</li>
						<li>MailChimp and Email Marketing</li>
						<li>Hootsuite and Zapier</li>
					</ul>
					</div>
				</div>



      </HomeContainer>
    );
  }
}

export default Home;
