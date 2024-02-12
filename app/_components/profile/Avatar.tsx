import { useState, useEffect } from "react";
import Image from "next/image";
import { getUser } from "@/app/_lib/actions/user";
import DefaultProfile from "@/public/default-profile.png";
import styles from "@/app/_styles/profile.module.css";

function Avatar() {
  const [profileImgUrl, setProfileImgUrl] = useState<string | undefined>("");
  const [profileName, setProfileName] = useState<string | undefined>("");

  useEffect(() => {
    const getProfileInfo = async () => {
      const response = await getUser();
      if (response) {
        const { picture, email } = response;
        setProfileImgUrl(picture);
        setProfileName(email);
      }
    };

    getProfileInfo();
  }, []);

  return (
    <div className={styles.avatarContainer}>
      <Image
        src={profileImgUrl || DefaultProfile}
        alt="Profile Picture"
        className={styles.avatar}
      />
      <span>{profileName}</span>
    </div>
  );
}

export default Avatar;
