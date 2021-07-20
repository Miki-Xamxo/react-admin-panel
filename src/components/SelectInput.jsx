import React from 'react';
import FormControl from '@material-ui/core/FormControl';


const  SelectInput = ({ children, classes }) => {
    
    return (
        <div>
        <FormControl className={classes.formControl}>
            { children }
        </FormControl>
        </div>
    );
}

export default SelectInput