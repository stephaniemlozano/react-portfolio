import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <h1>Hi, I'm Stephanie.</h1>
      <p>Like succulents, I flourish in difficult circumstances.</p>
      <p>A succulent symbolizes strength and endurance. It is a reminder that even the most challenging situation is not the end, it is just a hurdle to overcome.</p>
      <Container>
        <Row>
          <Col s={1} md={3} lg={6} className='home-col'>
            <img src="https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg" alt="succulent" width={250}/>
            <img src="https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg" alt="succulent" width={250}/>
            <img src="https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg" alt="succulent" width={250}/>
            
            <img src="https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg" alt="succulent" width={250}/>
            <img src="https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg" alt="succulent" width={250}/>
            <img src="https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg" alt="succulent" width={250}/>
      
            <img src="https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg" alt="succulent" width={250}/>
            <img src="https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg" alt="succulent" width={250}/>
            <img src="https://images.pexels.com/photos/6079526/pexels-photo-6079526.jpeg" alt="succulent" width={250}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home