import { useField } from "formik";
import { Form } from "react-bootstrap";

const Input = ({ type, label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field.value)
  return (
    <Form.Group style={{ marginBottom: 20 }}>
      <Form.Label style={{ fontWeight: "600" }}>{label}</Form.Label>
      <Form.Control type={type} {...field} {...props} />
      {meta.touched && meta.error ? (
        <Form.Text className="text-danger">{meta.error}</Form.Text>
      ) : null}
    </Form.Group>
  );
};

export default Input;
