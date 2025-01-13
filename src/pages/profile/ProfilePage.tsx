import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

function ProfilePage() {
    const [profileImage, setProfileImage] = useState(
        "https://www.shutterstock.com/image-vector/young-smiling-man-adam-avatar-600nw-2107967969.jpg"
    );

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="w-full flex flex-col border border-gray-300 overflow-hidden pt-[4.25rem] relative justify-between h-screen">
            <div className="flex flex-col gap-y-3 items-center lg:items-start">
                <label htmlFor="profileImageInput">
                    <img
                        className="w-32 h-32 rounded-full my-5 cursor-pointer object-cover"
                        src={profileImage}
                        alt="profile"
                    />
                </label>
                <input
                    id="profileImageInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />

                <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex items-center gap-x-3 py-3 px-5">
                        <FaUser size={20} className="text-primary" />
                        <p className="text-sm lg:text-base break-words">Petrus Handika</p>
                    </div>
                    <hr />
                    <div className="flex items-center gap-x-3 py-3 px-5">
                        <IoMdCall size={20} className="text-primary" />
                        <p className="text-sm lg:text-base break-words">081573018140</p>
                    </div>
                    <hr />
                    <div className="flex items-center gap-x-3 py-3 px-5">
                        <IoMail size={20} className="text-primary" />
                        <p className="text-sm lg:text-base break-words">johndoe@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
