import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useHabit } from "../zustand/store";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const HabitData = () => {
  const { habits, removeHabit, toggleHabit } = useHabit();

  const today = new Date().toISOString().split("T")[0];

  console.log(today);

  const handleRemove = (id: string) => {
    removeHabit(id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
      }}
    >
      {habits.map((habit) => (
        <Paper
          elevation={1}
          sx={{ display: "flex", padding: "5px 10px" }}
          key={habit.id}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* left side*/}
            <Grid size={8}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency}
              </Typography>
            </Grid>

            {/* right side*/}
            <Grid sx={{ display: "flex", gap: 1 }} size={4}>
              {/* toggle habit button */}
              <Button
                variant="outlined"
                color={
                  habit.completedDate.includes(today) ? "success" : "primary"
                }
                sx={{ display: "flex", gap: 1 }}
                onClick={() => toggleHabit?.(habit.id, today)}
              >
                <CheckCircleIcon />
                {habit.completedDate.includes(today)
                  ? "completed"
                  : "Mark complete"}
              </Button>

              {/* remove habit button */}
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleRemove(habit.id)}
                sx={{ display: "flex", gap: 1 }}
              >
                <DeleteIcon />
                Remove
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitData;
