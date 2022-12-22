import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <h1 className='home-animation'>Hi, I'm Stephanie.</h1>
      <p>Like succulents, I flourish in difficult circumstances.</p>
      <p>A succulent symbolizes strength and endurance. It is a reminder that even the most challenging situation is not the end, it is just a hurdle to overcome.</p>
      <p>Flip a card and check out some of my projects. They weren't all easy but in the end they were rewarding to get completed.</p>
      <Container>
        <Row>
          <Col s={1} md={3} lg={6} className='home-col'>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src="https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-400-334537205.jpg" alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>test</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src="https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-700-285987328.jpg" alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>test</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjX7FPC6ERWCqEvCrzIUwOuQoxVU2qcxjScmd56hk12Of3iTCf52GBnCiUCNjK-EXupE&usqp=CAU" alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>test</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src="https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-700-205074950.jpg" alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>test</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src="https://img.myloview.es/fotomurales/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-700-248091514.jpg" alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>test</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src="https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-400-229916970.jpg" alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>test</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src="https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-400-220276837.jpg" alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>test</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src="https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-700-242150594.jpg" alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>test</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src="https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-700-303054138.jpg" alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>test</h2>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home