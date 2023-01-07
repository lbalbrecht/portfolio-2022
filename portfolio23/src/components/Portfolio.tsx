import { Fade } from '@mui/material'
import { Row, Col } from 'reactstrap'
import '../css/Portfolio.css'
import MPCard from "./MPCard"
import OPCard from "./OPCard"

export default function Portfolio() {
    return (
        <Fade in={true}>
            <div className="portfolioPage">
                <h1>Java/React Web-Apps</h1>
                <h2>A selection of web applications I have developed or supported in developing</h2>
                <Row>
                    <Col lg="6" sm="12">
                        <MPCard title={ "Social Media Site" } description={ "A social media site that implements a tagging system" } technologies = { "Java 8, PostgreSQL, Spring Boot, ReactJS"}/>
                    </Col>
                    <Col lg="6" sm="12">
                        <MPCard title={ "Social Media Site" } description={ "A social media site that implements a tagging system" } technologies = { "Java 8, PostgreSQL, Spring Boot, ReactJS"}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" sm="12">
                        <MPCard title={ "Social Media Site" } description={ "A social media site that implements a tagging system" } technologies = { "Java 8, PostgreSQL, Spring Boot, ReactJS"}/>
                    </Col>
                    <Col lg="6" sm="12">
                        <MPCard title={ "Social Media Site" } description={ "A social media site that implements a tagging system" } technologies = { "Java 8, PostgreSQL, Spring Boot, ReactJS"}/>
                    </Col>
                </Row>
                <h1 className="projectSection2">Bootcamp projects</h1>
                <h2>A selection of early projects to demonstrate my progress as a developer</h2>
                <Row>
                    <Col lg="6" sm="12">
                        <OPCard title={ "Weather App" } description={ "A weather app utilizing JQuery" } technologies = { "HTML, CSS, Javascript, JQuery"} url = {"https://lbalbrecht.github.io/lba-weather-dashboard/"} isUpdated = {true}/>
                    </Col>
                    <Col lg="6" sm="12">
                        <OPCard title={ "Weather App" } description={ "A weather app utilizing JQuery" } technologies = { "HTML, CSS, Javascript, JQuery"} url = {"https://lbalbrecht.github.io/lba-weather-dashboard/"} isUpdated = {false}/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" sm="12">
                        <OPCard title={ "Weather App" } description={ "A weather app utilizing JQuery" } technologies = { "HTML, CSS, Javascript, JQuery"} url = {"https://lbalbrecht.github.io/lba-weather-dashboard/"} isUpdated = {false}/>
                    </Col>
                    <Col lg="6" sm="12">
                        <OPCard title={ "Weather App" } description={ "A weather app utilizing JQuery" } technologies = { "HTML, CSS, Javascript, JQuery"} url = {"https://lbalbrecht.github.io/lba-weather-dashboard/"} isUpdated = {true}/>
                    </Col>
                </Row>
            </div>
        </Fade>
    )
}