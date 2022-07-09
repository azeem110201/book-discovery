import styled from "@emotion/styled";
import React from "react";
import GirlImage from "ui-bookdiscoveryv2-42/dist/IllustrationGirlWriting";
import Para from 'ui-bookdiscoveryv2-42/dist/BodyStartJourney';

const Container = styled("div")({
  width: "100%",
  height: "100%",
});


const MainContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  top: "186px",
  gap: "16px",
})

const TextContentContainer = styled("div")({
  width: "433px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
})

const index = () => {

  return (
    <Container>
      <MainContentContainer>
        <GirlImage />
      <TextContentContainer>
        <Para />
      </TextContentContainer>
      </MainContentContainer>
    </Container>
  );
};

export default index;