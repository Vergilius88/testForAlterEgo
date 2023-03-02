import { useAppSelector } from "../../app/hooks";
import { CommentsListItem } from "./commentsListItem/commentsListItem";
import "./commentsListStyles.scss";

export const CommentsList = () => {
    const comments = useAppSelector(state => state.homePage.comments);

    return (
        <ul>
            {comments.map(comment => <CommentsListItem key={comment.id} commentData={comment} />)}
        </ul>
    );
};