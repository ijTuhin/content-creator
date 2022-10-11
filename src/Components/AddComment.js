import { FiSend } from "react-icons/fi";
import React, { useState } from "react";

const AddComment = () => {
  const [commentBox, setCommentBox] = useState([]);
  const [comments, setComments] = useState("");
  const addedComment = (event) => {
    console.log('added comment: ', event.target.value)
    setComments(event.target.value);
  };
  const addCommentHandler = () => {
    setCommentBox(item => [...item, comments]);
    console.log('Stored comments: ', commentBox.values());
    setComments("");
  };
  return (
    <div className="mt-10">
      {commentBox.map((comment) => (
        <>
        <p className="border m-1.5">{ comment }</p>
        </>
        ))}
      <div className="px-5 py-4 border-4 flex">
        <textarea
          onChange={addedComment}
          value={comments}
          name=""
          className="border rounded-lg py-1.5 px-2.5 bg-gray-100 text-sm"
          id=""
          cols="35"
          rows="1"
          placeholder="Write your comment"
        ></textarea>
        <button
          onClick={addCommentHandler}
          className="block text-xl text-gray-300 hover:text-gray-400 ml-1.5 mt-1"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default AddComment;
