import * as yup from 'yup'

const contactShema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  phone: yup
    .string()
    .matches(/\+(\d[\d\s\-()]{0,14}\d)/, 'Phone number is not valid')
    .required('Phone is required'),
  message: yup.string().required('Message is required'),
  terms: yup.bool().oneOf([true], 'Terms must be accepted').required('Terms must be accepted'),
})

export default contactShema
