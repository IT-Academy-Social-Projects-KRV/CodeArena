import React from 'react';
import { Component } from 'react';
import { Card, Button} from 'react-bootstrap';

class LeftBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { card } = this.props
        return (
            <Card bg="light" style={{ width: '37rem' }} border="light" >
                <Card.Body style={{ height: 'auto' }}>
                    <Card.Text className="text-start " >
                        <h5> Recomend level: {card.level}</h5>
                        <div>{card.discription} </div>
                        <div className="d-grid gap-2" >
                            <Button style={{ width: 'auto' }} size="sm" className="my-3" href="/info_vacancy"> See info </Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default LeftBlock