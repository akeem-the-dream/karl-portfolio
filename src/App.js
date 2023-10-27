import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { mapStateToProps, mapDispatchToProps } from "./store/Selector";
import { storeReducer } from "./store/Reducer";
const store = createStore(storeReducer);

const Components = ({ Darkmode, toggle, displayModal, modalInfo }) => {
  return (
    <div className="App">
      <NavBar Darkmode={Darkmode} toggle={toggle} />
      <Home></Home>
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
