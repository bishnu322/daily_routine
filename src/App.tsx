import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import Form from "./component/Form";
import HabitData from "./component/HabitData";

function App() {
  return (
    <Container sx={{ marginTop: "px" }}>
      <Typography variant="h4" component={"h1"} color="red">
        Daily Todo Routine :
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* form */}
        <Form />

        {/* habit data */}
        <HabitData />
      </Box>
    </Container>
  );
}

export default App;
