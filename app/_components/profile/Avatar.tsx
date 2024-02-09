import Image from "next/image";
import DefaultProfile from '@/public/default-profile.png';
import styles from '@/app/_styles/profile.module.css';

interface AvatarProps {
  imageSrc: string;
}

function Avatar() {
  // destruct props
//   const { imageSrc } = props;

  return (
    <div>
      <Image src={DefaultProfile} alt="Profile Picture" className={styles.avatar}/>
    </div>
  );
}

export default Avatar;
