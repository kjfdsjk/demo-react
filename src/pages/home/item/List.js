import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function List() {
    const [list, setList] = useState([]);

    useEffect(() => {
        loadList();
    }, []);

    const loadList = () => {
        axios.get('http://localhost:8080/students')
            .then((res) => setList(res.data))
            .catch((error) => console.error("Error loading list:", error));
    };

    const handleEditClick = (itemId) => {
        axios.get(`http://localhost:8080/students/${itemId}`)
            .then((res) => console.log("Item for edit:", res.data))
            .catch((error) => console.error("Error loading item for edit:", error));
    };

    const handleDeleteClick = (itemId) => {
        axios.delete(`http://localhost:8080/students/${itemId}`)
            .then(loadList)
            .catch((error) => console.error("Error deleting item:", error));
    };

    return (
        <>
            <div className={'row'}>
                <div className={'col-12'}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Score</th>
                            <th scope="col">Action</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.score}</td>
                                <td>
                                    <button onClick={() => handleEditClick(item.id)}>
                                        <Link to={`/edit/${item.id}`}>Edit</Link>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
