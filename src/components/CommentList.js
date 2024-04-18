import React from "react";

//Recieves comment data as prop, then maps over the commentData array to render each comment item.
function CommentList({ commentData }) {
    return(
        <div>
        {commentData.map((item, index) => (
            <div key={index}>
                <div className="bg-gray-100 rounded-3x1 px-4 pt-2 pb-2.5 mb-4">
                    <p className="font-semibold">{item.username}</p>
                    <p>{item.comment}</p>
                </div>
            </div>
        ))}
        </div>
    );
}

export default CommentList;
