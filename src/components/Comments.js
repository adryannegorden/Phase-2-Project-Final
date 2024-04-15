import React, { useState, useEffect } from "react";

function Comments() {
    const [commentData, setCommentData] = useState([]);
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        getComments();
    }, []);

    function addComment(newComment) {
        setCommentData([...commentData, newComment]);
    }

    function getComments() {
        fetch("http://localhost:4000/comments")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setCommentData(data);
                } else {
                    console.error("Insufficient comment", data);
                }
            });
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
        });
    };

    return(
        <div>
            <h3 className="font-medium underline">
                comments:
            </h3>
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
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Comment
                </button>
            </form>
            <div>
                {commentData && Array.isArray(commentData) && commentData.map((item, index) => (
                    <div key={index}>
                        <div className="bg-gray-100 rounded-3x1 px-4 pt-2 pb-2.5 mb-4">
                            <p className="font-semibold">{item.username}</p>
                            <p>{item.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments;
