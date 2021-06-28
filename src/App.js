import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
    
  )
 
}

// class component

/*
import react from 'react'


class App extends react.Component {
  render(){
    return(
        <h1>Hello from class</h1>
    )
  }
}
*/

export default App;
