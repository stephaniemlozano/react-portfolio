import { TypeAnimation } from 'react-type-animation'

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <img
        className='aboutme-img'
        src='https://www.bocacode.com/assets/images/candidates/stephanie-sadowski.jpg'
        alt='stephanie sadowski'
        width={375}
      />
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
        wrapper='p'
        cursor={true}
        repeat={Infinity}
        speed='25'
        style={{ fontSize: '30px', color: '#a5bb49', alignSelf: 'center' }}
      />
      <div className='aboutme-p'>
        <p>
          Hey, I'm Stephanie. Most people call me Steph. I am a wife, a mom, a
          criminal justice and security nerd, and a Software Engineer.
        </p>
        <p>
          I can talk about serial killers and fingerprinting long enough to
          creep most people out. I love anything investigative and thrive when
          given a problem to solve.
        </p>
        <p>
          At work, I am known to be the person people go to with random
          questions even if it doesn't relate to my team. I may not have the
          answer but I will always put the effort in to try and figure it out.
        </p>
        <p>
          I have a can do attitude, enjoy troubleshooting and love building up a
          team through positivity. I may bring a bit of weirdness but I promise
          I will get the job done.
        </p>
        <p>
          Mentorship is important to me. I enjoy having someone invested in my
          personal and professional growth. I also enjoy providing mentorship
          and helping others along their journey.
        </p>
        <p>As long as you're growing you're going in the right direction. 🪴</p>
      </div>
    </div>
  )
}

export default AboutMe
