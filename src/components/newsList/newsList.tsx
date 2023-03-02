import { useAppSelector } from "../../app/hooks";
import { NewsListItem } from "./newsListItem/newsListItem";
import "./newsListStyles.scss";


export const NewsList = () => {
    const newsData = useAppSelector(state => state.newsPage.news);

    return (
        <ul>
            {newsData.map(news => <NewsListItem key={news.id} newsItem={news} />)}
        </ul>
    );
};