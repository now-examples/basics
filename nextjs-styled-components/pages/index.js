import styled from "styled-components";

const Headline = styled.h1`
  font-size: 38px;
  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

const SubTitle = styled.h2`
  font-weight: normal;
  margin-bottom: 50px;
`;

const Section = styled.section`
  padding: 20px;
  margin: 0 auto;
  max-width: 608px;
`;

export default () => (
  <main>
    <Section>
      <Headline>Next.js with styled-components</Headline>
      <SubTitle>
        An example of how to Next.js with styled-components and deploy to Now
        v2.
      </SubTitle>
    </Section>
  </main>
);
