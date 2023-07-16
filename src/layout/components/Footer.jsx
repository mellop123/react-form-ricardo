import styles from './../styles.module.css'
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
    return (
      <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#9effff",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              React Licaldo class
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    );
  }