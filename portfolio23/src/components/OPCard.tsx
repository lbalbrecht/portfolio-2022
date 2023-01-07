import { Card, CardTitle, CardBody, CardText, ListGroup, ListGroupItem, Button, CardFooter, CardLink } from 'reactstrap'
import "../css/ProjectCard.css"

interface cardProps {
    imgsrc?: string;
    title: string;
    description: string;
    technologies: string;
    url: string;
    isUpdated: boolean;
    updatedApp?: string;
}

export default function OPCard({ imgsrc = "https://via.placeholder.com/480x270", title, description, technologies, url, isUpdated, updatedApp = "#" }: cardProps) {
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
                <a href={url} target="_blank" rel="noreferrer">
                    <Button>Check it out</Button>
                </a>
            </CardBody>
            <CardFooter className="projectCardFooter">
                {isUpdated ? <p>This app has been updated and is available <CardLink href={updatedApp} target="_blank" rel="noreferrer" style={{color: "rgb(232, 230, 227)"}}>here</CardLink></p> : <p>This app will be updated soon</p>}
            </CardFooter>
        </Card>
    )
}