import { CgProfile } from "react-icons/cg";
import UserNameText from "./UserPhraseAnimation";
import { useMemo } from "react";
import { Tstore } from "../../redux/store";
import { useSelector } from "react-redux";

const UserTextImage = () => {
    const user = useSelector((store: Tstore) => store.user.userDetails.name);

    const trimmedName: string = useMemo(() => {
        const splices: string = user.split(" ")[0];
        return splices;
    }, [user]);
    return (
        <div className="flex gap-1">
            <div className="flex items-center gap-1">
                <UserNameText />
                <h1 className="font-semibold text-lg text-purple-950">{trimmedName}</h1>
                <CgProfile className="sm:text-3xl text-2xl ml-3 hover:text-green-900 duration-300 cursor-pointer" />
            </div>
        </div>
    );
};

export default UserTextImage;
