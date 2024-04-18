import React, { useState, useEffect } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

function CommentsContainer() {
    const [commentData, setCommentData] = useState([]);
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

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

    //CommentInput Functionality
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

    return(
        <div>
            <CommentInput 
                username={username}
                comment={comment}
                onUsernameChange={handleUsernameChange}
                onCommentChange={handleCommentChange}
                onSubmit={handleSubmit}
            />
            <CommentList commentData={commentData} />
        </div>
    );
}

export default CommentsContainer;
