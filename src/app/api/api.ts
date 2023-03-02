import axios from "axios";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
export interface News {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const baseUrl: string = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use((config): any => ({
    baseURL: `${baseUrl}`,
    ...config,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}));

export const getRandomUser = (userId: number) => axios.get<User[]>(`/users/${userId}`);

export const getPosts = () => axios.get<News[]>("/posts");

export const getComments = () => axios.get<Comment[]>("/comments");

export const deletePost = (PostId: number) => axios.delete(`/posts/${PostId}`);
