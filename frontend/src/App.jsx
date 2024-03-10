
import { Routes, Route } from 'react-router-dom';
import HomeBooks from './pages/HomeBooks';
import CreateBooks from './pages/CreateBooks';
import ShowBooks from './pages/ShowBooks';
import EditBooks from './pages/EditBooks';
import DeleteBooks from './pages/DeleteBooks';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeBooks />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  )
}

export default App
