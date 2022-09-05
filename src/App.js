import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import MainRoute from "./route/MainRoute";
import ContentsRoute from "./route/ContentsRoute";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DashboardRoute from "./route/DashboardRoute";
import HuntRoute from "./route/HuntRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={ <MainRoute /> } />
            <Route path="/contents" element={ <ContentsRoute /> } />
            <Route path="/dashboard" element={ <DashboardRoute /> } />
            <Route path="/hunt" element={ <HuntRoute />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
