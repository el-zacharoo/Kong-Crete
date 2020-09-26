import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import ReactMarkdown from 'react-markdown';
import { Link as RouterLink } from 'react-router-dom';
import ActionLink from '../../components/ActionLink';
import { HomeIcon } from '../../icons/HomeIcon';
import { useStore } from '../../api';
import config from '../../config';

const useStyles = makeStyles(theme => ({
    footer: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    links: {
        padding: theme.spacing(1.5)
    },
    logo: {
        // flexGrow: 1,
        display: 'flex',
        '& svg': {
            fontSize: '6rem',
        },
    },
}));

export const Footer = () => {
    const classes = useStyles();
    const { contentStore } = useStore();
    const { footer } = contentStore.useFooter();

    return (
        <footer className={classes.footer}>
            <Box display="flex" justifyItems="center">
                <Link component={RouterLink} to="/" className={classes.logo} aria-label="Home">
                    <HomeIcon alt="" />
                </Link>
            </Box>
            <Box display="flex" justifyContent="center" >
                <Typography variant="h4">0800 KONGCRETE</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
                {footer && footer[0].fields.resources.map(res =>
                    <Typography className={classes.links} gutterBottom style={{ paddingBottom: '0.8rem' }}>
                        <Link component={ActionLink} to={res.fields.action}>
                            {res.fields.value}
                        </Link>
                    </Typography>
                )
                }
            </Box>
        </footer>
    );
}
