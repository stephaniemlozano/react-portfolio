import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  const images = [
    'https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-400-334537205.jpg',
    'https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-700-285987328.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjX7FPC6ERWCqEvCrzIUwOuQoxVU2qcxjScmd56hk12Of3iTCf52GBnCiUCNjK-EXupE&usqp=CAU',
    'https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-700-205074950.jpg',
    'https://img.myloview.es/fotomurales/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-700-248091514.jpg',
    'https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-400-229916970.jpg',
    'https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-400-220276837.jpg',
    'https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-decorative-flower-plant-isolated-icon-cacti-700-242150594.jpg',
    'https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-700-303054138.jpg'
  ]

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
                  <img src={images[0]} alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>More to come...</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src={images[1]} alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>More to come...</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src={images[2]} alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>More to come...</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src={images[3]} alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>More to come...</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src={images[4]} alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>More to come...</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src={images[5]} alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>More to come...</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src={images[6]} alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>More to come...</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src={images[7]} alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>More to come...</h2>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                <img src={images[8]} alt="succulent" width={250}/>
                </div>
                <div className='home-flipback'>
                  <br />
                  <h2>More to come...</h2>
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