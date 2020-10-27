import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { BlockPropTypes } from '../shared';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(15),
        background: theme.palette.background.paper,
        margin: '0 calc(50% - 50vw)',
    },
}));

export const Centred = ({ content }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography align="center" variant="h2">{content.fields.title}</Typography>
            <Typography align="center" variant="h4">
                {content.fields.copy}
            </Typography>
            <Typography align="center" variant="h5">
                {content.fields.description}
            </Typography>
        </Box>
    );
}

Centred.propTypes = BlockPropTypes;
Centred.defaultProps = {};