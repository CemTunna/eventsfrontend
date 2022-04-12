import { Typography } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import styles from 'Styles/Typography.module.css';
interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
const Title: React.FC<TitleProps> = ({ className, children }) => {
  return (
    <Typography
      variant='h4'
      className={
        !className ? styles.title : classNames(className, styles.title)
      }
    >
      {children}
    </Typography>
  );
};

export default Title;