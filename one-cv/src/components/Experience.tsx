import React from 'react';
import html from '../assets/experience/html.png';
import css from '../assets/experience/css.png';
import php from '../assets/experience/php.png';
import javascript from '../assets/experience/javaScript.png';
import java from '../assets/experience/Java1.jpg';

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'Html',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'Css',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: php,
            title: 'Php',
            style: 'shadow-gray-500',
        },
        {
            id: 4,
            src: javascript ,
            title: 'javasrcipt',
            style: 'shadow-yellow-500',
        },
        {
            id: 5,
            src: java,
            title: 'Java',
            style: 'shadow-sky-50',
        },
    ]






  return <div id ="Experience"
  className="bg-gradient-to-b from-gray-800 to-black w-full
  h-screen">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col
    justify-center h-full w-full text-sky-50">
        <div>
            <p className="text-4xl font-bold border-b-4
            border-gray-500 p-2 inline">Experience</p>

            <p className="py-6">These are the technology I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0">
            
            {
                techs.map(({id, src, title, style}) => (
                    <div key={id} 
                    className={`shadow-md hover:scale-105 duration-500
                    py-2 rounded-lg ${style}`}
                    >
                        <img src={src} alt=""  className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
            </div>
                ))
            }

        </div>
    </div>
  </div>;
};

export default Experience;