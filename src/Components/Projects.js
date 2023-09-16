import {
  Typography,
  ThemeProvider,
  Card,
  Container,
  Link,
} from "@mui/material";
import theme from "../CssStuff/theme";

const Projects = () => {
  return (
    <div className="content">
      <ThemeProvider theme={theme}>
        <Container
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginY: "5vh",
          }}
        >
          <Card
            className="card"
            sx={{
              marginX: "5vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "primary.main",
            }}
          >
            <div
              className="content"
              style={{
                alignItems: "center",
                margin: "5% 10%",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                className="title"
                sx={{ color: "#edeade" }}
              >
                Accounting System
              </Typography>
              <img
                src="https://i.imgur.com/srnpvcc.jpg"
                alt="Accounting System"
                width={600}
                height={300}
                style={{ borderRadius: "15px", border: "2px solid #dfe3ee" }}
              />
              <img
                src="https://i.imgur.com/Wj9lsS2.jpg"
                alt="Accounting System"
                width={600}
                height={300}
                style={{ borderRadius: "15px", border: "2px solid #dfe3ee" }}
              />
              <Link
                href="https://github.com/Henry-0810/Accounting-System"
                sx={{
                  color: "#edeade",
                  fontFamily: "Raleway",
                }}
              >
                See the code
              </Link>
            </div>
          </Card>
          <Card className="card">
            <Typography variant="h6" className="title">
              NBA Tickets Retail System
            </Typography>
          </Card>
          <Card className="card">
            <Typography variant="h6" className="title">
              Tetris Game
            </Typography>
          </Card>
        </Container>
      </ThemeProvider>
    </div>
  );
};
export default Projects;
