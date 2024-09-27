export type CommentPost = {
    title: string;
    content: string;
};

export type CommentGet = {
    id: string;
    title: string;
    content: string;
    createdBy: string;
};