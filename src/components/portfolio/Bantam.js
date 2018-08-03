import React, { Component } from 'react';
import bantamHome from '../../images/bantam-home.jpg';
import bantamPages from '../../images/Isometric-Web-Mockup.jpg';
import { PortfolioDiv, OverviewImg, OverviewText, ProjectsDiv } from '../../theme/Grid';
import  { PortfolioTitle, PortfolioText, Title, AboutDesc } from '../../theme/Type';
import devIcon from '../../images/Bantam-Media-Template.png';
import { Button } from 'mdbreact';

import { Parallax, Background } from 'react-parallax';
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-75%,-50%)'};
const insideStyles2 = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(50%,50%)'};


class Bantam extends Component {

	render() {
		return (
      <div>
      <Title>BANTAM BAGELS</Title>

      <AboutDesc>
      In conjuction with NYC based design agency Strong Studio our development team
launched the redesigned online storefront for Bantam Bagels. </AboutDesc>

<PortfolioDiv>
<ProjectsDiv>

<img src={bantamHome} className="bannerImg" alt="Bantam Home"/>
   </ProjectsDiv><ProjectsDiv>
   <div className="row alignCenter">
   <div className="col">

        <OverviewImg>
        <img src={devIcon} className="servicesImg" alt="Psych Media"/>

        </OverviewImg>
        </div>
        <div className="col">

        <OverviewText>
        <PortfolioTitle>Overview</PortfolioTitle>
        <PortfolioText>
				Psych Media developed an E-Commerce online store for Bantam Bagels to sell their products. The
				store was developed on the Shopify platform with a highly customized template. We added
				additional functionality with private apps and worked directly with a fulfillment center to allow for
				seamless integration of their ordering process.
				        </PortfolioText>
        </OverviewText>
				<a href="https://www.bantambagels.com" target="_blank" rel="noopener noreferrer">
					<Button size="lg" gradient="blue">
					Visit the Site
					</Button>
			 </a>
        </div>
        </div>
        </ProjectsDiv><ProjectsDiv>

        <Parallax strength={300} bgWidth="100%" bgHeight="300px">
             <div style={{height: 500, width: 1280}}> </div>
             <Background className="custom-bg" style={insideStyles2}>
               <img src={bantamPages} alt="Bantam Pages" />
             </Background>
           </Parallax>
</ProjectsDiv>

      </PortfolioDiv>
</div>
    );
	}
}

export default Bantam;
