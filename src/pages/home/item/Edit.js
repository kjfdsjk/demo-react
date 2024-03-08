import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {edit, getBlogs} from '../../../services/ItemService';

export default function Edit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    let st = useSelector(state => {
        return state.blogs.blogs.data.filter(i => i.id == id);
    })

    let handleEdit = async (id, values) => {
        await dispatch(edit({id, values}))
    }

    return (
        <Formik
            initialValues={st[0]}
            onSubmit={(values) => {
                handleEdit(values).then(() => {
                    navigate('/home');
                });
            }}
        >
            <Form>
                <Field type="text" name="title" placeholder="title" />
                <Field type="text" name="content" placeholder="content" />
                <Field type="text" name="status" placeholder="status" />
                <Field type="number" name="likeCount" placeholder="likeCount" />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </Form>
        </Formik>
    );
}
