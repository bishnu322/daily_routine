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
import { useHabit } from "../zustand/store";

const Form = () => {
  const [taskName, setTaskName] = useState("");
  const [habitStatus, setHabitStatus] = useState<"Daily" | "Weekly">("Daily");

  const { addHabit } = useHabit();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addHabit(taskName, habitStatus);
  };

  //   console.log(taskName, habitStatus);

  return (
    <form onSubmit={handleSubmit}>
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
        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;
