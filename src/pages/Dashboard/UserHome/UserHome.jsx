import useAuth from "../../../hooks/useAuth";
import useTask from "../../../hooks/useTask";
import ToDo from "../ToDo/ToDo";

const UserHome = () => {
    const { user } = useAuth();
    const [tasks] = useTask();

    const handleDrop = async () => {
        
    };

    return (
        <div>
            <h2 className="text-3xl mt-8">
                <span>Hi, Welcome </span>
                {user?.displayName ? user.displayName : 'Back'}
            </h2>
            <h1 className="text-center text-6xl text-white font-bold my-12">Task Lists</h1>
            <div className="grid grid-cols-3 gap-5">
                <ToDo listType="To Do" tasks={tasks} onDrop={handleDrop} />
                <ToDo listType="Ongoing" tasks={tasks} onDrop={handleDrop} />
                <ToDo listType="Completed" tasks={tasks} onDrop={handleDrop} />
            </div>
        </div>
    );
};

export default UserHome;