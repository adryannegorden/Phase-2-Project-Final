import React, { useState } from "react";

function CommentInput({ onCommentSubmit }) {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    //Disabled Button if form is empty
    let isDisabled = !username || !comment;

    //Changes button style to gray if disabled
    const buttonClass = isDisabled
        ? "bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6";

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCommentSubmit(username, comment);
        setComment("");
        setUsername("");
    };

    return (
        <div>
            <h3 className="font-medium underline">comments:</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    placeholder="Username Here..."
                    className="border-blue-500 border rounded px-4 py-2 mb-2"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    type="text"
                    name="comment"
                    placeholder="Comment Here..."
                    className="border-blue-500 border rounded px-4 py-2 mb-2"
                    value={comment}
                    onChange={handleCommentChange}
                />
                <button 
                    className={buttonClass}
                    type="submit"
                    disabled={isDisabled}
                >
                    Comment
                </button>
            </form>
        </div>
    );
}

export default CommentInput;
