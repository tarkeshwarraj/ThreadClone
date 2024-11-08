import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const ProfileBar = () => {
  return (
    <div>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={1}
        py={2}
        mx={"auto"}
        boxShadow={"5px 5px 5px gray"}
        width={"90%"}
        borderRadius={"15px"}
        sx={{ ":hover": { cursor: "pointer" } }}
      >
        <Stack flexDirection={'row'} gap={2}>
            <Avatar src="" alt=""/>
            <Stack flexDirection={'column'} gap={0.6}>
                <Typography variant="h6" fontWeight={'bold'} fontSize={'1rem'}>
                    Aditya_20015
                </Typography>
                <Typography variant="caption" fontWeight={'1.1rem'} color={"gray"}>
                    This is bio.
                </Typography>
                <Typography variant="caption" fontWeight={'1rem'} >
                    3 followers
                </Typography>
            </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default ProfileBar;
