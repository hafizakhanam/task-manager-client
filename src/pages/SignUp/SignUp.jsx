import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
       
       createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser) ;
            updateUserProfile(data.name, data.photoURL)
            .then(() =>{
                console.log("user profile info updated");
                const userInfo ={
                    name: data.name,
                    email: data.email,
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    if(res.data.insertedId){
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User created successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/dashboard/userHome');
                    }
                })
            })
            .catch(error => console.log(error))
        })
    };

    return (
        <>
            <Helmet>
                <title>Task Manager | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/})} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && (<p className="text-red-600">Password is required</p>)}
                            {errors.password?.type === "minLength" && (<p className="text-red-600">Password must be 6 characters</p>)}
                            {errors.password?.type === "maxLength" && (<p className="text-red-600">Password must be 6 less than characters</p>)}
                            {errors.password?.type === "pattern" && (<p className="text-red-600">Password must 1 uppercase, 1 lowercase, 1 number & 1 special character</p>)}
                            {errors.password && <span className="text-red-600"></span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn bg-teal-700" />
                        </div>
                    </form>
                    <p className="px-6"><small>Already have an account <Link to="/login" className="text-teal-500">Login</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </>
    );
};

export default SignUp;