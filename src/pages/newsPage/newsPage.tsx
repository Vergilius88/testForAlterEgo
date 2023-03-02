import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getNews } from "../../app/newsPage/newsPageOperations";
import { NewsList } from "../../components/newsList/newsList";

export const NewsPage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, []);

    return (
        <div>
            <NewsList />
        </div>
    );
};