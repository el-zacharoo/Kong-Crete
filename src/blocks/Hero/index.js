import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import { BlockPropTypes } from '../shared';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(10),
        margin: '0 calc(50% - 50vw)',
    },
    image: {
        width: "100%"
    },
    paper: {
        width: "100%"
    },
    typography: {
        padding: theme.spacing(4),
        alignContent: 'center',
    },
    subText: {
        maxWidth: theme.spacing(57),
    },
}));

export const Hero = ({ content }) => {
    const classes = useStyles(content);

    return (
        <>
            <Box display="flex" justifyContent="center" className={classes.root} >
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6}>
                        <Box className={classes.typography}>
                            <Typography color="secondary" variant="subtitle1" data-testid="headline">{content.fields.subHeading}</Typography>
                            <Typography color="primary" variant="h1" data-testid="headline">{content.fields.headline}</Typography>
                            <Box display="flex" justifyContent="center">
                                <Typography className={classes.subText} variant="subtitle1" color="textSecondary" data-testid="copy">{content.fields.copy}</Typography>
                            </Box>
                            {content.fields.ctaLabel &&
                                <Box paddingTop="4rem" display="flex" >
                                    <Button to={content.fields.ctaAction} variant="contained" color="primary">{content.fields.ctaLabel}</Button>
                                </Box>
                            }
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Paper className={classes.paper} elevation={0} >
                            <img data-testid="heroImage" className={classes.image}
                                src={content.fields.image.fields.file.url}
                                alt={content.fields.image.fields.description ? `Image of ${content.fields.image.fields.description}` : ""} />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

Hero.propTypes = BlockPropTypes;
Hero.defaultProps = {};