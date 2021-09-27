import axios from 'axios';
import { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import TaskCard from "./TaskCard";
import "./taskmanagingpage.css";


class TaskManagingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    async getTasks() {
        const response = await axios.get('/task/get_task/');
        return response.data;
    }

    async componentDidMount() {
        this.getTasks().then(response => {
            this.setState({ tasks: response });
        });
    }

    render() {
        const { tasks } = this.state;git
        return (
            <>
                <div className='MainWrapper'>
                    <div className="FieldHeader">
                        <div className="TaskShortInfoName InLine">
                            Name
                        </div>
                        <div className="TaskShortInfoAuthor InLine">
                            Author
                        </div>
                        <div className="TaskShortInfoRate InLine">
                            Rate
                        </div>
                        <div className="TaskShortInfoLevel InLine">
                            Level
                        </div>
                        <div className="TaskShortInfoStatus InLine">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"><div className="TooltipText">"DR" - Draft<br /> "PB" - Published</div></Tooltip>}>
                                <span className="d-inline-block">
                                    Status
                                </span>
                            </OverlayTrigger>
                        </div>
                        <div className="TaskShortInfoCreated InLine">
                            Created
                        </div>
                        <div className="TaskShortInfoUpdated InLine">
                            Updated
                        </div>
                    </div>
                    {tasks.length === 0
                        ? <h1>No tasks found</h1>
                        : tasks.map(task =>
                            <>
                                <TaskCard className="taskCard" task={task} />
                            </>
                        )}
                </div>
            </>
        )
    }
}

export default TaskManagingPage;
