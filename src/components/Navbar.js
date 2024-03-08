import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogs} from "../services/ItemService";
import {useNavigate} from "react-router";

export default function Navbar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => {
        console.log(state)
        return state.users.currentUser
    });
    useEffect(() => {
        dispatch(getBlogs());
    }, []);
    const handleLogout = () => {
        localStorage.clear();
        navigate('/')
    }
    return (
        <div className={'row'}>
            <div className={'col-12'}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={''}>LOGO</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to={''}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'create'}>Create</Link>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0">
                                {user.username}
                                    <button className="ml-2 btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}