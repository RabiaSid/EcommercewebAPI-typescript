import Form from 'react-bootstrap/Form';

type InputProps = {
    type?: string,
    placeholder:string
}
export default function Input(props: InputProps) {
const {type, placeholder}  = props

  return (
    <Form.Control
    className='my-3 input-form'
        // type="text"
        type={type}
        style={{borderRadius:0,
            height:'8vh'
        }}
        placeholder={placeholder}

      />
  )
}
