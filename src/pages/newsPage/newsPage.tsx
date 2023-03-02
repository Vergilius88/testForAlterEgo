import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getNews } from "../../app/newsPage/newsPageOperations";
import { NewsList } from "../../components/newsList/newsList";

export const NewsPage = () => {

    const dispatch = useAppDispatch();

    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        dispatch(getNews({ userId: page }));
    }, [page]);


    return (
        <div>
            <NewsList />
            <Button onClick={() => { setPage(page + 1); }} variant="outlined">Завантажити ще</Button>
        </div>
    );
};