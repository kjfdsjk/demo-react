import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../../services/ItemService";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export default function List() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs.blogs.data);

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);


    return (
        <div className="row">
            <div className="col-12">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Status</th>
                        <th scope="col">LikeCount</th>
                        <th scope="col">User</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {blogs && blogs.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{item.status}</td>
                            <td>{item.likeCount}</td>
                            <td>{item.user.username}</td>
                            <td>
                                <button>
                                    <Link to={`edit/${item.id}`}>
                                        Edit
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
