import { useField } from "formik";
import { Form } from "react-bootstrap";

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group style={{marginBottom: 20}}>
      <Form.Label style={{fontWeight: '600'}}>{label}</Form.Label>
      <Form.Select {...field} {...props}>
        {props.children}
      </Form.Select>
      {meta.touched && meta.error ? (
        <Form.Text className="text-danger">{meta.error}</Form.Text>
      ) : null}
    </Form.Group>
  );
};

export default Select;
