import {Stack, CircularProgress} from "@mui/material";

const Loading = () => {
    return (
        <Stack flexDirection={'row'} minHeight={'50vh'} width={"100%"}>
            <CircularProgress color="success" />
        </Stack>
    )
}

export default Loading;