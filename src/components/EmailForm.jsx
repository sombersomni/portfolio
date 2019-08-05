import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    normalTextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
}));

export default function EmailForm({mobile}) {
    const classes = useStyles();
    const inputRef = useRef(null);
    const [values, setValues] = useState({
        email: '',
        name: '',
        message: ''
    });
    const textfieldStyle = {
        width: mobile ? '100%' : '45%'
    }
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <React.Fragment>
            <h2>
                Send me an email
            </h2>
            <h5>
                Lets work together and make something special~
            </h5>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    inputRef={inputRef}
                    label="Email"
                    value={values.email}
                    style={textfieldStyle}
                    onChange={e => { setValues({ ...values, name: e.target.value }) }}
                    className={classes.normalTextField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    required
                />
                <TextField
                    label="Name"
                    className={classes.normalTextField}
                    value={values.name}
                    style={textfieldStyle}
                    onChange={e => { setValues({ ...values, name: e.target.value }) }}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Message"
                    multiline
                    rowsMax="10"
                    value={values.message}
                    onChange={e => { setValues({ ...values, message: e.target.value }) }}
                    className={classes.textField}
                    margin="normal"
                    helperText="It may take up to 24 hours to reply"
                    variant="outlined"
                />
            </form>
        </React.Fragment>
    );
}