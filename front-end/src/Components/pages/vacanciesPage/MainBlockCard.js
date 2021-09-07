import { Component } from 'react';
import { Card, Row, CardGroup, } from 'react-bootstrap';
import HeaderBlock from './HeaderBlock';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

class MainBlockCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parametrs: [
                {                   
                    name_vacancy: "C++ QT Senior Developer",
                    name_company: "Name of company",
                    level: "Middle",
                    discription: "This vacancy for...",
                    src:"data:image/png;base64,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"
                   },
                   {                   
                    name_vacancy: "C++ QT Senior Developer",
                    name_company: "Name of company",
                    level: "Middle",
                    discription: "This vacancy for...",
                    src:"data:image/png;base64,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"
                   },
                   {                   
                    name_vacancy: "C++ QT Senior Developer",
                    name_company: "Name of company",
                    level: "Middle",
                    discription: "This vacancy for...",
                    src:"data:image/png;base64,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"
                   },
            ]
        }
    }
    render() {
        const { parametrs } = this.state
        return (
            <>
                {parametrs.map(card => {
                    return (
                        <Card className="m-4" border="success">
                            <HeaderBlock card={card} />
                            <CardGroup>
                                <div className="ms-3">
                                    <Row >
                                        <LeftBlock card={card} />
                                        <RightBlock card={card} />
                                    </Row>
                                </div>
                            </CardGroup>
                        </Card>
                    );
                })}
            </>
        )
    }
}

export default MainBlockCard
