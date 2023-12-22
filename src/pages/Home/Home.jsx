import { Helmet } from "react-helmet-async";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/img/about.jpg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const userTypes = ['Developers', 'Corporate Professionals', 'Bankers', 'Students', 'Entrepreneurs', 'Doctors'];
    return (
        <div>
            <Helmet>
                <title>Task Manager | Home</title>
            </Helmet>
            <div className="bg-teal-700 min-h-screen items-center justify-center flex flex-col">
                <h1 data-aos="flip-up" data-aos-duration="600" className="text-4xl lg:text-8xl text-white font-bold mb-12">Manage Your Task</h1>
                <p data-aos="zoom-in" data-aos-duration="600" className="text-white text-2xl mb-12">Empower Your Productivity: Seamlessly Manage Tasks, Achieve Goals.<br/> and Unlock Your Full Potential with Our Task Management App!</p>
                <button className="btn bg-transparent border border-white rounded-3xl text-white text-2xl font-bold px-12">
                    <Link to="/login">Let’s Explore</Link>
                </button>
            </div>

            <section className="bg-gray-200 py-16">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div  data-aos="fade-right" className="md:w-1/2 mb-8 md:mb-0">
                            <img
                            className="rounded-lg shadow-lg"
                            src={aboutImg}
                            alt="Team at Work"
                            />
                        </div>
                        <div  data-aos="fade-left" className="md:w-1/2 md:pl-8">
                            <h2 className="text-4xl font-semibold mb-8 text-left text-teal-900">What We Do</h2>
                            <p className="mb-6 text-teal-900">
                            At TaskMaster, we believe in the power of efficient task management to transform the way individuals and teams work. Our journey began with a simple idea – to create a platform that empowers people to achieve their goals, both personally and professionally.
                            </p>
                            <p className="mb-6 text-teal-900">
                            With a dedicated team of developers, designers, and project managers, we have crafted a task management app that seamlessly integrates into your workflow. From creative professionals to corporate teams, our solution adapts to your needs, providing a unified space for task organization, collaboration, and success.
                            </p>
                            <p className="text-teal-900">
                            Join us on this journey of productivity and innovation. Let make every task count!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-semibold mb-8 text-center text-teal-900">Who Benefits from Our Task Management App?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {userTypes.map((type, index) => (
                            <div data-aos="flip-down" data-aos-duration="600" key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-center">
                                    <FaUserCircle className="mx-auto text-5xl text-teal-500"></FaUserCircle>
                                </div>
                                <p className="text-2xl text-teal-900 mt-5 font-semibold">{type}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;