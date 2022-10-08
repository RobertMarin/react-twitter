
import Card from 'react-bootstrap/Card';

export default function Post(props) {
    return <div class="mt-4">
        <Card>
            <Card.Title>
                <div class="d-inline-block">
                    <img src={props.avatar} />
                </div>
                <div class="d-inline-block">
                    <div class="p-2">{props.title}</div>
                </div>
                <div>{props.email}</div>
            </Card.Title>
            <hr></hr>
            <Card.Body>
                <div>Posted: {props.date}</div>
                <div>{props.user}</div>
                <div>{props.body}</div>
            </Card.Body>
        </Card>
    </div>
}