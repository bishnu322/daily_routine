import { Container, Typography } from "@mui/material";
import "./App.css";
import Form from "./component/Form";
import HabitData from "./component/HabitData";

function App() {
  return (
    <Container sx={{ marginTop: "px" }}>
      <Typography variant="h4" component={"h1"} color="red">
        Daily Todo Routine :
      </Typography>

      {/* form */}
      <Form />

      {/* habit data */}

      <HabitData />
    </Container>
  );
}

export default App;
