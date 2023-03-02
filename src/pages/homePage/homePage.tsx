import { useEffect } from "react";
import { getCommentsData } from "../../app/homePage/homePageOperation";
import { useAppDispatch } from "../../app/hooks";
import { CommentsList } from "../../components/commentsList/commentsList";


export const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCommentsData());
    }, []);

    return (
        <div>
            <CommentsList />
        </div>
    );
};