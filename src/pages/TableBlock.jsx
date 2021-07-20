import React from 'react';
import {Table, TableContainer, Paper } from '@material-ui/core'

import TableHeadBlock from './TableHeadBlock'
import TableBodyBlock from './TableBodyBlock';

const TableBlock = () => {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHeadBlock />
                <TableBodyBlock />
                <TableBodyBlock />
            </Table>
        </TableContainer>
    )
}

export default TableBlock
