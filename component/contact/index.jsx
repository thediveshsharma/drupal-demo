import React from 'react'

function Contact() {
  return (
    <div>
         <div className="mainContainer">
        <div class="mainContainer">
          <img src="/bannerlog.jpg" className="w-100" alt="Snow" />
          <div class="centered">
            <h1 className="heading">Blog</h1>
            <p className="para"></p>
          </div>
        </div>
      </div>
      <div className="card mt-3 p-3">
        <div class="card-body">
          <p class="card-text">
            My name is Tomasz Nieżurawski but I often use a shorter version of
            my name - Tomek. I found it easier to pronounce for my coworkers.
            Although, I’m always impressed by people that can say polish „sz”
            digram. It may not be easy to say. I’m a 34 years old front-end
            developer from Poznań, Poland. My country is very lovely, considered
            as cheap and very safe. I encourage you to visit Poland. You’ll find
            something for yourself for sure. We can even grab a beer together if
            you happen to visit Poznań. Currently, I work for Phorest Salon
            Software as a Principal Engineer. Greetings to my Irish friends!
            Awesome people.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact