import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Drawer, IconButton, List, ListItem, ListItemText, CssBaseline, Container, Typography, TextField, FormControl, InputLabel, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
    },
    header: {
        backgroundColor: '#1563f3',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    link: {
        color: '#000'
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(6),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },

    textField: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,

        '&:after': {
            borderBottomColor: '#1563f3',
        },
        // backgroundColor: '#1563f3',  
    },

    inputLabel: {
        color:'#1563f3'
    },
    
    inputBase: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

function Home() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.wrapper}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.header} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <List>
                    <Link to='/word'>
                        <ListItem 
                            button
                            className={classes.link}
                            selected={selectedIndex === 0}
                            onClick={() => handleListItemClick(0)}
                        >
                            <ListItemText>Слова</ListItemText>
                        </ListItem>
                    </Link>
                    <Link to='/category'>
                        <ListItem 
                            button
                            className={classes.link}
                            selected={selectedIndex === 1}
                            onClick={() => handleListItemClick(1)}
                        >
                            <ListItemText>Категории</ListItemText>
                        </ListItem>
                    </Link>
                    <Link to='/language'>
                        <ListItem 
                            button
                            className={classes.link}
                            selected={selectedIndex === 2}
                            onClick={() => handleListItemClick(2)}
                        >
                            <ListItemText>Языки</ListItemText>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <main>
                <Container fixed>
                    <div className={classes.content} />
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField 
                            className={classes.textField} 
                            id="standard-basic" 
                            label="Введите слово"
                            type='text'
                            // InputProps={{
                            //     className: classes.textField
                            // }}
                        />
                    </form>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="word">Введите слово</InputLabel>
                        <InputBase className={classes.inputBase} id="word" />
                    </FormControl>
                </Container>
            </main>
        </div>
    );
}

export default Home