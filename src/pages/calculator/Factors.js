const commuteFactors = {
    'Car-Petrol': 0.264656596607083,
    'Car-Diesel': 0.270211945903452,
    'Car-Electric': 0.0257236513893049,
    'Car-Diesel Hybrid': 0.242225708649166,
    'Car-Petrol Hybrid': 0.20139081670323,
    'Car-Petrol Plug-in Hybrid': 0.0957093409748131, 
    'Car-Diesel Plug-in Hybrid': 0.115722560779822,
    'Bus': 0.155,
    'Motorcycle <60cc': 0.0657125660708244,
    'Motorcycle >60cc': 0.131425132141649,
    'Rail': 0.019,
    'Taxi': 0.224696773002809,
    'Electric Scooter': 0,
    'Electric Bicycle': 0.0010701949,
    'Walking/Biking': 0
};

// real factor values still needed
const connectionFactors = {
    'Fibre': .0191,
    'VDSL': .0255,
    'Fixed Wireless': .0105,
    'HFC': .0233
};

const heatingFactors = {
    'Heatpump': .068,
    'Electric': .1358333333,
    'Woodburner': .0001122088,
};

export const factors = {
    commuteFactors,
    connectionFactors,
    heatingFactors
};
