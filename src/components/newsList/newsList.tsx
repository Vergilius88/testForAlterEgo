
import { useAppSelector } from "../../app/hooks";
import { NewsListItem } from "./newsListItem/newsListItem";
import "./newsListStyles.scss";


export const NewsList = () => {

    const newsData = useAppSelector(state => state.newsPage.news);

    return (
        <ul>
            {newsData.map((news, index) => <NewsListItem key={index} newsItem={news} />)}
        </ul>
    );
};