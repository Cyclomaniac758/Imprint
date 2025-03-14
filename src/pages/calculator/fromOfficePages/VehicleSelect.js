import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Tooltip } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const vehicles = [
  "Car-Petrol",
  "Car-Diesel",
  "Car-Electric",
  "Car-Diesel Hybrid",
  "Car-Petrol Hybrid",
  "Car-Petrol Plug-in Hybrid",
  "Car-Diesel Plug-in Hybrid",
  "Bus",
  "Motorcycle <60cc",
  "Motorcycle >60cc",
  "Rail",
  "Taxi",
  "Electric Scooter",
  "Electric Bicycle",
  "Walking/Biking",
];

function getStyles(name, vehicleName, theme) {
  return {
    fontWeight:
      vehicleName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function VehicleSelect(props) {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    props.setVehicleNames(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <Tooltip
        title="For example if you drive a petrol car to work some days, and take the bus on other days, select 'Car-Petrol' and 'Bus'"
        placement="right-start"
      >
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel>Select multiple modes if needed</InputLabel>
          <Select
            multiple
            value={props.vehicleNames}
            onChange={handleChange}
            input={<OutlinedInput label="Select multiple modes if needed" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {vehicles.map((vehicle) => (
              <MenuItem
                key={vehicle}
                value={vehicle}
                style={getStyles(vehicle, props.vehicleNames, theme)}
              >
                {vehicle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Tooltip>
    </div>
  );
}
export default VehicleSelect;
