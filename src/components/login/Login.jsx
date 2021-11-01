import { Redirect } from 'react-router'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import styles from './index.module.scss'

export const Login = ({ isAuth }) => {
    if (isAuth) {
        return <Redirect to="/" />
    }
    return (
        <div className={styles.login}>
            <p className={styles.title}>Login</p>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'Required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = 'Invalid email address'
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <TextField
                        className={styles.input}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <TextField
                        className={styles.input}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <Checkbox label="Remember me"/>
                        <Button
                            className={styles.btn}
                            type="submit"
                            disabled={isSubmitting}
                            variant="contained"
                            color="secondary"
                        >
                            Login
                        </Button>
                    </form>
                )}
            </Formik>
        </div>
    )
}
