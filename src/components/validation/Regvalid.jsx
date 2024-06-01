import * as Yup from 'yup';

const Regvalid = Yup.object({
    full_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required("Email address required."),
    password: Yup.string()
        .min('6')
        .required('please enter your password'),
    confirm_pass: Yup.string()
        .required('please enter your password again'),
  })

export default Regvalid