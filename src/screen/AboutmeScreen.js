import React from 'react'

const AboutmeScreen = () => {
    return (
        <div>
            <h1 className="about_title">About Me</h1>
            <img class= "about_img" src="./Assets/mypic.jpeg" alt="My Picture" Align="top"/>
            <p>
              Xiaoxuan (Alice) Wu </p>
              <p> Email: alice.wu216@gmail.com</p>
              <p>Phone: (714)-8038522
            </p>
            <p>My Github page: 
            </p>
            <a href="https://github.com/Alicewu216">https://github.com/Alicewu216</a>
            <p>My LinkedIn page: </p>
            <a href="https://www.linkedin.com/in/xiaoxuan-alice-wu-02161998/">https://www.linkedin.com/in/xiaoxuan-alice-wu-02161998/</a>
            <a href="./Assets/Xiaoxuan Alice Wu Web Develop Resume.pdf" download>
              <button type="button" class="btn btn-outline-secondary btn-block">View my Resume</button>
            </a>
        </div>
    )
}

export default AboutmeScreen
