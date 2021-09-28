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

    async componentDidMount() {
        try {
            const response = await axios.get("/api/task/get_task/");
            this.setState({ tasks: response.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { tasks } = this.state;
        return (
            <>
                <div className='main-wrapper'>
                    <div className="header-row">
                        <div className="task-shortinfo-name inline">
                            Name
                        </div>
                        <div className="task-shortinfo-author inline">
                            Author
                        </div>
                        <div className="task-shortinfo-rate inline">
                            Rate
                        </div>
                        <div className="task-shortinfo-level inline">
                            Level
                        </div>
                        <div className="task-shortinfo-status inline">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"><div className="tooltip-text">"DR" - Draft<br /> "PB" - Published</div></Tooltip>}>
                                <span className="d-inline-block">
                                    Status
                                </span>
                            </OverlayTrigger>
                        </div>
                        <div className="task-shortinfo-created inline">
                            Created
                        </div>
                        <div className="task-shortinfo-updated inline">
                            Updated
                        </div>
                    </div>
                    {tasks.length === 0
                        ? <h1>No tasks found</h1>
                        : tasks.map(task => <TaskCard className="taskCard" task={task} />)}
                </div>
            </>
        )
    }
}

export default TaskManagingPage;
