import React, { useEffect, useState } from "react";
import { commentGetAPI, commentPostAPI } from "../../services/CommentService";
import { toast } from "react-toastify";
import { CommentGet } from "../../models/Comment";

import StockCommentForm from "./form/StockCommentForm";
import Spinner from "../spinner/Spinner";
import StockCommentList from "./list/StockCommentList";

type Props = {
    stockSymbol: string;
};

type CommentFormInputs = {
    title: string;
    content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
    const [comments, setComment] = useState<CommentGet[] | null>(null);
    const [loading, setLoading] = useState<boolean>();

    useEffect(() => {
        getComments();
    }, []);

    const handleComment = (e: CommentFormInputs) => {
        commentPostAPI(e.title, e.content, stockSymbol)
            .then((res) => {
                if (res) {
                    toast.success("Comment created successfully!");
                    getComments();
                }
            })
            .catch((e) => {
                toast.warning(e);
            });
    };

    const getComments = () => {
        setLoading(true);
        commentGetAPI(stockSymbol).then((res) => {
            setLoading(false);
            setComment(res?.data!);
        });
    };
    return (
        <div className="flex flex-col">
            {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
            <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
        </div>
    );
};

export default StockComment;