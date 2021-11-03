import { Redirect } from 'react-router'
import { useState, forwardRef } from 'react'
import { useFormik, Field, FormikProvider } from 'formik'
import { connect } from 'react-redux'
import * as yup from 'yup'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MuiAlert from '@mui/material/Alert'

import { auth, selectIsAuth } from '../../redux/reducers/authReducer'

import styles from './index.module.scss'

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
})

export const Login = ({ isAuth, login }) => {
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    })

    const [formErrors, setFormErrors] = useState([])

    const formik = useFormik({
        initialValues: { email: '', password: '', remember: [] },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const { email, password, remember } = values
            const rememberMe = Boolean(remember.length)
            const res = await login(email, password, rememberMe)
            setFormErrors(res.messages)
        },
    })

    const errors = formErrors.map((error, index) => (
        <Alert key={`error_${index}`} severity="error">
            {error}
        </Alert>
    ))

    if (isAuth) {
        return <Redirect to="/" />
    }

    return (
        <div className={styles.login}>
            <p className={styles.title}>Login</p>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <label htmlFor="remember">
                        <Field
                            type="checkbox"
                            name="remember"
                            value="remember"
                        />
                        Remember Me
                    </label>
                    {formErrors && errors}
                    <Button
                        className={styles.btn}
                        type="submit"
                        variant="contained"
                        color="secondary"
                    >
                        Login
                    </Button>
                </form>
            </FormikProvider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: selectIsAuth(state)
    }
}
export const LoginContainer = connect(mapStateToProps, {
    login: auth.login,
})(Login)
