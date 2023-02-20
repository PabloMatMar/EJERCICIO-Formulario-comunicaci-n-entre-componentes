import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import { userContext } from './context/userContext';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({}); 
  const login = (user) => setUser(user); 
  const logout = () => setUser(""); 
  const data = {
    user,
    login,
    logout
  }
  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={data}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
