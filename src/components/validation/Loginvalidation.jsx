import * as Yup from 'yup';

const Loginvalidation = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(6)
        .required('password required'),
})

export default Loginvalidation