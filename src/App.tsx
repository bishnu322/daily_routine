import { Box, Button, Container, TextField, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Container sx={{ marginTop: "px" }}>
      <Typography variant="h4" component={"h1"} color="red">
        Daily Todo Routine :
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: "10px",
        }}
      >
        {/* input filed */}

        <TextField
          id="outlined-basic"
          label="Task Name"
          variant="outlined"
          size="small"
        />

        {/* button */}
        <Button variant="contained">Submit</Button>
      </Box>
    </Container>
  );
}

export default App;
