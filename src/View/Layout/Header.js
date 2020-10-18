import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';


import { useMenu } from '../../api';
import ActionLink from '../../components/ActionLink';
import { HomeIcon } from '../../icons/HomeIcon';

const useStyles = makeStyles(theme => ({
    spacer: {
        flexGrow: 1,
    },
    logo: {
        display: 'flex',
        '& svg': {
            margin: theme.spacing(1.5),
            fontSize: '3rem',
        },
    },
    button: {
        margin: theme.spacing(1.5),
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: "transparent",
        '&:hover': {
            borderBottomColor: theme.palette.primary.main,
            background: "transparent",
        },
    },
    selected: {
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
    },
    scrollMenu: {
        background: theme.palette.background.default,
        // '& svg': {
        //     fill: theme.palette.text.primary,
        // },
        '& h6, & a': {
            color: theme.palette.primary.main,
            '&:hover': {
                borderBottomColor: theme.palette.primary.main,
            },
        },
    },
    detailMenu: {
        background: theme.palette.background.paper,
    },
    offset: theme.mixins.toolbar,
}));

export const Header = () => {
    const classes = useStyles();
    const { menuItems } = useMenu();
    // const { loginWithRedirect, logout, user } = useAuth0();
    const [anchorEl, setAnchorEl] = useState(null);

    const title = useLocation().pathname
    const selected = title.split("/")[1];

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorEl(null);
    };

    let level = 0;
    if (title) {
        level = (title.match(/\//g) || []).length;
    }

    return (<>
        <OnScroll level={level}>
            <AppBar position="fixed" elevation={0}>
                <Toolbar>
                    <Box flexGrow={1}>
                        <Link component={ActionLink} to="/" className={classes.logo} aria-label="Home" data-testid="menu-home">
                            <HomeIcon alt="" />
                        </Link>
                    </Box>
                    {/* sm+ full menu */}
                    <Hidden smDown><>
                        <Box >
                            {menuItems && menuItems.map((item, index) => {
                                let title, uri
                                if (item.sys.contentType.sys.id === 'resource') {
                                    title = item.fields.value
                                    uri = item.fields.action
                                } else {
                                    title = item.fields.title
                                    uri = item.fields.slug
                                }
                                return (
                                    title &&
                                    <Button key={index}
                                        component={ActionLink} to={`/${uri}`}
                                        className={clsx(classes.button, (selected === uri ? classes.selected : ""))}
                                        aria-label={title}
                                        data-testid="menu-md"
                                        color="primary"
                                    >
                                        {title}
                                    </Button>
                                )
                            })}
                            <Button variant="contained" color="primary">Contact</Button>
                        </Box>

                    </></Hidden>
                    {/* xs popup menu */}
                    <Hidden mdUp>
                        <Box className={classes.spacer} />
                        <IconButton edge="start"
                            color="primary"
                            onClick={openMenu}
                            aria-haspopup="true"
                            aria-label="menu"
                            aria-controls="simple-menu">
                            <MenuIcon />
                        </IconButton >
                        <Menu id="simple-menu"
                            elevation={1}
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={closeMenu}
                        >
                            {menuItems && menuItems.map((item, index) => {
                                let title, uri
                                if (item.sys.contentType.sys.id === 'resource') {
                                    title = item.fields.value
                                    uri = item.fields.action
                                } else {
                                    title = item.fields.title
                                    uri = item.fields.slug
                                }
                                return (
                                    title &&
                                    <MenuItem key={index} component={ActionLink} to={`/${uri}`}
                                        aria-label={title} onClick={closeMenu}>
                                        {title}
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </OnScroll>
        <Box className={classes.offset} />
    </>);
}

const OnScroll = ({ level, children }) => {
    const classes = useStyles();
    const scrolling = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,

    });

    return React.cloneElement(children, {
        className: scrolling || level > 1 ? classes.detailMenu : classes.scrollMenu,
        elevation: scrolling ? 1 : 0,
    });
};

