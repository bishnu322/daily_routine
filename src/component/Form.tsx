import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Form = () => {
  const [taskName, setTaskName] = useState("");
  const [habitStatus, setHabitStatus] = useState<"Daily" | "Weekly">("Daily");

  console.log(taskName, habitStatus);

  return (
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
        variant="outlined"
        size="small"
        label="Enter Habit"
        placeholder="Habit name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      {/* select section */}

      <FormControl fullWidth size="small">
        <InputLabel id="habitStatusData">Habit Status</InputLabel>
        <Select
          labelId="habitStatusData"
          id="demo-simple-select"
          value={habitStatus}
          label="Habit Status"
          onChange={(e) => setHabitStatus(e.target.value)}
        >
          <MenuItem value="Daily">Daily</MenuItem>
          <MenuItem value="Weekly">Weekly</MenuItem>
        </Select>
      </FormControl>

      {/* button */}
      <Button variant="contained">Submit</Button>
    </Box>
  );
};

export default Form;
