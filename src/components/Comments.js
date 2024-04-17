import React from "react";
import CommentInput from "./CommentInput";
import CommentForm from "./CommentForm";

function Comments() {

    return(
        <div>
            <h1 className="font-semibold underline">Comments</h1>
            <CommentInput />
            <CommentForm />
        </div>
    )
}

export default Comments