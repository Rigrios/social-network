
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './Components/Content/Profile/Profile'

function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className='main'>
          <NavBar />
          <div className='content'>
                    <Route path='/profile' render={() => <Profile posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
          </div>
        </main>
      </div>
    </BrowserRouter>

);
}

export default App;
