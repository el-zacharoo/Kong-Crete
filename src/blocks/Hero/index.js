import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { BlockPropTypes } from '../shared';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 calc(50% - 50vw)',
    },
    image: {
        objectFit: 'contain',
        maxWidth: '100%',
    },
}));

export const Hero = ({ content }) => {
    const classes = useStyles(content);

    return (
        <Box className={classes.root}>
            <Grid alignItems="flex-end" container spacing={4}>
                <Grid item sm={12} md={8}>
                    <img data-testid="heroImage" className={classes.image}
                        src={content.fields.image.fields.file.url}
                        alt={content.fields.image.fields.description ? `Image of ${content.fields.image.fields.description}` : ""} />
                </Grid>
                <Grid item sm={12} md={4}>
                    <Typography color="secondary" variant="subtitle1" data-testid="title">{content.fields.subHeading}</Typography>
                    <Box paddingTop="3rem">
                        <Typography variant="h1" data-testid="headline">{content.fields.headline}</Typography>
                    </Box>
                    <Typography variant="h5" data-testid="copy">{content.fields.copy}</Typography>
                    <Hidden smDown>
                        <Box paddingTop="5rem">
                            <IconButton>
                                <ArrowDownwardIcon />
                            </IconButton>
                        </Box>
                    </Hidden>
                </Grid>
            </Grid>
        </Box>
    );
}

Hero.propTypes = BlockPropTypes;
Hero.defaultProps = {};