import { Fade } from '@mui/material'
import '../css/About.css'
import headshot1 from '../assets/headshot_2022.jpg'
import headshot2 from '../assets/headshot2.jpg'
import headshot3 from '../assets/headshot3.jpg'

export default function About() {
    return (
        <Fade in={true}>
            <div className="aboutMe">
                <div id='title'>
                    <h1>About Me</h1>
                </div>
                <div id="blockOne">
                    <img src={headshot1} alt="headshot in front of flowers" />
                    <p>I am a full-stack software engineer currently based in Cleveland, OH. I began my development career in 2020 while living in Seattle, WA when I attended a coding bootcamp at the University of Washington. During the course of the bootcamp, I gained experience in web development technologies including Javascript, MySQL, Node.js, and ReactJS<br />
                    Following my completion of the course, I pursued independent learning in topics such as Java, Data Science, and Python. Eventually, I decided to move back to my hometown, Cleveland, to focus on my career in a place closer to family. Here, I began my current role as a Software Engineer at Revature. In my role at Revature, I gained proficiency in technologies including Java 8, PostgreSQL, Spring Boot, Apache Maven, and Docker.<br/>
                    In addition to my experience in development, I have a bachelor's degree in Neuroscience and have worked as a youth mentor and a project manager.</p>
                </div>
                <div id="blockTwo">
                    <div className="text">
                        <h1>Career Goals and Professional Interests</h1>
                        <p>While the bulk of my professional experience is in development, I also have a strong interest in pursuing research and data analysis. As I have explored more career paths, a number of trajectories have interested me, including pursuing a PhD in Computational Neuroscience.<br/>
                        My research interests include psychiatric disorders, sleep, genetics, endocrinology, and the gut-brain axis.
                        </p>
                    </div>
                    <img src={headshot2} alt="black-and-white headshot with a cat in the background" />
                </div>
                <div id="blockThree">
                    <img src={headshot3} alt="headshot in a restaurant" />
                    <div className="text">
                        <h1>Proficiencies</h1>
                        <p>
                            <span>Languages:</span> Java 8, PostgreSQL, ReactJS, Javascript, Typescript, HTML5, CSS3, Handlebars, MySQL, MongoDB <br />
                            <span>Development Environments:</span> IntelliJ, Visual Studio Code <br />
                            <span>Database Administration:</span> DBeaver, MySQL Workbench, Robo 3T <br />
                            <span>Cloud and DevOps:</span> Github, Docker, AWS RDS, Apache Tomcat, AWS EC2, Jenkins, Heroku <br />
                            <span>Supporting Technologies:</span> Git, Spring Boot, Apache Maven, Node.js, Junit, Mockito, Jest, Bootstrap, Material UI <br />
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}