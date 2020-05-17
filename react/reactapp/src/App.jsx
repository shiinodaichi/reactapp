import React from 'react';
import Booklist from './components/Booklist';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const languages = ['React', 'Vue','Angular'];
  //入力時に"books"を追加して出力する関数を定義
  const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
    console.log(keyword);
  }
  
  return (
    <BrowserRouter>
    <div class="d-flex align-items-center p-3 my3 text-white-50 bg-purple rounded box-shadow">
      <h1 class="mb-0 text-white">books recommend app</h1>
    </div>
    <div>
      <ul>
        <li className="button"> <Link to='/'>React</Link> </li>
        <li className="button"> <Link to='/vue'>Vue</Link> </li>
        <li className="button"> <Link to='/angular'>Angular</Link> </li>
      </ul>
    <hr/>
      <Route 
        exact 
        path='/' 
        render={
          props => 
          <Booklist
            language={languages[0]}
            getData={keyword => getDataFromAPI(keyword)}
          />
        }
      />

      <Route 
        path='/vue'
        render={
          props => 
          <Booklist
            language={languages[1]}
            getData={keyword => getDataFromAPI(keyword)}
          />
        }
      />

      <Route
        path='/angular'
        render={
          props =>
          <Booklist
            language={languages[2]}
            getData={keyword => getDataFromAPI(keyword)} 
          />
        }
      />
      </div>
      </BrowserRouter>
  );
}

export default App;
