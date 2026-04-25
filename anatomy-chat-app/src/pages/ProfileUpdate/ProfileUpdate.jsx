import React from "react";
import assets from "../../assets/assets";
import './ProfileUpdate.css';
const ProfileUpdate = () => {
    return (
        <div className="profile">
            <div className="profile-container">
                <form>
                    <h3>Profile details</h3>
                    <label htmlFor="avatar">
                        <input type="file" id="avatar" accept='.png,.jpeg,.jpg' hidden />
                        <img src={assets.avatar_icon} alt="" />
                        upload profile image
                    </label>
                    <input type="text" placeholder="Your Name" required />
                    <textarea placeholder="write profile bio" required></textarea>
                    <button type="submit">Save</button>
                </form>
                <img className="profile-pic" src={assets.logo_icon} alt="" />
            </div>
        </div>
    );
};
export default ProfileUpdate;