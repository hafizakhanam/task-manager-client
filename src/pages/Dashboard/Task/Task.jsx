import { useDrag } from 'react-dnd';

const Task = ({ task }) => {
    const [, drag] = useDrag({
        type: 'TASK',
        item: { id: task._id, status: task.status },
    });

    return (
        <tr ref={drag}>
            <td>{task.title}</td>
            <td>{task.deadline}</td>
            <td>{task.priority}</td>
        </tr>
    );
};

export default Task;