import { VideosList } from './componenets/VideosList';
import { ListExp } from './componenets/ListExp';
import { Header } from './layout/Header';
import { NotFound } from './componenets/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<VideosList />}/>
        <Route path='/list-exp' element={<ListExp />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
