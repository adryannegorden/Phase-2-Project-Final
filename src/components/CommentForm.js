import React, { useState, useEffect } from "react";

export function addComment(newComment, commentData, setCommentData) {
    setCommentData([...commentData, newComment]);
}

function CommentForm() {
    const [commentData, setCommentData] = useState([]);

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
            .catch(error => {
                console.error("Error fetching comments", error);
            });
    }

    return (
        <div>
            {commentData.map((item, index) => (
                <div key={index}>
                    <div className="bg-gray-100 rounded-3xl px-4 pt-2 pb-2.5 mb-4">
                        <p className="font-semibold">{item.username}</p>
                        <p>{item.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentForm;
