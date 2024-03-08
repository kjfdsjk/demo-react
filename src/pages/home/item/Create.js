import {useNavigate} from "react-router";
import axios from 'axios';
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {create} from "../../../services/ItemService";

export default function Create() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => {
        return state.users.currentUser
    })
    const handleAdd = (values) => {
        let data = {...values, user: {id: user.id}}
        dispatch(create(data))
        navigate('/home')
    }
    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                    status: '',
                    likeCount: ''
                }}
                onSubmit={(values) => {
                    handleAdd(values)
                }}
            >
                <Form>
                    <Field type="text" name="title" placeholder={"title"}/>
                    <Field type="text" name="content" placeholder={"content"}/>
                    <Field type="text" name="status" placeholder={"status"}/>
                    <Field type="number" name="likeCount" placeholder={"likeCount"}/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </>
    )
        ;
}