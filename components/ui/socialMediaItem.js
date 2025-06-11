"use client";
import styles from "./socialMediaItem.module.css";
import Link from "next/link";
import Image from "next/image";
const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li className={styles.socialMediaListItem}>
      <Link href={url} className={styles.socialMediaLink}>
        <Image
          src={icon}
          alt={title}
          width={20}
          height={20}
          className={styles.socialMediaIcon}
        />
        <span className={styles.socialMediaText}>{title}</span>
      </Link>
    </li>
  );
};

export default SocialMediaItem;
