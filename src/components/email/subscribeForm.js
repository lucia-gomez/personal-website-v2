import { useEffect, useState } from "react"

import { Button } from "../button"
import { EmailApi } from "../../scripts/api"
import Form from "react-bootstrap/Form"

export default function SubscribeForm({ setSuccess }) {
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState()

  useEffect(() => {
    setValidated(false)
  }, [])

  const handleSubmit = event => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setSuccess("LOADING")
      EmailApi.subscribe(email)
        .then(result => {
          console.log(result)
          setSuccess("SUCCESS")
        })
        .catch(err => {
          console.error(err)
          setSuccess("FAILED")
        })
    }
    setValidated(true)
  }

  return (
    <>
      <h3>Sign up for my newsletter</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            required
            label="I agree to receive emails, with the understanding that I may easily opt-out of these communications at any time after signing up."
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  )
}

// postData('https://0r72l.mjt.lu/wgt/0r72l/zgu/subscribe?c=2ce8ce67', data)
//         .then((response) => {
//                 if(!response.ok) {
//                     throw new Error('Server response is not ok.');
//                 } else if (successDiv && formElement[0]) {
//                 formElement[0].style.display = 'none';
//                 successDiv.style.display = null;
//               }
//         }).catch(() => {
//           if (errorDiv && formElement[0]) {
//             formElement[0].style.display = 'none';
//             errorDiv.style.display = null;
//           }
//         }).finally(() => {
//           // Unlock button, hide loader and show text
//           submitButton.removeAttribute('disabled');
//           hideLoader();
//         });
//     };

// async function postData(url = "", data = {}) {
//   return fetch(url, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
// }
