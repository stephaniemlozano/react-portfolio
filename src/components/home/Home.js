import { Container, Row, Col } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'

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
    'https://img.myloview.es/posters/cactus-and-succulent-in-pot-domestic-colorful-cartoon-vector-illustration-700-303054138.jpg',
  ]

  return (
    <div>
      <h1>Hi, I'm Stephanie!</h1>
      <TypeAnimation
        sequence={[
          'Wife & girl mama.',
          'Software Engineer.',
          'CSS lover',
          'True crime obsessed.',
          'Detail oriented.',
          'Organized.',
          'Problem solver.',
          'Fun coworker.',
          'Solution oriented.',
          'Eager to learn.',
          'Leader.',
          'Always ready to help.',
          () => console.log('Done.'),
        ]}
        wrapper='h1'
        cursor={true}
        repeat={Infinity}
        speed='25'
        style={{ fontSize: '30px', color: '#a5bb49' }}
      />
      <p>
        Like succulents, I flourish in difficult circumstances.
        <br />
        A succulent symbolizes strength and endurance.
        <br />
        It is a reminder that even the most
        <br />
        challenging situation is not the end,
        <br />
        it is just a hurdle to overcome.
      </p>
      <h2 id='projectflip'>Flip a card and check out some of my projects.</h2>
      <Container>
        <Row>
          <Col s={1} md={3} lg={6} className='home-col'>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src={images[0]} alt='succulent' width={250} />
                </div>
                <div className='home-flipback'>
                  <br />
                  <a
                    href='https://tiredmamabookclub-ss.web.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Tired Mama Book Club
                    <img
                      src='https://stephanie-buckette.s3.amazonaws.com/IMG_8264.jpeg'
                      alt='tired mama book club logo'
                      width={200}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src={images[1]} alt='succulent' width={250} />
                </div>
                <div className='home-flipback'>
                  <br />
                  <a
                    href='http://forthekids-ss.s3-website-us-east-1.amazonaws.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    For the Kids
                    <img
                      src='https://forthekids-ss.s3.amazonaws.com/ftk.jpg'
                      alt='for the kids logo'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src={images[3]} alt='succulent' width={250} />
                </div>
                <div className='home-flipback'>
                  <br />
                  <a
                    href='https://web-portfolio-ss.web.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    HTML Portfolio
                    <img
                      src='https://stephanie-buckette.s3.amazonaws.com/HTMLPortfolioSnip'
                      alt='portfolio html screenshot'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src={images[2]} alt='succulent' width={250} />
                </div>
                <div className='home-flipback'>
                  <br />
                  <a
                    href='https://myhobbiesweb-ss.web.app/index.html'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Hobbies HTML Website
                    <img
                      src='https://stephanie-buckette.s3.amazonaws.com/HobbiesHTML'
                      alt='hobbies website screenshot'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src={images[6]} alt='succulent' width={250} />
                </div>
                <div className='home-flipback'>
                  <br />
                  <a
                    href='https://trivia-game-ss.web.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Trivia Game
                    <img src="https://stephanie-buckette.s3.amazonaws.com/trivia.png" alt="trivia game snapshot"  width={250}/>
                  </a>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src={images[5]} alt='succulent' width={250} />
                </div>
                <div className='home-flipback'>
                  <br />
                  <a
                    href='https://grad-countdown-ss.web.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Graduation Countdown
                    <img
                      src='https://grad-countdown-ss.web.app/grad.gif'
                      alt='graduate jumping with confetti'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src={images[6]} alt='succulent' width={250} />
                </div>
                <div className='home-flipback'>
                  <br />
                  <a
                    href='https://trivia-game-ss.web.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Take a look at my GitHub!
                    <img src="https://stephanie-buckette.s3.amazonaws.com/git.png" alt="github profile"/>
                  </a>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src={images[7]} alt='succulent' width={250} />
                </div>
                <div className='home-flipback'>
                  <h2>Check out my resume!</h2>
                  <a
                    href='https://stephanie-buckette.s3.amazonaws.com/resume2.png'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='https://stephanie-buckette.s3.amazonaws.com/resume2.png'
                      alt='resume'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='home-card'>
              <div className='home-innercard'>
                <div className='home-flipfront'>
                  <img src={images[8]} alt='succulent' width={250} />
                </div>
                <div className='home-flipback'>
                  <h2>Let's Connect on LinkedIn!</h2>
                  <img
                    src='https://media.licdn.com/dms/image/C4E03AQElIPCAuB9_wA/profile-displayphoto-shrink_800_800/0/1654572800559?e=1682553600&v=beta&t=bQoFaRe8UAW9niBSOxSxbTId7Yx3TWb9a9cRFj6nejY'
                    alt='stephanie sadowski'
                    className='contact-img'
                  />
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
