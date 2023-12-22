import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                navigate('/dashboard/userHome');
            })
        })
    }
    return (
        <div className="p-6">
            <div className="divider"></div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn bg-teal-700">
                    <FaGoogle></FaGoogle>Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;