import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Helmet } from "react-helmet";
import LoginPage from './components/LoginPage';
import Quiz from './components/Quiz';
import Contact from './components/Contact';
import About from './components/About';
// import LayoutPage from './components/LayoutPage';
import Error from './components/Error';
import Protected from './components/Protected';
import Home from './components/Home';
import LogOut from './components/LogOut';
import { createContext, useReducer } from 'react';
import LayoutPage from './components/LayoutPage';


//contaxtAPI
export const UserContext = createContext();

const Routing=()=>{
  return(
    <BrowserRouter>
       <Routes>
        <Route path ='/' element={<Protected Component={Home}/>} />
        <Route path='login' element={<LoginPage />} />
        <Route  path='logout' element={<LogOut />} />
        <Route path='/quiz' element={<Protected Component={Quiz}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Error />} />
       </Routes>
    </BrowserRouter>
  );
}

 const App =()=> {
  const [state, dispatch]= useReducer(useReducer)
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>MarkTine Quiz Game</title>
        <link rel="#" href="https://marktine.com/" />
      </Helmet>
      
     <UserContext.Provider value={{state, dispatch}}>
      <LayoutPage />
      <Routing />
      </UserContext.Provider>
    </>
   
  );
}
export default App;
