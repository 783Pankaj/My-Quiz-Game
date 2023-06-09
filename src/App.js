import './App.css';
import Footer from './Footer';
import Quiz from './components/Quiz';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
       <Helmet>
                <meta charSet="utf-8" />
                <title>MarkTine Quiz Game</title>
                <link rel="#" href="https://marktine.com/" />
            </Helmet>
    <Quiz />
    <Footer />
    </div>
  );
}

export default App;
