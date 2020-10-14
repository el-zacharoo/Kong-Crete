import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import { BlockPropTypes } from '../shared';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(10),
        // background: theme.palette.background.paper,
        margin: '0 calc(50% - 50vw)',
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(100)
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(120)
        },
    },
    paper: {
        borderRadius: '0.3rem',
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(100)
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(120)
        },
    },
    typography: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        maxWidth: theme.spacing(78),
        alignContent: 'center',
    },
    subText: {
        maxWidth: theme.spacing(57),
    }
}));

export const Hero = ({ content }) => {
    const classes = useStyles(content);

    return (
        <>
            <Box display="flex" justifyContent="center" className={classes.root} >
                <Box className={classes.typography}>
                    <Typography className={classes.typography} align='center' color="secondary" variant="h5" data-testid="headline">{content.fields.subHeading}</Typography>
                    <Typography className={classes.typography} align='center' color="secondary" variant="h1" data-testid="headline">{content.fields.headline}</Typography>
                    <Box display="flex" justifyContent="center">
                        <Typography className={classes.subText} align='center' variant="subtitle1" color="textSecondary" data-testid="copy">{content.fields.copy}</Typography>
                    </Box>
                </Box>
            </Box>
            {content.fields.ctaLabel &&
                <Box justifyContent="center" paddingBottom="4rem" display="flex" >
                    {/* <Button component={ActionLink} to={content.fields.ctaAction} variant="contained" color="primary">{content.fields.ctaLabel}</Button> */}
                </Box>
            }
            <Box justifyContent="center" display="flex" >
                <Paper className={classes.paper} elevation={0} >
                    <img data-testid="heroImage" className={classes.image}
                        src={content.fields.image.fields.file.url}
                        alt={content.fields.image.fields.description ? `Image of ${content.fields.image.fields.description}` : ""} />
                </Paper>
            </Box>
        </>
    );
}

Hero.propTypes = BlockPropTypes;
Hero.defaultProps = {};