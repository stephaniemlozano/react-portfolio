
const Contact = () => {
  return (
    <div className="contact-page">
      <h1>How to find me?</h1>
      <img src="https://media.licdn.com/dms/image/C4E03AQElIPCAuB9_wA/profile-displayphoto-shrink_800_800/0/1654572800559?e=1682553600&v=beta&t=bQoFaRe8UAW9niBSOxSxbTId7Yx3TWb9a9cRFj6nejY" alt="stephanie sadowski" width={200} className='contact-img' />
      <br />
      <button>
        <a href="https://github.com/stephaniemlozano" target='_blank' rel="noopener noreferrer">Github</a>
      </button>
      <br />
      <button>
        <a href="https://www.linkedin.com/in/stephanie-sadowski1/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
      </button>
      <button>
        <a href="mailto:stephaniemlozano@gmail.com">Email</a>
      </button>
    </div>
  )
}

export default Contact