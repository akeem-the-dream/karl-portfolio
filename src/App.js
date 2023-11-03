import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider, connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Edentity } from "./components/Edentity";
import { Project } from "./components/Project";
import { Speaking } from "./components/Speaking";
import { mapStateToProps, mapDispatchToProps } from "./store/Selector";
import { storeReducer } from "./store/Reducer";
const store = createStore(storeReducer);

const Components = ({ Darkmode, toggle, displayModal, modalInfo }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/edentity" element={<Edentity />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer Darkmode={Darkmode} />
    </div>
  );
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Components);
function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
