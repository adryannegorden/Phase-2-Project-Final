import React, { useState, useEffect } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

function CommentsContainer() {
    const [commentData, setCommentData] = useState([]);

    //CommentList Information
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
                setCommentData(data);
            });
    }

    const handleCommentSubmit = (username, comment) => {
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
            <CommentInput onCommentSubmit={handleCommentSubmit} />
            <CommentList commentData={commentData} />
        </div>
    );
}

export default CommentsContainer;
