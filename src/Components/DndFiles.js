import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ["JPG", "PNG", "GIF"];

const DndFiles = () => {
    const [file, setFile] = useState([]);
    const handleChange = (file) => {
        setFile(file);
    };

    return (
        <div className='flex flex-col items-center m-10'>
            <div className='w-96 border p-5 mb-10 bg-sky-100'>
                <h3 className='text-2xl text-center text-gray-600 font-medium mb-5'>Upload or Drag Your File</h3>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            </div>

            <p>Your File:</p>
            {file}
        </div>
    );
};

export default DndFiles;