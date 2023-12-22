import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useTask from "../../../hooks/useTask";



const ManageItems = () => {
    const [task, loading, refetch] = useTask();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) =>{
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/task/${item._id}`);
                console.log(res.data)
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Task Item has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        <div>
            <h2 className="text-6xl text-center my-12">Manage Task</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Deadline</th>
                        <th>Priority</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            task.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.deadline}</td>
                                <td>{item.priority}</td>
                                <th>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button className="btn btn-ghost btn-lg"> <FaEdit className="text-white"/> </button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg"> <FaTrash className="text-red-600"/> </button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;