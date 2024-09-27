import React from "react";
import { CommentGet } from "../../../models/Comment";
import { useAuth } from "../../../context/userAuth";
import { commentDeleteAPI } from "../../../services/CommentService";

type Props = {
    comment: CommentGet;
};

const StockCommentListItem = ({ comment }: Props) => {
    const { isLoggedIn, user, logout } = useAuth();
    const handleDelete = async (commentId: string) => {
        try {
            await commentDeleteAPI(commentId); // Call the delete method
        } catch (error) {
            console.error('Failed to delete comment:', error);
        }
    };
    return (
        <div className="relative grid grid-cols-1 gap-4 ml-4 p-4 mb-8 w-full border rounded-lg bg-white shadow-lg">
            <div className="relative flex gap-4">
                <div className="flex flex-col w-full">
                    {/* Conditionally render the delete button if the user is an admin */}
                    {user?.role === 'Admin' && (
                        <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(comment.id)}>
                            Delete
                        </button>
                    )}
                    <div className="flex flex-row justify-center items-center">
                        <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                            {comment.title}
                        </p>
                    </div>
                    <p className="text-dark text-sm">@{comment.createdBy}</p>
                </div>
            </div>
            <p className="-mt-4 text-gray-500">{comment.content}</p>
        </div>
    );
};

export default StockCommentListItem;
