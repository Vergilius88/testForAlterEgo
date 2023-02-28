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
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface UserId {
    userId: number;
}
export interface PostId {
    userId: number;
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

export const getPosts = () => axios.get<Post[]>("/posts");

export const deletePost = (request: PostId) => axios.delete(`/posts${request}`);
