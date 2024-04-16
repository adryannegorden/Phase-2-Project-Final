import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";

function CommentInput({ }) {
    const [newCommentData, setNewCommentData] = useState([]);
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    function addComment(newComment) {
        setNewCommentData([...newCommentData, newComment]);
    }
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            username: username,
            comment: comment
        };

        fetch("http://localhost:4000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment)
        })
        .then(res => res.json())
        .then(data => {
            addComment(data);
            setComment("");
            setUsername("");
        });
    };

    let isDisabled = false;
    if (!username || !comment) {
        isDisabled = true;
    }

    const buttonClass = isDisabled
    ? "bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 cursor-not-allowed"
    : "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6";

    return (
        <div>
            <form>
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
                    onClick={handleSubmit}
                    disabled={isDisabled}
                >
                    Comment
                </button>
            </form>
        </div>
    );
}

export default CommentInput;
