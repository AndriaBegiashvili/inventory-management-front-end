import ListItem from './pages/ListItem';
import AddItem from './pages/AddItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {

 


  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListItem />}/>
        <Route path='/add' element={<AddItem />} />

    </Routes>
    </Router>
  );
}

export default App