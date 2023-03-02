import { User } from "../../app/api/api";
import "./profileCardStyles.scss";

interface Props {
    userData:User
}

export const ProfileCard = ({userData}:Props) => {
    const { name, username, email, phone, website, address, company, id } = userData;
    return (
        <div>
            <p>Ім'я: <span>{name}</span> </p>
            <p>Нік: <span>{username}</span> </p>
            <p>Місце роботи: <span>{company.name}</span> </p>
            <p>Пошта: <span>{email}</span> </p>
            <p>Телефон: <span>{phone}</span></p>
            <p>Домашня сторінка: <span>{website}</span> </p>
            <p>Домашній адрес: <span>{address.zipcode} {address.street} {address.suite} {address.city}</span> </p>
        </div>
    );
};