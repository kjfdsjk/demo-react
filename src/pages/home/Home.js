import Navbar from "../../components/Navbar";
import List from "./item/List";
import {Outlet} from "react-router";

export default function Home() {
    return (
        <>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Navbar></Navbar>
                </div>
                <Outlet>
                    <List></List>
                </Outlet>
            </div>
        </>
    )
}