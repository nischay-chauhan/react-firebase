import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './auth/AuthDetails';
function App() {
  return (
    <div className="App">
     <SignIn />
     <SignUp />
     <AuthDetails />
    </div>
  );
}

export default App;
