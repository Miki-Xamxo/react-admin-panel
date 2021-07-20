import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Drawer, IconButton, 
            List, ListItem, ListItemText,  InputBase, Paper, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom'
import TableBlock from './TableBlock';


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
    inputSearch: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    link: {
        color: '#000'
    },

    container: {
        width: '1000px',
        margin: '0 auto',
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

    contentTop: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '50px',
    }
}));



function Home() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [inputValue, setInputValue] = React.useState('')

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const onChangeSearchValue = (e) => {
        setInputValue(e.target.value)
    }

    const onClickClearInput = () => {
        setInputValue('')
    }

    return (
        <div className={classes.wrapper}>
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
                <div className={classes.container}>
                    <div className={classes.content} />
                        <div className={classes.contentTop}>
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    value={inputValue}
                                    className={classes.inputSearch}
                                    onChange={onChangeSearchValue}
                                    placeholder="Поиск"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                {
                                    inputValue 
                                        ?   <IconButton onClick={onClickClearInput} className={classes.iconButton}  aria-label="search">
                                                <ClearIcon />
                                            </IconButton>
                                        :   <IconButton  className={classes.iconButton} aria-label="search" disabled>
                                                <SearchIcon />
                                            </IconButton>
                                }
                            </Paper>
                            <Button variant="contained" color="primary" disableElevation>
                                Добавить
                            </Button>
                        </div>
                        <div className={classes.contentTable}>
                            <TableBlock />
                        </div>
                </div>
            </main>
        </div>
    );
}

export default Home