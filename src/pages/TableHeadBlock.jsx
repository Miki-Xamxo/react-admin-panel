import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    

}))

const TableHeadBlock = () => {

    const classes = useStyles();

    return (
        <TableHead>
            <TableRow>
                <TableCell>Слово</TableCell>
                <TableCell>Определение</TableCell>
                <TableCell>Категория</TableCell>
                <TableCell>Язык</TableCell>
                <TableCell>Действия</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default TableHeadBlock
