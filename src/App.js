import React from 'react'

import { Header, NavBar, Button, Table, TableHead, TableBody } from './components';
import Home from './pages/Home';

function App() {

  const [openMenu, setOpenMenu] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')

  const onClickOpneMenu = () => {
    setOpenMenu(true)
  }

  const onClickCloseMenu = () => {
    setOpenMenu(false)
  }

  const onChangeSearchValue = (e) => {
    setInputValue(e.target.value)
  }

  const onClickClearInput = () => {
    setInputValue('')
  }

  return (
    <div className="app">
      <NavBar onClickCloseMenu={onClickCloseMenu} opened={openMenu} />

      <Header onClickOpneMenu={onClickOpneMenu} />

      <div className='wrapper'>
        <div className='container'>
          <div className='content'>
            <div className='content-top'>
              <div className='form__search'>
                <form>
                  <input type='text'  placeholder='Поиск' value={inputValue} onChange={onChangeSearchValue} />
                  <div className='icon'>
                    {
                      inputValue 
                      ? <svg onClick={onClickClearInput} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                          <path d="M16.7266 4.5933C17.0911 4.22881 17.0911 3.63786 16.7266 3.27337C16.3621 2.90888 15.7712 2.90888 15.4067 3.27337L10 8.68007L4.5933 3.27337C4.22881 2.90888 3.63786 2.90888 3.27337 3.27337C2.90888 3.63786 2.90888 4.22881 3.27337 4.5933L8.68007 10L3.27337 15.4067C2.90888 15.7712 2.90888 16.3621 3.27337 16.7266C3.63786 17.0911 4.22881 17.0911 4.5933 16.7266L10 11.3199L15.4067 16.7266C15.7712 17.0911 16.3621 17.0911 16.7266 16.7266C17.0911 16.3621 17.0911 15.7712 16.7266 15.4067L11.3199 10L16.7266 4.5933Z" fill="#222426"/> 
                        </svg>
                      : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0109 11.5379C13.7384 10.5162 14.1663 9.2664 14.1663 7.91666C14.1663 4.46488 11.368 1.66666 7.91626 1.66666C4.46448 1.66666 1.66626 4.46488 1.66626 7.91666C1.66626 11.3684 4.46448 14.1667 7.91626 14.1667C9.26638 14.1667 10.5165 13.7386 11.5383 13.0107C11.5439 13.0166 11.5496 13.0224 11.5554 13.0282L15.6102 17.0833C16.017 17.4901 16.6765 17.4901 17.0833 17.0833C17.4901 16.6765 17.4901 16.017 17.0833 15.6102L13.0286 11.5551C13.0227 11.5493 13.0169 11.5435 13.0109 11.5379ZM7.9165 12.2135C10.2896 12.2135 12.2134 10.2897 12.2134 7.91665C12.2134 5.54355 10.2896 3.61977 7.9165 3.61977C5.54341 3.61977 3.61963 5.54355 3.61963 7.91665C3.61963 10.2897 5.54341 12.2135 7.9165 12.2135Z" fill="#a5acbd"/> 
                        </svg> 
                    }
                  </div>
                </form>
              </div>
              <Button>
                <span>Добавить</span>
              </Button>
            </div>
            <div className='content__table'>
              <Table>
                <TableHead>
                  <tr>
                    <th>Слово</th>
                    <th>Перевод</th>
                    <th>Категория</th>
                    <th>Язык</th>
                    <th>Действия</th>
                  </tr>
                </TableHead>
                <TableBody>
                  <tr>
                    <td>Врач</td>
                    <td>Лор</td>
                    <td>Медицина</td>
                    <td>Ингушский язык</td>
                    <td>
                      <Button className='btn-change'>
                        <span>Изменить</span>
                      </Button>
                      <Button className='btn-remove'>
                        <span>Удалить</span>
                      </Button>
                    </td>
                  </tr>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {/* <Home /> */}
    </div>
  );
}

export default App;
