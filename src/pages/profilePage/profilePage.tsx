import { useAppSelector } from "../../app/hooks";
import { ProfileCard } from "../../components/profileCard/profileCard";


export const ProfilePage = () => {
    const currentUser = useAppSelector(state => state.profilePage.userData);

    return (
        <>
            <ProfileCard userData={currentUser} />
        </>
    );
};