import React, { useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from "formik";
import { useNavigate, useParams } from "react-router";

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/students/${id}`)
            .then((res) => {
                const { name, description, score, action } = res.data;
                setInitialValues({ name, description, score, action });
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const [initialValues, setInitialValues] = React.useState({
        name: '',
        description: '',
        score: '',
        action: ''
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                axios.put(`http://localhost:8080/students/${id}`, values)
                    .then(() => {
                        alert('Thành công');
                        navigate('/');
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }}
        >
            <Form>
                <Field name='name' />
                <Field name='description' />
                <Field name='score' />
                <Field name='action' />
                <button type='submit'>Update</button>
            </Form>
        </Formik>
    );
}
