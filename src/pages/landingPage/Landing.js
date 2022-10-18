import "./Landing.css";
import { Button, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Logo from "../../logo/Logo";
import React from "react";
import { useNavigate } from "react-router-dom";
// import Timer from "../../utilities/Timer";

function Landing(props) {
  const navigate = useNavigate();
  // const timer = new Timer(props.usernum);

  function start() {
    //for user study timing
    // timer.pagetime("landing page");

    navigate("/calculator");
  }

  return (
    <div className="App">
      <Container sx={{ height: "100%" }}>
        <header className="Home-header">
          <Logo />
          <Typography variant="subtitle1" sx={{ mt: "4vh", mb: "4vh" }}>
            Calculate your carbon emissions today, to make tomorrow better!
          </Typography>
        </header>
        <Divider />
        <div className="Helpertext">
          <Typography
            variant="h4"
            sx={{
              alignSelf: "left",
              m: "10px",
              color: "#116939",
              fontFamily: "Monospace",
            }}
          >
            About This Calculator
          </Typography>
          <Typography variant="subtitle1">
            Our climate is changing faster than any other time in our history,
            due to the rapidly increasing greenhouse gas emissions in our
            atmosphere. We can take individual action to collectively reduce our
            emissions – the first step is to understand our individual emissions
            footprint. This calculator has been designed to help you understand
            and compare the emissions footprint of your different working
            scenarios – whether that be driving or busing to work or working
            from home.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              alignSelf: "left",
              mt: "30vh",
              m: "10px",
              color: "#116939",
              fontFamily: "Monospace",
            }}
          >
            What We Need From You
          </Typography>
          <Typography variant="subtitle1">
            The calculator will ask you questions about an average week at work,
            including where you work - in the office or at home, how far you
            travel to and from your office and by what mode, what broadband
            connection type and video conferencing platform you use when working
            from home, and heating technology with time using heating when
            working from home.{" "}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: "1vh" }}>
            The calculator will take you around 5 minutes to complete and will
            give you insights into your emissions footprint from your different
            working scenarios and enable you to see how small changes in your
            commuting and remote working habits can make a difference.{" "}
          </Typography>
        </div>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ mt: "10vh", width: "40vw", height: "8vh" }}
          onClick={start}
        >
          START
        </Button>
      </Container>
    </div>
  );
}

export default Landing;
