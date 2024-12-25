import Main from './components/Main'
import Menu from './components/Menu'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
