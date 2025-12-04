import { Box, Paper, Typography } from "@mui/material";
import { useHabit } from "../zustand/store";

const HabitData = () => {
  const { habits } = useHabit();
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
      }}
    >
      {habits.map((habit, i) => (
        <Paper elevation={1} sx={{ padding: "5px 10px" }}>
          <Typography key={i} variant="h6" component={"h6"}>
            {habit.name}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitData;
