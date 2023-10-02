import './App.css'
import Columns from './components/Columns'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import Header from './components/Header'
import Home from './components/Home'
import Prompt from './components/Prompt'

function App() {

  return (
    <>
    <Prompt/>
    <Home/>
    <Greeting name="Natalia" mystyle="pink" bgcolor="yellow"/>
    <Greeting name="Joseph" mystyle="green"/>
    <Greeting name="Anna"/>
    
  </>
  )
}

export default App
