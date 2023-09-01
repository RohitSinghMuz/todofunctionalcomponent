import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
interface Product {
  firstName: string;
  lastName: string;
  email: string | number;
  city: string;
  pinCode: string;
}
const Form: React.FC = () => {
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [pinCode, setPinCode] = useState<string>("");
  const navigate = useNavigate();
  const [errorsCheck, setErrorsCheck] = useState({
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      pinCode: "",
    },
  });
  const [data, setData] = useState<Product[]>([]);

  const validateForm = () => {
    let errors = {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      pinCode: "",
    };
    if (!firstName) {
      errors.firstName = "firstName is required";
    } else if (firstName.length < 3) {
      errors.firstName = "firstName must be at least 3 characters";
    }
    if (!lastName) {
      errors.lastName = "Last Name is required";
    } else if (lastName.length < 3) {
      errors.lastName = "Last Name must be at least 3 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!city) {
      errors.city = "City is required";
    } else if (city.length < 6) {
      errors.city = "City must be at least 3 characters";
    }
    if (!pinCode) {
      errors.pinCode = "pincode is required";
    } else if (pinCode.length < 3) {
      errors.pinCode = "pincode must be at least 6 number";
    }
    setErrorsCheck({ errors });
  };
  const handleSubmit = () => {
    validateForm();
    let arr = {
      firstName,
      lastName,
      email,
      city,
      pinCode,
    };
    setData([...data, arr]);
    navigate("/");
    console.log(firstName, lastName, email, city, pinCode);
    console.log("data-----", data, arr);
  };
  return (
    <Box>
      <Typography sx={Styles.formSrtyle}>Form</Typography>

      <Box sx={Styles.formViewStyle}>
        <Box sx={Styles.textFieldViewStyle}>
          <TextField
            data-testid="firstNameId"
            sx={Styles.inputStyle}
            fullWidth
            placeholder="First Name"
            id="fullWidth"
            onBlur={validateForm}
            onChange={(e) => setfirstName(e.target.value)}
          />
          {errorsCheck.errors.firstName && (
            <Typography sx={Styles.errrorText}>
              {errorsCheck.errors.firstName}
            </Typography>
          )}
          <TextField
            data-testid="lastNameId"
            sx={Styles.inputStyle}
            fullWidth
            placeholder="Last Name"
            id="fullWidth"
            onBlur={validateForm}
            onChange={(e) => setlastName(e.target.value)}
          />
          {errorsCheck.errors.lastName && (
            <Typography sx={Styles.errrorText}>
              {errorsCheck.errors.lastName}
            </Typography>
          )}
          <TextField
            data-testid="emailId"
            sx={Styles.inputStyle}
            fullWidth
            placeholder="email"
            onBlur={validateForm}
            id="fullWidth"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorsCheck.errors.email && (
            <Typography sx={Styles.errrorText}>
              {errorsCheck.errors.email}
            </Typography>
          )}
          <TextField
            data-testid="cityId"
            sx={Styles.inputStyle}
            fullWidth
            placeholder="City"
            id="fullWidth"
            onBlur={validateForm}
            onChange={(e) => setCity(e.target.value)}
          />
          {errorsCheck.errors.city && (
            <Typography sx={Styles.errrorText}>
              {errorsCheck.errors.city}
            </Typography>
          )}
          <TextField
            data-testid="pincodeId"
            sx={Styles.inputStyle}
            fullWidth
            placeholder="Pin Code"
            id="fullWidth"
            onBlur={validateForm}
            onChange={(e) => setPinCode(e.target.value)}
          />
          {errorsCheck.errors.pinCode && (
            <Typography sx={Styles.errrorText}>
              {errorsCheck.errors.pinCode}
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          data-testid="btnsubmitt"
          variant="contained"
          onClick={handleSubmit}
        >
          Submitt
        </Button>
      </Box>
    </Box>
  );
};

const Styles = {
  formSrtyle: {
    textAlign: "center",
    fontfamily: "poppins",
    fontSize: { lg: "24px", md: "20px", ms: "18px", xs: "16px" },
  },
  formViewStyle: {
    display: "flex",
    justifyContent: {
      lg: "space-around",
      md: "space-around",
      sm: "space-around",
      xs: "center",
    },
  },
  errrorText: {
    margin: "0px 25px",
  },
  textFieldViewStyle: {
    width: { lg: 600, md: 700, sm: 700, xs: 300 },
    display: "flex",
    flexWrap: "wrap",
    flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
    justifyContent: {
      lg: "space-between",
      md: "space-between",
      sm: "space-between",
      xs: "center",
    },
    margin: { lg: "20px", md: "20px", sm: "10px", xs: "5px" },
  },
  inputStyle: {
    margin: { lg: "20px", md: "20px", sm: "10px", xs: "5px" },
  },
};

export default Form;
