import { Redirect } from 'react-router'
import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { auth } from '../../redux/reducers/authReducer'

import styles from './index.module.scss'

export const Login = ({ isAuth, authoriseMe }) => {
    if (isAuth) {
        return <Redirect to="/" />
    }

    const onSubmit = async (values, { setSubmitting }) => {
        const { email, password, remember } = values
        const rememberMe = Boolean(remember.length)
        await authoriseMe(email, password, rememberMe)
        setSubmitting(false)
    }

    return (
        <div className={styles.login}>
            <p className={styles.title}>Login</p>
            <Formik
                initialValues={{ email: '', password: '', remember: [] }}
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
                onSubmit={onSubmit}
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
                    <Form onSubmit={handleSubmit} className={styles.form}>
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

                        <label htmlFor="remember">
                            <Field
                                type="checkbox"
                                name="remember"
                                value="remember"
                            />
                            Remember Me
                        </label>

                        <Button
                            className={styles.btn}
                            type="submit"
                            disabled={isSubmitting}
                            variant="contained"
                            color="secondary"
                        >
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export const LoginContainer = connect(mapStateToProps, {
    authoriseMe: auth.authoriseMe,
})(Login)
