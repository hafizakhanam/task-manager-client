import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const taskItem = {
            title: data.title,
            deadline: data.deadline,
            priority: data.priority,
            description: data.description,
            status: 'To Do'
        }
        const taskRes = await axiosSecure.post('/task', taskItem);
        console.log(taskRes.data)
        if(taskRes.data.insertedId){
            reset();
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is added to the task.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div>
            <h1 className="text-center text-white text-4xl my-8">Add Task</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="grid grid-cols-3 gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Title*</span>
                            </label>
                            <input {...register("title", {required: true})} type="text" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Deadline*</span>
                            </label>
                            <input {...register("deadline", {required: true})} type="date" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Priority*</span>
                            </label>
                            <select defaultValue="default" {...register("priority", {required: true})} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Descriptions</span>
                        </label>
                        <textarea {...register("description")} className="textarea textarea-bordered h-24"></textarea>
                    </div>
                    
                    <button className="btn">Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;