import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import Create from "./pages/home/item/Create";
import Edit from "./pages/home/item/Edit";
import List from "./pages/home/item/List";

function App() {
    return (
        <div className={'container-fluid'}>
            <Routes>
                <Route path={''} element={<Login/>}></Route>
                <Route path={'register'} element={<Register/>}></Route>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<List/>}></Route>
                    <Route path={'create'} element={<Create/>}></Route>
                    <Route path={'edit'} element={<Edit/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
