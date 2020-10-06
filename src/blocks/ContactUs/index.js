import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import config from '../../config';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        margin: '0 calc(50% - 50vw)',

    },
    textWrapper: {
        padding: theme.spacing(4),
    },
    form: {
        maxWidth: theme.spacing(86),
        background: theme.palette.background.default,
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2)
    },
    header: {
        paddingBottom: theme.spacing(2),
    },
    message: {
        maxWidth: theme.spacing(60),
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(20),
    },
}));



// const reqInit = {
//     method: 'POST',
//     mode: 'no-cors',
//     headers: {
//         'Content-Type': 'multipart/form-data'
//     },
// };

const emailCheck = /\S+@\S+/


export const ContactUs = () => {
    const classes = useStyles();
    const [values, setValues] = useState({});
    const [adding, setAdding] = useState(false);
    const [error, setError] = useState({})
    const [message, setMessage] = useState('false');


    const handleChangeEmail = (e) => {
        // get field value and name
        const val = e.target.value;
        const name = e.target.name

        // clear error
        error[name] = null;
        setError({ ...error })

        // set value
        values[name] = val;
        setValues({ ...values });
    }

    const handlePost = async (e) => {
        e.preventDefault();
        setAdding(true);
        setError({});

        if (!emailCheck.test(String(values.email).toLowerCase())) {
            setError({ email: "Please enter your email address" })
        };

        //const formData = new URLSearchParams();
        const formData = new FormData();
        //formData.append("id", "_form_6_")
        formData.append("u", "6");
        formData.append("f", "6");
        formData.append("s", "");
        formData.append("c", "0");
        formData.append("m", "0");
        formData.append("act", "sub");
        formData.append("v", "2");
        formData.append("email", values.email);
        formData.append("fullname", values.fullname);
        formData.append("enquiry", values.enquiry);

        var request = new XMLHttpRequest();
        request.open("POST", config.activeCampaign.contactForm);
        request.send(formData);

        // reqInit.body = formData.toString();
        // const resp = await fetch(config.activeCampaign.contactForm, reqInit);
        // console.log("resp", resp)

        // if (resp.ok) {
        //     alert("OK");
        // }

        setAdding(false);
        if (emailCheck.test(String(values.email).toLowerCase())) {
            message === 'true' ? setMessage('false') : setMessage('true');
        };
    }

    return (
        <Box id='contactus' className={classes.root} padding="2rem" display="flex" justifyContent="center">
            {message === 'false' &&
                <Box className={classes.form}>
                    <Box className={classes.textWrapper}>
                        <Typography className={classes.header} align="center" color="secondary" variant="h5">
                            FREE QUOTE
                    </Typography>
                        <Typography className={classes.header} align="center" variant="h2">
                            Request a free quote today
                    </Typography>
                        <Typography align="center" color="textSecondary" variant="h5">
                            Got a question? Chat to our team or send through details of your project for a free, no-obligation quote.
                    </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                fullWidth required={true} label="ENTER YOUR EMAIL ADDRESS" variant="outlined" name="email"
                                value={values.email}
                                onChange={handleChangeEmail}
                                helperText={error.email}
                                error={error.email}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField fullWidth label="ENTER YOUR PHONE" type="text" variant="outlined" name="fullname"
                                value={values.fullname}
                                onChange={e => setValues({ ...values, fullname: e.target.value })}

                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField fullWidth label="ADD A DESCRIPTION" type="text" variant="outlined" multiline rows={6} name="enquiry"
                                value={values.enquiry}
                                onChange={e => setValues({ ...values, enquiry: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button style={{ borderRadius: '0.5rem' }} disabled={!values.email} type="submit" variant="contained" color="secondary" onClick={(e) => handlePost(e)} disableElevation >
                                    {adding ? <CircularProgress size={24} /> : 'SUBMIT'}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            }
            {message === 'true' &&
                <Box justifyContent="center">
                    <Grid className={classes.message} container spacing={3}>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h2">
                                Verify your email
                </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center" color="primary" variant="h5">
                                You’re almost done! Please follow the link <br /> we’ve sent you to complete sign up.
                    </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth color="primary" variant="contained" href="#">Skip for now</Button>
                        </Grid>
                    </Grid>
                </Box>
            }
        </Box>
    )
}

export default ContactUs;