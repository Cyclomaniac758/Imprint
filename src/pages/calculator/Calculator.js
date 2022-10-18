import Logo from "../../logo/Logo";
import "../pages.css";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import WeekBreakdown from "./WeekBreakdown";
import InTheOffice from "./fromOfficePages/InTheOffice";
import FromHome from "./fromHomePages/FromHome";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import LinearProgressWithLabel from "./ProgressBar";
import { factors } from "../../data/Factors";
import { StoreContext } from "../../data/Store";
// import Timer from "../../utilities/Timer";

function Calculator() {
  // Parent component for the calculator, all the questions are children of this component.
  // Timer object for user study
  // const [timer] = useState(new Timer(props.usernum));
  const navigate = useNavigate();
  const props = useContext(StoreContext);
  // const [page, setPage] = useState(1);
  // const [progress, setProgress] = useState(10);

  // const [daysFromOffice, setDaysFromOffice] = useState(0);
  // const [daysFromHome, setDaysFromHome] = useState(0);
  // const [officeComplete, setOfficeComplete] = useState(false);
  // const [homeComplete, setHomeComplete] = useState(false);

  // const [distance, setDistance] = useState(0);
  // const [vehicles, setVehicles] = useState([]);
  // const [daysPerTravelMode, setDaysPerTravelMode] = useState({});
  // const [multiVehicle, setMultiVehicle] = useState({});

  // const [hours, setHours] = useState(0);
  // const [camera, setCamera] = useState(true);
  // const [connection, setConnection] = useState("Fibre");
  // const [zoom, setZoom] = useState(1);
  // const [heatingHours, setHeatingHours] = useState(0);
  // const [heating, setHeating] = useState("Heatpump");

  function calculateResult() {
    // timer.calculatetotal(); // timer functionality
    // timer.download("calculation.txt");
    let total = 0;
    let fromOffice = 0;
    let fromHome = 0;

    if (props.daysFromOffice > 0) {
      for (let vehicle in props.daysPerTravelMode) {
        if (!vehicle.includes("+")) {
          fromOffice +=
            props.distance * factors.commuteFactors[vehicle] * props.daysPerTravelMode[vehicle];
        } else {
          const twoModes = vehicle.split("+");
          for (let i in twoModes) {
            let mode = twoModes[i];
            props.fromOffice +=
              props.multiVehicle[mode] *
              factors.commuteFactors[mode] *
              props.daysPerTravelMode[vehicle];
          }
        }
      }

      fromOffice = fromOffice * 50;
      total = fromOffice;
    }

    if (props.daysFromHome > 0) {
      //zoom bandwidth 3800mbps / 150kbps
      //teams bandwidth  4000kbps / 76kbps
      //time = hours * 3600
      // power consumption from tech in Sapere
      // 2020 power consumption emissions 0.1167

      //heating heat pump .408 kg / day assumes 6hr
      // .068 / hr
      //heating electric .815 kg / day assumes 6hr
      // 0.136 / hr

      //need to decide how many weeks for heating
      //todo substitute 7 days in a week to number of days selected by
      const heatingE =
        props.heatingHours * factors.heatingFactors[props.heating] * props.daysFromHome * 16;

      // const powerE2020 =  0.1167
      const powerE2020 = factors.electricityFactor;
      // let bandwidth;
      // if (zoom) {
      //     bandwidth = connection==='Fixed Wireless' ? (camera ? 3.8 : .150) : 1;
      // } else {
      //     bandwidth = connection==='Fixed Wireless' ? (camera ? 4 : .076) : 1;
      // }
      // console.log(bandwidth)
      const videoE =
        factors.connectionFactors[props.connection] *
        props.hours *
        powerE2020 *
        props.daysFromHome *
        50;

      fromHome = heatingE + videoE;

      total += fromHome;
    }

    navigate("/result", {
      state: {
        result: Math.ceil(Math.ceil(fromHome)+Math.ceil(fromOffice)),
        fromHome: Math.ceil(fromHome),
        fromOffice: Math.ceil(fromOffice),
      },
    });
  }

  // const WeekBreakdownProps = {
  //   page,
  //   setPage,
  //   daysFromOffice,
  //   daysFromHome,
  //   setDaysFromOffice,
  //   setDaysFromHome,
  //   setOfficeComplete,
  //   setHomeComplete,
  //   setProgress,
  //   // timer,
  // };

  // const InTheOfficeProps = {
  //   page,
  //   setPage,
  //   setOfficeComplete,
  //   calculateResult,
  //   homeComplete,
  //   setProgress,
  //   progress,
  //   setDistance,
  //   vehicles,
  //   setVehicles,
  //   daysPerTravelMode,
  //   setDaysPerTravelMode,
  //   multiVehicle,
  //   setMultiVehicle,
  //   daysFromOffice,
  //   // timer,
  // };

  // const FromHomeProps = {
  //   page,
  //   setPage,
  //   calculateResult,
  //   officeComplete,
  //   setOfficeComplete,
  //   setProgress,
  //   progress,
  //   setHours,
  //   setCamera,
  //   camera,
  //   setZoom,
  //   connection,
  //   setConnection,
  //   setHeating,
  //   setHeatingHours,
  //   // timer,
  // };

  return (
    <div className="page">
      <header className="heading">
        <Logo />
        <Box sx={{ width: "100%", textAlign: "center", height: "100%" }}>
          <Stack
            sx={{ width: "80%", color: "grey.500", m: "auto auto" }}
            spacing={2}
          >
            <LinearProgressWithLabel value={props.progress} />
          </Stack>
        </Box>
      </header>
      <Container
        sx={{ textAlign: "center", height: "100%", justifyContent: "center" }}
      >
        {(props.page === 1 || props.page === 2) && (
          <WeekBreakdown/>
        )}
        {props.page > 2 && !props.officeComplete && (
          <InTheOffice calculateResult={calculateResult}/>
        )}
        {props.officeComplete && props.page > 2 && !props.homeComplete && (
          <FromHome calculateResult={calculateResult}/>
        )}
      </Container>
    </div>
  );
}

export default Calculator;
