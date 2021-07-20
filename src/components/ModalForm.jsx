import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, Select } from '@material-ui/core'

import { SelectInput } from './index'
import Button from './Button'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 215,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    inputLabel: {
        backgroundColor: 'red'
    },
}));

const ModalForm = ({onClickCloseModal}) => {

    const classes = useStyles();
    const [activeCategory, setActiveCategory] = React.useState('');
    const [activeLanguage, setActiveLanguage] = React.useState(10);

    const onHandlerCloseModal = () => {
        onClickCloseModal()
    }

    const handleChangeCategory = (event) => {
        setActiveCategory(event.target.value);
    };
    
    const handleChangeLanguage = (event) => {
        setActiveLanguage(event.target.value);
    };

    return (
        <>
        <div className='overlay' onClick={onHandlerCloseModal}></div>
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__header">
                        <span>Добавить слово</span>
                    </div>
                    <div className='modal__body'>
                        <form className='form' onSubmit={(e) => e.preventDefault()}>
                            <div className='form__group'>
                                <input type="text" className='form__input' placeholder=' '/>
                                <label className='form__label'>Введите слово</label>
                            </div>
                            <div className='form__group'>
                                <input type="text" className='form__input' placeholder=' ' />
                                <label className='form__label'>Определение</label>
                            </div>
                            <div className='form__group'>
                                <SelectInput classes={classes}>
                                    <InputLabel shrink className={classes.InputLabel}>
                                        Категории
                                    </InputLabel>
                                    <Select
                                        value={activeCategory}
                                        onChange={handleChangeCategory}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="">
                                            <em>Не выбран</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Медицина</MenuItem>
                                        <MenuItem value={20}>Одежда</MenuItem>
                                        <MenuItem value={30}>Растения</MenuItem>
                                    </Select>
                                </SelectInput>
                            </div>
                            <div className='form__group'>
                                <SelectInput classes={classes}>
                                    <InputLabel shrink className={classes.InputLabel}>
                                        Языки
                                    </InputLabel>
                                    <Select
                                        value={activeLanguage}
                                        onChange={handleChangeLanguage}
                                        displayEmpty
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value={10}>Ингушский язык</MenuItem>
                                        <MenuItem value={20}>Чеченский язык</MenuItem>
                                    </Select>
                                </SelectInput>
                            </div>
                            <Button className='form__button'>
                                <span>Добавить</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            </>
        // </div>
    )
}

export default ModalForm
