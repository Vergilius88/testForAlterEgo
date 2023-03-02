import axios from "axios";

export interface User {
    id: number;
    name: string;
    username?: string;
    email?: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone?: string;
    website?: string;
    company?: {
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

export interface UserId {
    userId: number;
}

export interface PostId {
    postId: number;
}

const baseUrl: string = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use((config): any => ({
    baseURL: `${baseUrl}`,
    ...config,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}));

export const getRandomUser = (request: number) => axios.get<User>(`/users/${request}`);

export const getPosts = (request: UserId) => axios.get<News[]>("/posts", { params: request });

export const getComments = (request: PostId) => axios.get<Comment[]>("/comments", { params: request });

export const deletePost = (PostId: number) => axios.delete(`/posts/${PostId}`);
