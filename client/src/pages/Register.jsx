import { Button,Stack, TextField, Typography } from "@mui/material";

const Register = () => {
  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: 'url("/register-bg.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 600px",
        }}
      >
        <Stack flexDirection={'column'} width={'40%'} gap={2} mt={20}>
            <Typography variant="h5" fontSize={"1.5rem"} fontWeight={"bold"} alignSelf={'center'}>Login with email</Typography>
            <TextField variant="outlined" placeholder="EnterYour userName..."/>
            <TextField variant="outlined" placeholder="Enter Your Email..."/>
            <TextField variant="outlined" placeholder="EnterYour Password..."/>
            <Button size="large" sx={{
                width:"100%",
                height:52,
                bgcolor:'green',
                color:'white',
                fontSize: '1rem',
                ":hover":{
                    bgcolor: "blue",
                    cursor: "pointer",
                },
            }}>Sign Up</Button>
            <Typography variant="subtitle2" fontSize={'1.3rem'} alignSelf={"center"} className="login-link">
                Already have an account ? <span> Login </span>
            </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
