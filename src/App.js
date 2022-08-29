import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import MainRoute from "./route/MainRoute";
import ContentsRoute from "./route/ContentsRoute";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={ <MainRoute /> } />
            <Route path="/contents" element={ <ContentsRoute /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
