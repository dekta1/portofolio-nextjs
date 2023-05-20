import React from 'react';
import HeroImage from "../assets/img1/dekta.jpg";
import {MdKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll/modules";

function Home ()  {

  return (
    <div 
    id ="Home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full"> 
                <h2 className="text-4xl sm:text-7xl font-bold
                text-sky-50 ">HI I'm Juli</h2>
                <p className="text-sky-50 py-5 max-w-md ">
                    I'm a junior Development. now I'm 
                    continuing my studies at Taksu Tech.
                    to increase my knowledge about Sofrware 
                    development.
                </p>
                <div>
                    <Link to="Contact" smooth duration={500} >
                        <button className="group text-sky-50 w-fit px-6 py-3 my-2 flex
                        items-center  rounded-md bg-gradient-to-r from-cyan-500 to
                     to-blue-500 cursor-pointer
                        ">
                            Contact
                            <span className="group-hover:rotate-90 duration ml-1">
                            <MdKeyboardArrowRight size={25} /> 
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile"
                className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
       </div>
    </div>
  )
}

export default Home; 