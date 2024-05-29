import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SavedLists from './pages/SavedLists';

function App() {
  const [savedLists, setSavedLists] = useState([]);

  const saveList = (listName, movies) => {
    const newList = { listName, movies };
    setSavedLists([...savedLists, newList]);
  };

  const deleteList = (index) => {
    const updatedLists = [...savedLists];
    updatedLists.splice(index, 1);
    setSavedLists(updatedLists);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home saveList={saveList} />} />
          <Route
            path='/saved'
            element={<SavedLists savedLists={savedLists} onDeleteList={deleteList} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
