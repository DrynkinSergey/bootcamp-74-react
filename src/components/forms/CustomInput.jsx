import { ErrorMessage, Field } from 'formik';

const CustomInput = ({ label, name, s, type = 'text' }) => {
  return (
    <label>
      <span>{label}</span>
      <Field name={name} type={type} />
      <ErrorMessage name={name} component='p' className={s.error} />
    </label>
  );
};
export default CustomInput;
