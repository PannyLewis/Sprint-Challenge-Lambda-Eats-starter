import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

// yup help with validation
const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "name must be at least 2 characters")
    .required("Name is a required field."),
  size: yup.string(),
  // I wanted the toppings to be optional so I chose .string() ver .boulean().onoftrue().  The boolean validation made it a requirement for user to check all boxes, so it had to be removed.
  pepperoni: yup.string(),
  sausage: yup.string(),
  bacon: yup.string(),
  anchovies: yup.string(),
  instructions: yup.string(),
});

function Form() {
  //   declare states and initialize to an object
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    pepperoni: "",
    sausage: "",
    bacon: "",
    anchovies: "",
    instructions: "",
  });

  //  we can also use state to hold errors
  const [errors, setErrors] = useState({
    name: "",
    size: "",
    pepperoni: "",
    sausage: "",
    bacon: "",
    anchovies: "",
    instructions: "",
  });

  // new state to set our post request too. So we can console.log and see it.
  const [post, setPost] = useState([]);

  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("is it valid", valid);
      setButtonDisabled(!valid);
    });
  }, [formState]);

  // this test and catches error on the yup formattor.  Similar to axios promises
  const validateChange = (e) => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  // this makes it so that whatever the user types in will be saved as values:
  const inputChange = (e) => {
    // console.log("show input", e.target.value);
    e.persist();
    let value =
      e.target.type === "checkbox" ? e.target.checkcked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    }); /* ... the ellipses are called spread operator, they copy over data */

    validateChange(e);
  };

  //   this works the submit button:
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data); // get just the form data from the REST api

        // reset form if successful
        setFormState({
          name: "",
          size: "",
          pepperoni: "",
          sausage: "",
          bacon: "",
          anchovies: "",
          instructions: "",
        });
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <form onSubmit={formSubmit}>
      <label>
        What is your name?
        <input
          type="text"
          name="name" /* name is computed key:value in [event.target.name]: event.target.value  */
          id="name"
          value={formState.name}
          onChange={inputChange}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>

      <label htmlFor="size">
        What size pizza would you like?
        <select id="size" name="size" onChange={inputChange}>
          <option value="null">Select ...</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
      </label>

      <label>
        Your choice of meat toppings
        <input
          type="checkbox"
          name="pepperoni"
          data-cy="checkbox"
          id="terms"
          checked={formState.pepperoni}
          onChange={inputChange}
        />
        pepperoni
      </label>

      <label>
        <input
          type="checkbox"
          name="sausage"
          data-cy="checkbox"
          id="terms"
          checked={formState.sausage}
          onChange={inputChange}
        />
        sausage
      </label>

      <label>
        <input
          type="checkbox"
          name="bacon"
          data-cy="checkbox"
          id="terms"
          checked={formState.bacon}
          onChange={inputChange}
        />
        bacon
      </label>

      <label>
        <input
          type="checkbox"
          name="anchovies"
          data-cy="checkbox"
          id="terms"
          checked={formState.anchovies}
          onChange={inputChange}
        />
        anchovies
      </label>

      <label htmlFor="instructions">
        Special instructions:
        <textarea
          name="instructions"
          value={formState.instructions}
          onChange={inputChange}
        />
        {errors.instructions.length > 0 ? (
          <p className="error">{errors.instructions}</p>
        ) : null}
      </label>

      <button data-cy="order" disabled={buttonDisabled}>
        Place order
      </button>

      {/* displaying our post request data */}
      <pre>Please review your order: {JSON.stringify(post, null, 2)}</pre>
    </form>
  );
}

export default Form;
