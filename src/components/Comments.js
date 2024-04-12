import React, { useState, useEffect } from "react";

function Comments() {
    const [commentData, setCommentData] = useState([]);
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        getComments();
    }, []);

    function getComments() {
        fetch("http://localhost:4000/comments")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setCommentData(data);
                } else {
                    console.error("Insufficient comment", data);
                }
            })
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
            body: JSON.stringify({ comments: [newComment] })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to post comment");
            }
            getComments();
            return response.json();
        })
        .then(data => {
            console.log("Comment posted successfully:", data);
        })
        .catch(error => {
            console.error("Error posting comment:", error);
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
                    onChange={handleUsernameChange}
                />
                <input
                    type="text"
                    name="comment"
                    placeholder="Comment Here..."
                    className="border-blue-500 border rounded px-4 py-2 mb-2"
                    onChange={handleCommentChange}
                />
                <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6"
                    type= "submit"
                    onClick={handleSubmit}
                >
                    Comment
                </button>
            </form>
            <div className="bg-gray-100 rounded-3xl px-4 pt-2 pb-2.5">
                {commentData && Array.isArray(commentData) && commentData.map((item, index) => (
                    <div key={index}>
                        {item.comments && Array.isArray(item.comments) && item.comments.map((comment, subIndex) => (
                            <div key={subIndex} className="mb-4">
                                <p className="font-semibold">{comment.username}</p>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments;