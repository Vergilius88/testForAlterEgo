import { Button } from "@mui/material";
import { News } from "../../../app/api/api";
import { useAppDispatch } from "../../../app/hooks";
import { deleteNews } from "../../../app/newsPage/newsPageOperations";
import "./newsListItemStyles.scss";

interface Props {
    newsItem: News,
}

export const NewsListItem = ({ newsItem}: Props) => {
    const { title, body, id } = newsItem;
    const dispatch = useAppDispatch();

    const deleteItem = () => {
        dispatch(deleteNews(id));
    };

    return (
        <li>
            <article>
                <h2>{title}</h2>
                <p>{body}</p>
            </article>
            <Button onClick={() => deleteItem()} variant="outlined">Delete News</Button>
        </li>
    );
};