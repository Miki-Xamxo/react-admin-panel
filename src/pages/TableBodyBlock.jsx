import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import { Button, TableCell, TableRow, TableBody} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    btnRemove: {
        backgroundColor: 'red',
        padding: '5px 10px',

        '&:hover': {
            backgroundColor: '#da221e'
        }
    },

    btnChange: {
        marginRight: 20,
        padding: '5px 10px',
    }
}))


const TableBodyBlock = () => {

    const classes = useStyles();

    return (
        <TableBody>
            <TableRow hover role="checkbox">
                <TableCell>Врач</TableCell>
                <TableCell>Лор</TableCell>
                <TableCell>Медицина</TableCell>
                <TableCell>Ингушский язык</TableCell>
                <TableCell>
                    <Button variant="contained" color="secondary" className={classes.btnChange}>
                        Изменить
                    </Button>
                    <Button variant="contained" color="primary" className={classes.btnRemove}>
                        Удалить
                    </Button>
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default TableBodyBlock
