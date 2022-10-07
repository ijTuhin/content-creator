import { MdSend } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import React from 'react';

const addComment = () => {
    return (
        <div className='mt-10'>
            <div className='px-5 py-4 border-4 flex'>
                <textarea name="" className='border rounded-lg py-1.5 px-2.5 bg-gray-100 text-sm' id="" cols="35" rows="1" placeholder='Write your comment'></textarea>
                <button className="block text-xl text-gray-300 hover:text-gray-400 ml-1.5 mt-1"><FiSend/></button>
            </div>
        </div>
    );
};

export default addComment;