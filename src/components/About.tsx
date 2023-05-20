import React from 'react';


const About = () => {
  return <div id="About"
  className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-sky-50">

    <div className ="max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center w-full h-full">

        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4
            border-gray-500">About</p>
        </div>
        <p className="text-xl">
        Hi, I'm Putri Juli Antari, but all my friends
        used to call me Juli or Dekta. I'm a student from
        wira harapan vocational school. I have 2 year's of
        experience at programing, I've been programing since 2021.
        the only langguage that I've been learning was Html, Css,
        JavaScript, Java, Php, and C++.
        </p>
        <br />

        <p className="text-xl">
        My hobbies are watching videos and programming.
        sometimes if I'm in trouble for programming in
        a new language, I'll use my hobby of watching to 
        solve the problem. like now I'm learning 
        new languages ​​like next.js, React, TypeScript, 
        and talwind. 
        </p>
    </div>

  </div>;
  
};

export default About
