import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export const Details = () => {
    return (
        <div className="mt-6">
            <div className="flex space-x-4 justify-center">
                <FaYoutube className="text-xl cursor-pointer" />
                <FaTwitter className="text-xl cursor-pointer" />
                <FaInstagram className="text-xl cursor-pointer" />
                <FaFacebook className="text-xl cursor-pointer" />
            </div>
            <div className="mt-3 text-center">
                <a href="#" className="text-xs underline">
                    개인정보처리방침
                </a>
            </div>
            <div className="mt-2 text-center text-xs">
                &copy; 2024 Our River All rights reserved.
            </div>
        </div>
    );
};
