import Task from "../Task/Task";

const ToDo = ({ listType, tasks }) => {
    return (
        <div>
            <h3 className="text-4xl mb-5">{listType}</h3>
            <div className="border border-2 border-teal-700">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Deadline</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks
                                .filter((task) => task.status === listType)
                                .map((item) => (
                                    <Task key={item._id} task={item} listType={listType} />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ToDo;