import React from 'react';
import { Dialog, DialogActions, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import styles from 'Styles/Link.module.css';
import classNames from 'classnames';
import EventsLink from 'Components/EventsLink';
interface ConfirmProps {
  handleClose: () => void;
  setConfirm: (e: boolean) => void;
  open: boolean;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});
const Confirm: React.FC<ConfirmProps> = ({ open, setConfirm, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      PaperProps={{
        style: {
          color: '#f64c72',
          width: '250px',
          padding: '2rem',
          backgroundColor: '#553d67',
        },
      }}
    >
      <DialogTitle>{'Are You Sure ?'}</DialogTitle>

      <DialogActions>
        <EventsLink
          className={classNames(styles.btnConfirm, styles.btn)}
          onClick={() => {
            setConfirm(true);
            handleClose();
          }}
        >
          Yes
        </EventsLink>
        <EventsLink
          className={classNames(styles.btnConfirm, styles.btn)}
          onClick={() => {
            setConfirm(false);
            handleClose();
          }}
        >
          No
        </EventsLink>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
