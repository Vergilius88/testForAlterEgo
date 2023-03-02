import { useEffect } from "react";
import { getCommentsData } from "../../app/homePage/homePageOperation";
import { useAppDispatch } from "../../app/hooks";
import { CommentsList } from "../../components/commentsList/commentsList";
import { randomNumber } from "../../utils/randomNumber";


export const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCommentsData({ postId: randomNumber(10) }));
    }, []);

    return (
        <div>
            <CommentsList />
        </div>
    );
};