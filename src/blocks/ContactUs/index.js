import React, { useState, useReducer } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import config from '../../config';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(12, 'auto', 0),
        paddingBottom: theme.spacing(12),
        maxWidth: theme.spacing(82),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(3),
        },
    },
    input: {
        marginTop: theme.spacing(3)
    },
}));

const emailRegex = /\S+@\S+/

const reducer = (state, action) => {
    let error

    switch (action.type) {
        case 'email':
            if (!emailRegex.test(action.value.toLowerCase())) {
                error = "Please enter a valid email address";
            };
            return { ...state, email: action.value, errors: { ...state.errors, email: error } };
        case 'fullName':
            return { ...state, fullName: action.value };
        case 'enquiry':
            return { ...state, enquiry: action.value };
        default:
    }
}
const init = { email: "", fullName: "", enquiry: "", errors: {} };

export const ContactUs = () => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, init);
    const [submitting, setSubmitting] = useState();
    const [submitted, setSubmitted] = useState();

    const formValid = () => {
        if (!state.email) {
            return false;
        }

        for (var err in state.errors) {
            if (state.errors[err]) {
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData();
        formData.append("u", "6");
        formData.append("f", "6");
        formData.append("s", "");
        formData.append("c", "0");
        formData.append("m", "0");
        formData.append("act", "sub");
        formData.append("v", "2");
        formData.append("email", state.email);
        formData.append("fullname", state.fullName);
        formData.append("field[8]", state.enquiry);

        var xhr = new XMLHttpRequest();

        xhr.open("POST", config.activeCampaign.contactForm);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                var status = xhr.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                    setSubmitted(true);
                } else {
                    console.error("aw", xhr.responseText);
                }
            }
        };
        xhr.send(formData);

        setSubmitting(false);
    }

    return (
        <Box id="contact" className={classes.root}>
            {!submitted &&
                <>
                    <Box pb="2rem">
                        <Typography align="center" variant="h2">
                            Get into contact with me
                        </Typography>
                        <Typography align="center" color="textSecondary" variant="h5">
                            Get in touch for further information or support
                        </Typography>
                    </Box>
                    <TextField
                        fullWidth required={true} label="Email address" variant="outlined" name="email"
                        value={state.email}
                        onChange={e => dispatch({ type: 'email', value: e.target.value })}
                        helperText={state.errors.email}
                        error={state.errors.email && state.errors.email !== ""}
                        className={classes.input}
                    />
                    <TextField fullWidth label="Full Name" type="text" variant="outlined" name="fullname"
                        value={state.fullName}
                        onChange={e => dispatch({ type: 'fullName', value: e.target.value })}
                        className={classes.input}
                    />
                    <TextField fullWidth label="Enquiry" type="text" variant="outlined" multiline rows={6} name="enquiry"
                        value={state.enquiry}
                        onChange={e => dispatch({ type: 'enquiry', value: e.target.value })}
                        className={classes.input}
                    />
                    <Box display="flex" justifyContent="flex-end">
                        <Button disabled={!formValid()} variant="contained" color="primary"
                            onClick={(e) => handleSubmit(e)}
                            className={classes.input}
                        >
                            {submitting ? <CircularProgress size={24} /> : 'Contact me'}
                        </Button>
                    </Box>
                </>

            }
            {submitted &&
                <>
                    <Box paddingTop="6rem">
                        <Typography align="center" variant="h3">
                            Thank you for your enquiry
                        </Typography>
                        <Typography align="center" variant="h5">
                            We will get in touch with you shortly.
                        </Typography>
                    </Box>
                    <Box paddingLeft="6rem" paddingRight="6rem" paddingTop="2rem" display="flex" justifyContent="center">
                        <Button fullWidth color="primary" variant="contained" href={'/#'}>Return</Button>
                    </Box>
                </>
            }
        </Box>
    )
}

export default ContactUs;