import {
  FlexBox,
  GlobeIcon,
  InfoDiv,
  LocationIcon,
  StyledA,
  StyledBanner,
  StyledDiv,
  StyledH1,
  StyledImage,
  StyledP,
  StyledSpan,
  StyledTitle,
} from "../../components/StyledComponents";

import { data } from "../../Data";

export const LandingPage = () => {
  return (
    <>
      <StyledBanner>
        <GlobeIcon />
        <StyledTitle>my travel journal.</StyledTitle>
      </StyledBanner>

      {data.map((item, index) => {
        return (
          <StyledDiv key={index}>
            <FlexBox>
              <StyledImage src={item.imageUrl} />

              <InfoDiv>
                <FlexBox>
                  <LocationIcon />
                  <StyledP>{item.location}</StyledP>
                  <StyledA href={item.googleMapsUrl} target="_blank">
                    View on Google Maps
                  </StyledA>
                </FlexBox>

                <StyledH1>{item.title}</StyledH1>
                <StyledSpan>
                  {item.startDate} - {item.endDate}
                </StyledSpan>
                <p>{item.description}</p>
              </InfoDiv>
            </FlexBox>
          </StyledDiv>
        );
      })}
    </>
  );
};
