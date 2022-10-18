import {createContext, useState} from 'react';

export const StoreContext = createContext(null);

export default ({ children }) => {
    const [page, setPage] = useState(1);
    const [progress, setProgress] = useState(10);
    
    const [daysFromOffice, setDaysFromOffice] = useState(0);
    const [daysFromHome, setDaysFromHome] = useState(0);
    const [officeComplete, setOfficeComplete] = useState(false);
    const [homeComplete, setHomeComplete] = useState(false);
    
    const [distance, setDistance] = useState(0);
    const [vehicles, setVehicles] = useState([]);
    const [daysPerTravelMode, setDaysPerTravelMode] = useState({});
    const [multiVehicle, setMultiVehicle] = useState({});
    
    const [hours, setHours] = useState(0);
    const [camera, setCamera] = useState(true);
    const [connection, setConnection] = useState("Fibre");
    const [zoom, setZoom] = useState(1);
    const [heatingHours, setHeatingHours] = useState(0);
    const [heating, setHeating] = useState("Heatpump");

  const props = {
    page,
    setPage,
    daysFromHome,
    setDaysFromOffice,
    setDaysFromHome,
    setOfficeComplete,
    setHomeComplete,
    setProgress,
    homeComplete,
    progress,
    distance,
    setDistance,
    vehicles,
    setVehicles,
    daysPerTravelMode,
    setDaysPerTravelMode,
    multiVehicle,
    setMultiVehicle,
    daysFromOffice,
    officeComplete,
    hours,
    setHours,
    setCamera,
    camera,
    zoom,
    setZoom,
    connection,
    setConnection,
    heating,
    setHeating,
    heatingHours,
    setHeatingHours
  }

  return <StoreContext.Provider value={props}>{children}</StoreContext.Provider>
};