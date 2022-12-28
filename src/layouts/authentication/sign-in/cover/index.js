/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import {Link, Navigate} from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import {useNavigate} from 'react-router-dom';
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved9.jpg";
import useAuth from "../../../../hooks/useAuth";
import {Alert, CircularProgress, circularProgressClasses} from "@mui/material";

function Cover() {

  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSetEmail = (event) => setEmail(event.target.value);

  const handleSetPassword = (event) => setPassword(event.target.value)

  const onSuccessCallback = (response) => {
    setLoading(false)
    setDisplayError(false)
    navigate("/dashboard")
  }

  const onErrorCallback = (error) => {
    setLoading(false)
    setDisplayError(true)
  }

  const handleSubmit = async (event) => {
    setLoading(true)
    setDisplayError(false)
    login(email, password, onErrorCallback).then(response => onSuccessCallback(response)).catch((error) => onErrorCallback(error));
  }

  if (isAuthenticated) return <Navigate replace to={"/dashboard"}/>

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2} lineHeight={1.25}>
          {displayError && <Alert severity={"error"}>Authentication failed</Alert>}
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput onChange={handleSetEmail} type="email" placeholder="Email" />
        </SoftBox>
        <SoftBox mb={2} lineHeight={1.25}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput onChange={handleSetPassword} type="password" placeholder="Password" />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton disabled={isLoading} onClick={handleSubmit} variant="gradient" color="info" fullWidth>
            {isLoading ? <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : '#308fe8'),
                  animationDuration: '550ms',
                  left: 0,
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                  },
                }}
                size={25}
                thickness={4}
            /> : "Sign In"}
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up/cover"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default Cover;
