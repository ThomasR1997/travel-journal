import styled from "styled-components";
import { ImEarth, ImLocation } from "react-icons/im";

// Styling for title div
export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f55a5a;
  height: 4em;
  width: auto;
`;

export const GlobeIcon = styled(ImEarth)`
  height: 24px;
  width: 24px;
  margin: 10px;
  color: white;
`;

export const StyledTitle = styled.p`
  color: white;
  font-size: 24px;
`;

// Margin for responsive design
export const StyledDiv = styled.div`
  margin: 5% 20%;

  @media only screen and (max-width: 905px) {
    margin: 5% 10%;
  }

  @media only screen and (max-width: 680px) {
    margin: 2.5% 5%;
  }

  @media only screen and (max-width: 600px) {
    margin: 0.5em;
  }
`;

// Flex for placement
export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    margin: 5px auto;
  }
`;

// Styling for image
export const StyledImage = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 5px;
  margin-right: 25px;

  @media only screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;

// Flex for placement
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const LocationIcon = styled(ImLocation)`
  height: 20px;
  width: 20px;
  color: #f55a5a;
  margin-right: 5px;
`;

export const StyledP = styled.p`
  font-size: 18px;
  letter-spacing: 3px;
`;

export const StyledA = styled.a`
  color: #918e9b;
  margin-left: 15px;
`;

export const StyledH1 = styled.h1`
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;
