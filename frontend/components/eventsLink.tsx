import React from 'react';
import Link from 'next/link';
import styles from 'Styles/Link.module.css';
import classNames from 'classnames';
interface LinkProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
  type?: string;
}
const EventsLink: React.FC<LinkProps> = ({ className, children, link }) => {
  return (
    <Link href={link!}>
      <a
        className={
          !className ? styles.link : classNames(className, styles.link)
        }
      >
        {children}
      </a>
    </Link>
  );
};

export default EventsLink;
