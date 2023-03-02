import "./commentsListItemStyles.scss";
import { Comment } from "../../../app/api/api";

interface Props {
    commentData: Comment,
}

export const CommentsListItem = ({ commentData }: Props) => {
    const { name, email, body } = commentData;

    return (
        <li>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{body}</p>
        </li>
    );
};