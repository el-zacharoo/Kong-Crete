import React from 'react';

import Box from '@material-ui/core/Box'
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
// import ReactMarkdown from 'react-markdown';
import clsx from 'clsx';
// eslint-disable-next-line no-unused-vars
import { Link as RouterLink } from 'react-router-dom';

import { useStore } from '../../api';
import ActionLink from '../../components/ActionLink';
// import config from '../../config';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        '& *': {
            color: theme.palette.text.contrastText,
        },
    },
}));

export const Footer = (props) => {
    const classes = useStyles();
    const { contentStore } = useStore();
    const { footer } = contentStore.useFooter();

    return (
        <footer className={clsx(props.className, classes.footer)}>
            <Box disply='flex' flexDirection='cloumn' style={{ padding: '4rem' }} >
                <Typography variant='h3' style={{ paddingBottom: '2rem' }}>Zachary Weston</Typography>
                {footer && footer[0].fields.resources.map(res =>
                    <Typography gutterBottom style={{ paddingBottom: '0.8rem' }}>
                        <Link component={ActionLink} to={res.fields.action}>
                            {res.fields.value}
                        </Link>
                    </Typography>
                )}
                <Box display='flex' justifyContent='space-between' style={{ paddingTop: '2rem' }} alignItems='flex-end'>
                    <Typography >
                        <Link component={ActionLink} to={`/document/terms-of-service`}>
                            Terms of Service
                        </Link> &nbsp;| &nbsp;
                        <Link component={ActionLink} to={`/document/privacy-policy`}>
                            Privacy Policy
                        </Link>
                    </Typography>
                    <Typography >© 2020 Zachary Weston.</Typography>
                </Box>
            </Box>
        </footer>
    );
}


