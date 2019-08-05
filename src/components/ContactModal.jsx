import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import EmailForm from './EmailForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    border: '2px solid #000',
    borderRadius: 25,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    transition: 'width 1s'
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
export default function ContactModal({ open, setOpen, theme, mobile }) {
  const classes = useStyles();
  const containerStyle = {
    background: theme[0], 
    color: theme[3], 
    borderColor: theme[3],
    width: mobile ? '75vw' : '50vw'
  }
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={e => { setOpen(false) }}
    >
      <div className={classes.paper} style={ containerStyle }>
        <IconContainer onClick={() => { setOpen(false) }}>
          <FontAwesomeIcon icon={['far', 'times']} />
        </IconContainer>
        <EmailForm mobile={mobile} />
      </div>
    </Modal>
  );
}