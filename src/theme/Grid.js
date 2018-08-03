import styled from 'styled-components';



export const ProjectDiv = styled.div`
    width:100%;
`;

export const ContactDiv = styled.div`
    width:100%;
`;

export const ContactForm = styled.div`
    width:100%;
`;

export const AboutDiv = styled.div`
    width:33%;
    padding: 1.5em 1.5em 0;
    @media (max-width: 1024px) {
        width:50%;
        padding: 1.5em;
    }
    @media (max-width: 620px) {
        width:100%;
    }
    `;

export const ServicesDiv = styled.div`
    width:100%;
    padding: 0, 1.5em, 1.5em, 1.5em;
`;

export const FullWrapper = styled.div`
    width:100%;
`;

export const ProcessDiv = styled.div`
    margin: 0 auto;
    width:100%;
    display:flex;
    max-width:1280px;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const PageContent = styled.div`
    margin: 0 auto;
    width:100%;
    padding-top:250px;
    max-width:1280px;
`;

export const HomeContainer = styled.div`
    margin: 0 auto;
    width:100%;
    max-width:1280px;
`;

export const PortfolioItem = styled.div`
    width:33%;
    padding: 1.5em 0 0;
      @media (max-width: 1024px) {
          width:50%;
      }
      @media (max-width: 620px) {
          width:100%;
      }
`;

export const PortfolioDiv = styled.div`
margin: 0 auto;
width:100%;
max-width:1280px;
display:flex;
flex-wrap:wrap;
padding-bottom:50px;
`;

export const ProjectsDiv = styled.div`
margin: 15px 0;
`;

export const OverviewImg = styled.div`
    width:100%;
    padding: 1.5em 0 0;
`;

export const OverviewText = styled.div`
    width:100%;
    padding: 1.5em 0 0;
`;
