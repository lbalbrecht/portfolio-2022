import { Card, CardTitle, CardBody, CardText, ListGroup, ListGroupItem, Button } from 'reactstrap'
import "../css/ProjectCard.css"

interface cardProps {
    imgsrc?: string;
    title: string;
    description: string;
    technologies: string;
    url?: string;
}

export default function MPCard({imgsrc = "https://via.placeholder.com/480x270", title, description, technologies, url = "#"}:cardProps) {
    return (
        <Card className="projectCard">
            <img src={imgsrc} alt="Placeholder" />
            <CardBody className="projectCardBody">
                <CardTitle tag="h5">
                    {title}
                </CardTitle>
                <CardText>
                    {description}
                </CardText>
            <ListGroup className="projectCardList">
                <ListGroupItem className="projectCardListItem">
                    {technologies}
                </ListGroupItem>
            </ListGroup>
                <a href={url} target="_blank" rel="noreferrer" id="cardLink">
                    <Button>Check it out</Button>
                </a>
            </CardBody>
        </Card>
    )
}