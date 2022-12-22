import { Container, Row, Col } from 'react-bootstrap'

const AboutMe = () => {
  return (
    <div>
      <Container>
        <Row xs={1} md={4} lg={6}>
            <h1>About Me</h1>
          <Col className='aboutme-col'>
            <img src='https://www.bocacode.com/assets/images/candidates/stephanie-sadowski.jpg' alt='stephanie sadowski' width={375}/>
            <p>
              Hey, I'm Stephanie. Most people call me Steph. I am a wife, a mom,
              a criminal justice and security nerd, and a Software
              Engineer. I can talk about serial killers and fingerprinting long
              enough to creep most people out. I love anything investigative and
              thrive when given a problem to solve. 
              <br />
              At work, I am known to be the person people go to with random
              questions even if it doesn't relate to my team. I may not have
              the answer but I will always put the effort in to try and figure
              it out. I have a can do attitude, enjoy troubleshooting and love
              building up a team through positivity. I may bring a bit of
              weirdness but I promise I will get the job done.
              <br />
              Mentorship is important to me. I enjoy having someone invested in my personal/professional growth. I also enjoy providing mentorship and helping others along their journey. 
              <br />
              As long as you're growing you're going in the right direction. 🪴
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe
