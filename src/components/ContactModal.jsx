import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import EmailForm from './EmailForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: 25,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

const IconContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  transition: opacity 1s;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
export default function ContactModal({ open, setOpen }) {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={e => { setOpen(false) }}
    >
      <div className={classes.paper}>
        <IconContainer onClick={() => { setOpen(false) }}>
          <FontAwesomeIcon icon={['far', 'times']} />
        </IconContainer>
        <EmailForm />
      </div>
    </Modal>
  );
}