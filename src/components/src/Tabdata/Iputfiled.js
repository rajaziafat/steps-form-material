import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Box,
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useStyles } from "./style";
import Collapse from "@mui/material/Collapse";
import Imagedata from "../../../assets/images/Group 8.png";
import InputAdornment from "@mui/material/InputAdornment";
import CheckIcon from "@mui/icons-material/Check";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [Register, setregister] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [login, setlogin] = useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <>
      <Box my={20} sx={{ width: "100%" }}>
        <Container>
          <Typography
            sx={{ fontSize: 17, fontFamily: "GeneralSans-Medium" }}
            textAlign="center"
            color="secondary"
            component="div"
            gutterBottom
          >
            Your Wallet
          </Typography>
          <Grid container justifyContent="center">
            <Grid item lg={6} md={8} sm={10} xs={12}>
              <Tabs
                value={value}
                textColor="secondary"
                className={classes.Tabssetting}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Login/Register"
                  sx={{
                    color: "#BBBBBB",
                    borderBottom: 1,
                    borderColor: "#BBBBBB",
                    textTransform: "capitalize",
                  }}
                  {...a11yProps(0)}
                  onClick={()=>{
                    setforgotpassword(false);
                    setregister(false);
                    setlogin(true);
                  
                  }}
                />
                <Tab
                  label="KFC"
                  sx={{
                    color: "#BBBBBB",
                    borderBottom: 1,
                    borderColor: "#BBBBBB",
                    textTransform: "capitalize",
                  }}
                  {...a11yProps(1)}
                />
                <Tab
                  label="Authorize Wallet"
                  sx={{
                    color: "#BBBBBB",
                    borderBottom: 1,
                    borderColor: "#BBBBBB",
                    textTransform: "capitalize",
                  }}
                  {...a11yProps(2)}
                />
                <Tab
                  label="Deposit"
                  sx={{
                    color: "#BBBBBB",
                    borderBottom: 1,
                    borderColor: "#BBBBBB",
                    textTransform: "capitalize",
                  }}
                  {...a11yProps(3)}
                />
                <Tab
                  label="Confirmation"
                  sx={{
                    color: "#BBBBBB",
                    borderBottom: 1,
                    borderColor: "#BBBBBB",
                    textTransform: "capitalize",
                  }}
                  {...a11yProps(4)}
                />
              </Tabs>

              <TabPanel value={value} index={0}>
                {login && <>
                    <Grid container justifyContent="center">
                      <Grid item lg={10} md={10} sm={10} xs={10}>
                        <Typography
                          sx={{
                            fontSize: 17,
                            fontFamily: "GeneralSans-Medium",
                          }}
                          color="secondary"
                          component="div"
                          gutterBottom
                        >
                          Your Wallet
                        </Typography>
                        <Box my={2}>
                          <TextField
                            id="standard-basic"
                            type="email"
                            label="User"
                            fullWidth
                            variant="standard"
                            color="primary"
                            sx={{
                              "& .MuiInput-root": {
                                color: "#BBBBBB",
                              },
                              "& .MuiInput-root:before": {
                                borderBottom: "2px solid #BBBBBB ",
                              },
                              "& .MuiInput-root:after": {
                                borderImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%) 1",
                              },
                              "& .MuiInputLabel-root": {
                                color: "#BBBBBB",
                              },
                            }}
                          />
                        </Box>
                        <Box my={2}>
                          <TextField
                            id="standard-basic"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            color="primary"
                            sx={{
                              "& .MuiInput-root": {
                                color: "#BBBBBB",
                              },
                              "& .MuiInput-root:before": {
                                borderBottom: "2px solid #BBBBBB ",
                              },
                              "& .MuiInput-root:after": {
                                borderImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%) 1",
                              },
                              "& .MuiInputLabel-root": {
                                color: "#BBBBBB",
                              },
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6} xs={8}>
                        <Box py={3}>
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{
                                backgroundColor: "#42378f",
                                backgroundImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%)",
                              color: "#FFFFFF",
                              textTransform: "capitalize",
                              fontSize: "16px",
                              lineHeight: "22px",
                              borderRadius: "25px",
                              padding: "5px 0px",
                            }}
                            fullWidth
                          >
                            Login
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>

                    <Button
                      sx={{ textTransform: "capitalize" }}
                     onClick={()=>{
                       setlogin(false);
                       setregister(true)
                     }}
                    >
                      {" "}
                      Register{" "}
                    </Button>
                    <Button
                      sx={{ textTransform: "capitalize", float: "right" }}
                      onClick={()=>{
                        setlogin(false);
                        setforgotpassword(true);
                      }}
                    >
                      {" "}
                      Forget Password{" "}
                    </Button>
                  </> }

                      { Register &&   <>
                    <Grid container justifyContent="center">
                      <Grid item lg={10} md={10} sm={10} xs={10}>
                        <Typography
                          sx={{
                            fontSize: 17,
                            fontFamily: "GeneralSans-Medium",
                          }}
                          color="secondary"
                          component="div"
                          gutterBottom
                        >
                          Register
                        </Typography>
                        <Box my={2}>
                          <TextField
                            id="standard-basic"
                            type="email"
                            label="User"
                            fullWidth
                            variant="standard"
                            color="primary"
                            sx={{
                              "& .MuiInput-root": {
                                color: "#BBBBBB",
                              },
                              "& .MuiInput-root:before": {
                                borderBottom: "2px solid #BBBBBB ",
                              },
                              "& .MuiInput-root:after": {
                                borderImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%) 1",
                              },
                              "& .MuiInputLabel-root": {
                                color: "#BBBBBB",
                              },
                            }}
                          />
                        </Box>
                        <Box my={2}>
                          <TextField
                            id="standard-basic"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            color="primary"
                            sx={{
                              "& .MuiInput-root": {
                                color: "#BBBBBB",
                              },
                              "& .MuiInput-root:before": {
                                borderBottom: "2px solid #BBBBBB ",
                              },
                              "& .MuiInput-root:after": {
                                borderImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%) 1",
                              },
                              "& .MuiInputLabel-root": {
                                color: "#BBBBBB",
                              },
                            }}
                          />
                        </Box>
                        <Box my={2}>
                          <TextField
                            id="standard-basic"
                            label="Repeat Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            color="primary"
                            sx={{
                              "& .MuiInput-root": {
                                color: "#BBBBBB",
                              },
                              "& .MuiInput-root:before": {
                                borderBottom: "2px solid #BBBBBB ",
                              },
                              "& .MuiInput-root:after": {
                                borderImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%) 1",
                              },
                              "& .MuiInputLabel-root": {
                                color: "#BBBBBB",
                              },
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6} xs={8}>
                        <Box py={3}>
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{
                                backgroundColor: "#42378f",
                                backgroundImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%)",
                              color: "#FFFFFF",
                              textTransform: "capitalize",
                              fontSize: "16px",
                              lineHeight: "22px",
                              borderRadius: "25px",
                              padding: "5px 0px",
                            }}
                            fullWidth
                            onClick={()=>{
        
                              setlogin(true);
                              setregister(false);
                            }}
                          >
                            Sign Up
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>

                  
                  </> }
                  { forgotpassword &&  <>
                    <Grid container justifyContent="center">
                      <Grid item lg={10} md={10} sm={10} xs={10}>
                        <Typography
                          sx={{
                            fontSize: 17,
                            fontFamily: "GeneralSans-Medium",
                          }}
                          color="secondary"
                          component="div"
                          gutterBottom
                        >
                          Recover Password
                        </Typography>
                        <Box my={2}>
                          <TextField
                            id="standard-basic"
                            type="email"
                            label="Email"
                            fullWidth
                            variant="standard"
                            color="primary"
                            sx={{
                              "& .MuiInput-root": {
                                color: "#BBBBBB",
                              },
                              "& .MuiInput-root:before": {
                                borderBottom: "2px solid #BBBBBB ",
                              },
                              "& .MuiInput-root:after": {
                                borderImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%) 1",
                              },
                              "& .MuiInputLabel-root": {
                                color: "#BBBBBB",
                              },
                            }}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  
                                  <Box fontSize={14} color="red">
                                    
                                    invalid email
                                  </Box>
                                </InputAdornment>
                              ),
                            }}

                          />
                        </Box>
                    
                      </Grid>
                      <Grid item lg={6} md={6} sm={6} xs={8}>
                        <Box py={3}>
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{
                                backgroundColor: "#42378f",
                                backgroundImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%)",
                              color: "#FFFFFF",
                              textTransform: "capitalize",
                              fontSize: "16px",
                              lineHeight: "22px",
                              borderRadius: "25px",
                              padding: "5px 0px",
                            }}
                            fullWidth
                           onClick={()=>{
                             setlogin(true);
                             setforgotpassword(false);
                           }}
                          >
                            Send email
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>

                  
                  </> }


              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography
                  sx={{ fontSize: 17, fontFamily: "GeneralSans-Medium" }}
                  color="secondary"
                  component="div"
                  gutterBottom
                >
                  KYC
                </Typography>
                <Box my={4}>
                  <Typography
                    variant="h6"
                    color="primary"
                    component="div"
                    gutterBottom
                    sx={{ textAlign: "center" }}
                  >
                    Waiting for info
                  </Typography>
                </Box>
                <Box mt={12}>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item lg={4} md={4} sm={6} xs={6}>
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{
                          background: "rgb(38, 38, 38)",
                          color: "#FFFFFF",
                          textTransform: "capitalize",
                          fontSize: "16px",
                          lineHeight: "22px",
                          borderRadius: "25px",
                          padding: "5px 0px",
                        }}
                        fullWidth
                      >
                        Back
                      </Button>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={6}>
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{
                            backgroundColor: "#42378f",
                            backgroundImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%)",
                          color: "#FFFFFF",
                          textTransform: "capitalize",
                          fontSize: "16px",
                          lineHeight: "22px",
                          borderRadius: "25px",
                          padding: "5px 0px",
                        }}
                        fullWidth
                      >
                        Next
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid container justifyContent="center">
                  <Grid item lg={8} md={8} sm={10} xs={10}>
                    <Typography
                      sx={{ fontSize: 17, fontFamily: "GeneralSans-Bold" }}
                      color="secondary"
                      component="div"
                      gutterBottom
                    >
                      Authorize Wallet
                    </Typography>
                    <Box my={4}>
                      <Button variant="outlined" color="primary" fullWidth>
                        Ethereum
                      </Button>
                      <Button variant="outlined" color="primary" fullWidth>
                        polygon
                      </Button>
                      <Button variant="outlined" color="primary" fullWidth>
                        Phenk Hey Swap
                      </Button>
                      <Button variant="outlined" color="primary" fullWidth>
                        GOGUIDOGO
                      </Button>
                      <Button variant="outlined" color="primary" fullWidth>
                        PEREZSIGN
                      </Button>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Button variant="outlined" color="primary" fullWidth>
                          polygon
                        </Button>
                        <Button variant="outlined" color="primary" fullWidth>
                          Phenk Hey Swap
                        </Button>
                        <Button variant="outlined" color="primary" fullWidth>
                          GOGUIDOGO
                        </Button>
                        <Button variant="outlined" color="primary" fullWidth>
                          PEREZSIGN
                        </Button>
                      </Collapse>
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        sx={{
                          textTransform: "capitalize",
                          "&:hover": {
                            background: "#fff",
                            color: "#BBBBBB",
                          },
                        }}
                        onClick={handleClick}
                      >
                        Show More Option
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Grid container justifyContent="center">
                  <Grid item lg={10} md={10} sm={10} xs={10}>
                    <Typography
                      sx={{ fontSize: 17, fontFamily: "GeneralSans-Bold" }}
                      color="secondary"
                      component="div"
                      gutterBottom
                    >
                      Deposit
                    </Typography>
                    <Box my={2}>
                      <TextField
                        id="outlined-basic"
                        placeholder="Choose your crypto for deposit"
                        variant="outlined"
                        color="primary"
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#BBBBBB",
                          },
                          "& .MuiOutlinedInput-root": {
                            color: "#BBBBBB",
                          },
                          "& .MuiOutlinedInput-notchedOutline:hover": {
                            borderColor: "#BBBBBB",
                          },
                        }}
                      />
                    </Box>
                    <Box my={2}>
                      <Grid container justifyContent="center" spacing={3}>
                        <Grid item lg={4} md={4} sm={6} xs={6}>
                          <Box textAlign="center">
                            <img src={Imagedata} width="100%" />
                          </Box>
                        </Grid>
                        <Grid item lg={8} md={8} sm={10} xs={10}>
                          <Typography
                            variant="h6"
                            color="primary"
                            component="div"
                            gutterBottom
                            fontFamily="GeneralSans-Semibold"
                          >
                            Your Bitcoin Address
                          </Typography>
                          <Typography
                            variant="h6"
                            color="primary"
                            component="div"
                            gutterBottom
                            fontFamily="GeneralSans-Semibold"
                          >
                            10maldQSWHDSHDSJJSdsds
                          </Typography>
                          <Box mt={2}>
                            <Typography
                              variant="h6"
                              color="primary"
                              component="div"
                              gutterBottom
                              fontFamily="GeneralSans-Semibold"
                            >
                              Remember to send your cryptons with the verified
                              address
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box my={1}>
                      <Divider
                        sx={{ border: "1px solid #4D4D4D !important " }}
                      />
                    </Box>
                    <Box my={2}>
                      <Typography
                        variant="h6"
                        color="primary"
                        component="div"
                        gutterBottom
                        fontFamily="GeneralSans-Semibold"
                        fontSize={10}
                      >
                        Lorem ipsum about Max
                      </Typography>
                    </Box>
                    <TextField
                      id="outlined-basic"
                      placeholder=""
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#BBBBBB",
                        },
                        "& .MuiOutlinedInput-root": {
                          color: "#BBBBBB",
                        },
                        "& .MuiOutlinedInput-notchedOutline:hover": {
                          borderColor: "#BBBBBB",
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            
                            <Box fontSize={20} className="max" >
                              
                              Max
                            </Box>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box mt={4}>
                      <Grid container justifyContent="center" spacing={2}>
                        <Grid item lg={4} md={4} sm={6} xs={6}>
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{
                              background: "rgb(38, 38, 38)",
                              color: "#FFFFFF",
                              textTransform: "capitalize",
                              fontSize: "13px",
                              lineHeight: "22px",
                              borderRadius: "25px",
                              padding: "5px 0px",
                            }}
                            fullWidth
                          >
                            Cancel
                          </Button>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={6}>
                          <Button
                            color="primary"
                            variant="contained"
                            sx={{
                              backgroundColor: "#42378f",
                              backgroundImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%)",
                              color: "#FFFFFF",
                              textTransform: "capitalize",
                              fontSize: "13px",
                              lineHeight: "22px",
                              borderRadius: "25px",
                              padding: "5px 0px",
                            }}
                            fullWidth
                          >
                            Deposit
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Grid container justifyContent="center">
                  <Grid item lg={9} md={9} sm={10} xs={12}>
                    <Box textAlign="center"  >
                      
                    <i class="fa fa-check max fa-5x " aria-hidden="true"></i>

                      <Typography
                        variant="h4"
                        color="primary"
                        component="div"
                        gutterBottom
                        fontFamily="GeneralSans-Semibold"
                      >
                        Confirmation Message
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary"
                        component="div"
                        gutterBottom
                        fontFamily="GeneralSans-Semibold"
                      >
                        Transaction info
                      </Typography>
                      <Box my={1}>
                        <Divider
                          sx={{ border: "1px solid #4D4D4D !important " }}
                        />
                      </Box>
                    </Box>
                    <Box my={4}>
                      <Grid container justifyContent="center">
                        <Grid item lg={6} md={6} sm={6} xs={8}>
                          <Typography
                            variant="h6"
                            color="primary"
                            component="div"
                            gutterBottom
                          >
                            Amount
                          </Typography>
                          <Typography
                            variant="h5"
                            color="primary"
                            component="div"
                            gutterBottom
                            fontFamily="GeneralSans-Semibold"
                          >
                            Transaction info
                          </Typography>
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xs={4}>
                          <Typography
                            variant="h6"
                            color="primary"
                            component="div"
                            gutterBottom
                          >
                            Date
                          </Typography>
                          <Typography
                            variant="h5"
                            color="primary"
                            component="div"
                            gutterBottom
                            fontFamily="GeneralSans-Semibold"
                          >
                            info
                          </Typography>
                        </Grid>
                        <Grid item lg={9} md={9} sm={9} xs={12}>
                          <Box my={3}>
                            <Typography
                              variant="h6"
                              color="primary"
                              component="div"
                              gutterBottom
                            >
                              Amount
                            </Typography>
                            <Typography
                              variant="h5"
                              color="primary"
                              component="div"
                              gutterBottom
                              fontFamily="GeneralSans-Semibold"
                            >
                              Transaction info
                            </Typography>
                          </Box>

                          <Typography
                            variant="h6"
                            color="primary"
                            component="div"
                            gutterBottom
                            fontSize={12}
                          >
                            Transaction could take up to 2 hours
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
