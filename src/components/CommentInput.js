import React from "react";

function CommentInput({ username, comment, onUsernameChange, onCommentChange, onSubmit }) {

    //Disabled Button if form is empty
    let isDisabled = false;
    if (!username || !comment) {
        isDisabled = true;
    }

    //Changes button style to gray if disabled
    const buttonClass = isDisabled
    ? "bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 cursor-not-allowed"
    : "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6";

    return(
        <div>
            <h3 className="font-medium underline">
                comments:
            </h3>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="username"
                    placeholder="Username Here..."
                    className="border-blue-500 border rounded px-4 py-2 mb-2"
                    value={username}
                    onChange={onUsernameChange}
                />
                <input
                    type="text"
                    name="comment"
                    placeholder="Comment Here..."
                    className="border-blue-500 border rounded px-4 py-2 mb-2"
                    value={comment}
                    onChange={onCommentChange}
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
