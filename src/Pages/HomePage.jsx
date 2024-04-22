import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import HomeLayout from "../Layouts/HomeLayout";
import HomePageImage from '../Assets/Images/homePageMainImage.png';
import logo from '../Assets/Images/logo.png';

function HomePage(){
    return (

        <HomeLayout>
            <div className="pt-10 text-white flex flex-col sm:flex-row items-center justify-evenly mx-4 sm:mx-16 h-[90vh]">
                <div className="w-full sm:w-1/2 space-y-6">
                    <img src={logo} alt="logo" className="w-[300px] m-auto" />
                    <h1 className="text-4xl text-center sm:text-5xl sm:text-left font-semibold">
                        Find your &nbsp;
                        <span className="text-yellow-500 font-bold">
                            Schedules
                        </span>
                    </h1>
                    <p className="text-center sm:text-xl sm:text-left text-gray-200">
                        Leverage the capability of Generative AI to grab your schedule now.
                    </p>
                    <div className="flex sm:block justify-center items-center sm:text-left space-x-6">
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-3 py-2 sm:px-5 sm:py-3 rounded-md font-semibold sm:text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Try PlanWise <GoArrowUpRight className="inline-block" />
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border border-yellow-500 px-3 py-2 sm:px-5 sm:py-3 rounded-md font-semibold sm:text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 flex justify-center items-center">
                    <img style={{filter: "drop-shadow(0px 10px 10px rgb(0,0,0))"}} src={HomePageImage} alt="homepage image" />
                </div>
            </div>
        </HomeLayout>
    )
}

export default HomePage;