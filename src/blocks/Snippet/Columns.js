import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';


import { BlockPropTypes, Markdown } from '../shared';

const useStyles = makeStyles(theme => ({
    root: {
        // margin: '0 calc(50% - 50vw)',
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
        backgroundColor: theme.palette.background.default
    },
    copy: {
        marginTop: theme.spacing(0.5),
        // '&>* img': {
        //     maxWidth: '100%',
        // },
    },
    columns: {
        paddingTop: theme.spacing(2),
        // [theme.breakpoints.up('sm')]: {
        //     columnCount: "2",
        //     '& p:first-of-type': {
        //         marginTop: 0,
        //     }
        // },
        // columnGap: '40px',
        // wordBreak: 'break-word',
        // whiteSpace: 'normal',
    },
    image: {
        objectFit: 'contain',
        maxWidth: '100%',
    },
}));

export const Columns = ({ content }) => {
    const classes = useStyles();

    return (
        <Box display="flex" className={classes.root}>
            <Grid direction="row"
                justify="center"
                alignItems="center" contaiener>
                <Grid item xs={12} md={4}>
                    {/* {content.fields.image && */}
                    <img className={classes.image}
                        src={content.fields.image.fields.file.url}
                        title=""
                        alt={content.fields.image.fields.description ? `Image of ${content.fields.image.fields.description}` : ""}
                    />
                    {/* } */}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h2">{content.fields.title}</Typography>
                    <Typography className={clsx(classes.copy, classes.columns)} renderers={Markdown.renderers}>
                        {content.fields.copy}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>

                </Grid>
            </Grid>
        </Box>
    );
}

Columns.propTypes = BlockPropTypes;
Columns.defaultProps = {};