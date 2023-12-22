import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const UpdateItem = () => {
    const {_id, title, deadline, priority, description } = useLoaderData();
    const { register, handleSubmit, setValue } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const taskItem = {
            title: data.title,
            deadline: data.deadline,
            priority: data.priority,
            description: data.description
        };

        const taskRes = await axiosSecure.patch(`/task/${_id}`, taskItem);
        console.log(taskRes.data);

        if (taskRes.data.modifiedCount > 0) {
            // Manually reset form fields
            setValue("title", "");  // Replace with initial values if needed
            setValue("deadline", "");
            setValue("priority", "");
            setValue("description", "");

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is updated to the task.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Title*</span>
                            </label>
                            <input defaultValue={title} {...register("title", {required: true})} type="text" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Deadline*</span>
                            </label>
                            <input defaultValue={deadline} {...register("deadline", {required: true})} type="date" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Priority*</span>
                            </label>
                            <select defaultValue={priority} {...register("priority", {required: true})} className="select select-bordered w-full">
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
                        <textarea defaultValue={description} {...register("description")} className="textarea textarea-bordered h-24"></textarea>
                    </div>
                    <button className="btn">Update Task</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;