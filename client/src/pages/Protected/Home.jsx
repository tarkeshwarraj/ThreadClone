import { Stack } from "@mui/material";
import Input from "../../components/home/Input";

const Home = () => {
    return(
        <>
        <Input/>
        <Stack flexDirection={"column"} gap={2} mb={10}>
            <p>Post</p>
        </Stack>
        </>
    );
};

export default Home;