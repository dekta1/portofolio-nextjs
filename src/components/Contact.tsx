import React from 'react';

const contact = ()   => {
  return (
    <div id="Contact" className="w-full h-screen bg-gradient-to-b
    from-black to-gray-800 p-4 text-sky-50">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline
                border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit thr from below to get in touch with me </p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/ebed955a-fd0c-40ee-96c9-aeae29cf726d"
                method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" 
                    placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md
                    text-sky-50 focus:outline-none" />

                    <input type="text" name="name"  
                    placeholder="Enter your email"
                    className="my-4 p-2 bg-transparent border-2 rounded-md
                    text-sky-50 focus:outline-none" />

                    <textarea name="message"
                    placeholder="Enter your massage"
                    className="p-2 bg-transparent border-2 rounded-md
                    text-sky-50 focus:outline-none h-12"></textarea>

                    <button className=" text-sky-50 bg-gradient-to-b
                    from-cyan-500 to-blue-500 px-6 py-3 my-8
                    mx-auto flex items-center rounded-md hover:scale-110
                    duration-300"> Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default contact