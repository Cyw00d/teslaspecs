// *****
// At every range selection there will be carcodes, these are basics to select the right car height in the image
// At every range selection there will be defaultCodes

// https://damieng.github.io/tesla-preview/?model=m3&MT304=n&view=STUD_SIDE&background-m3=0&flip=n&paint=PBSB&wheels=W38B&seats=IN3PB&extras=
//******

//  wheels      aero18  $W38B   // for all except 'long_range_performance'
//  wheels      sport19 $W39B   // for all except 'long_range_performance'
//  wheels      sport20 $W32B   // only for 'long_range_performance' (also default)

//  color       black   $PBSB
//  color       silver  $PMNG
//  color       blue    $PPSB
//  color       white   $PPSW
//  color       red     $PPMR

//  interior    black   $IN3PB
//  interior    white   $IN3PW

// motor        RWD     $DV2W
// motor        AWD     $DV4W

// accessoires  towbar  

export const model3 = {
    "ranges": [
        {
            id: "standard_range",
            name: "Standard Range",
            enabled: true,
            carcodes: ["$MT303","$DV2W"],
            defaultCodes: {
                wheels: '$W38B',
                color: '$PBSB',
                interior: '$IN3PB',
            },
            asset: "",
            specs: [
                { key: 'range_wltp_km', name: 'Range WLTP (km)', value: '310', convert_miles: false, unit: ' km'},
                { key: 'range_wltp_m', name: 'Range WLTP (miles)', value: '310', convert_miles: true, unit: ' miles'},
                { key: 'topspeed_km', name: 'Top speed (km)', value: '201', convert_miles: false, unit: ' km/h'},
                { key: 'topspeed_km', name: 'Top speed (miles)', value: '201', convert_miles: true, unit: ' miles/h'},
                { key: 'speed', name: '0-100km/h (0-60 m/h)', value: '5.9', convert_miles: false, unit: 's'},
                { key: 'horsepower', name: 'Horsepower', value: '204', convert_miles: false, unit: 'pk'},
                { key: 'torgue', name: 'Torque', value: '350', convert_miles: false, unit: 'Nm'},
                { key: 'capacity', name: 'Battery Capacity', value: '46.0', convert_miles: false, unit: 'kWh'},
                { key: 'prem_options', name: 'Premium Options', value: 'No Premium', convert_miles: false, unit: ''},
                { key: 'length', name: 'Length', value: '4694', convert_miles: false, unit: 'mm'},
                { key: 'width', name: 'Width', value: '1850', convert_miles: false, unit: 'mm'},
                { key: 'height', name: 'Height', value: '1443', convert_miles: false, unit: 'mm'},
                { key: 'weight', name: 'Wieght', value: '1847', convert_miles: false, unit: 'kg'}
            ],
        },
        {
            id: "standard_range_plus",
            name: "Standard Range Plus",
            enabled: true,
            carcodes: ["$MT303","$DV2W"],
            defaultCodes: {
                wheels: '$W38B',
                color: '$PBSB',
                interior: '$IN3PB',
            },
            asset: "",
            specs: [
                { key: 'range_wltp_km', name: 'Range WLTP (km)', value: '415', convert_miles: false, unit: ' km'},
                { key: 'range_wltp_m', name: 'Range WLTP (miles)', value: '415', convert_miles: true, unit: ' miles'},
                { key: 'topspeed_km', name: 'Top speed (km)', value: '225', convert_miles: false, unit: ' km/h'},
                { key: 'topspeed_km', name: 'Top speed (miles)', value: '225', convert_miles: true, unit: ' miles/h'},
                { key: 'speed', name: '0-100km/h (0-60 m/h)', value: '5.6', convert_miles: false, unit: 's'},
                { key: 'horsepower', name: 'Horsepower', value: '238', convert_miles: false, unit: 'pk'},
                { key: 'torgue', name: 'Torque', value: '357', convert_miles: false, unit: 'Nm'},
                { key: 'capacity', name: 'Battery Capacity', value: '55.0', convert_miles: false, unit: 'kWh'},
                { key: 'prem_options', name: 'Premium Options', value: 'Partly Premium', convert_miles: false, unit: ''},
                { key: 'length', name: 'Length', value: '4694', convert_miles: false, unit: 'mm'},
                { key: 'width', name: 'Width', value: '1850', convert_miles: false, unit: 'mm'},
                { key: 'height', name: 'Height', value: '1443', convert_miles: false, unit: 'mm'},
                { key: 'weight', name: 'Wieght', value: '1847', convert_miles: false, unit: 'kg'}
            ],
        },
        {
            id: "long_range_rwd",
            name: "Long Range RWD",
            enabled: true,
            carcodes: ["$MT303","$DV2W "],
            defaultCodes: {
                wheels: '$W38B',
                color: '$PBSB',
                interior: '$IN3PB',
            },
            asset: "",
            specs: [
                { key: 'range_wltp_km', name: 'Range WLTP (km)', value: '600', convert_miles: false, unit: ' km'},
                { key: 'range_wltp_m', name: 'Range WLTP (miles)', value: '600', convert_miles: true, unit: ' miles'},
                { key: 'topspeed_km', name: 'Top speed (km)', value: '225', convert_miles: false, unit: ' km/h'},
                { key: 'topspeed_km', name: 'Top speed (miles)', value: '225', convert_miles: true, unit: ' miles/h'},
                { key: 'speed', name: '0-100km/h (0-60 m/h)', value: '5.3', convert_miles: false, unit: 's'},
                { key: 'horsepower', name: 'Horsepower', value: '287', convert_miles: false, unit: 'pk'},
                { key: 'torgue', name: 'Torque', value: '416', convert_miles: false, unit: 'Nm'},
                { key: 'capacity', name: 'Battery Capacity', value: '75.0', convert_miles: false, unit: 'kWh'},
                { key: 'prem_options', name: 'Premium Options', value: 'Full Premium', convert_miles: false, unit: ''},
                { key: 'length', name: 'Length', value: '4694', convert_miles: false, unit: 'mm'},
                { key: 'width', name: 'Width', value: '1850', convert_miles: false, unit: 'mm'},
                { key: 'height', name: 'Height', value: '1443', convert_miles: false, unit: 'mm'},
                { key: 'weight', name: 'Wieght', value: '1847', convert_miles: false, unit: 'kg'}
            ],
        },
        {
            id: "long_range_awd",
            name: "Long Range AWD",
            enabled: true,
            carcodes: ["$MT303","$DV4W"],
            defaultCodes: {
                wheels: '$W38B',
                color: '$PBSB',
                interior: '$IN3PB',
            },
            asset: "",
            specs: [
                { key: 'range_wltp_km', name: 'Range WLTP (km)', value: '560', convert_miles: false, unit: ' km'},
                { key: 'range_wltp_m', name: 'Range WLTP (miles)', value: '560', convert_miles: true, unit: ' miles'},
                { key: 'topspeed_km', name: 'Top speed (km)', value: '233', convert_miles: false, unit: ' km/h'},
                { key: 'topspeed_km', name: 'Top speed (miles)', value: '233', convert_miles: true, unit: ' miles/h'},
                { key: 'speed', name: '0-100km/h (0-60 m/h)', value: '4.6', convert_miles: false, unit: 's'},
                { key: 'horsepower', name: 'Horsepower', value: '351', convert_miles: false, unit: 'pk'},
                { key: 'torgue', name: 'Torque', value: '527', convert_miles: false, unit: 'Nm'},
                { key: 'capacity', name: 'Battery Capacity', value: '75.0', convert_miles: false, unit: 'kWh'},
                { key: 'prem_options', name: 'Premium Options', value: 'Full Premium', convert_miles: false, unit: ''},
                { key: 'length', name: 'Length', value: '4694', convert_miles: false, unit: 'mm'},
                { key: 'width', name: 'Width', value: '1850', convert_miles: false, unit: 'mm'},
                { key: 'height', name: 'Height', value: '1443', convert_miles: false, unit: 'mm'},
                { key: 'weight', name: 'Wieght', value: '1847', convert_miles: false, unit: 'kg'}
            ],
        },
        {
            id: "long_range_performance",
            name: "Performance",
            enabled: true,
            carcodes: ["$MT304","$DV4W", "$SLR1"],
            defaultCodes: {
                wheels: '$W32B',
                color: '$PBSB',
                interior: '$IN3PB',
            },
            asset: "",
            specs: [
                { key: 'range_wltp_km', name: 'Range WLTP (km)', value: '530', convert_miles: false, unit: ' km'},
                { key: 'range_wltp_m', name: 'Range WLTP (miles)', value: '530', convert_miles: true, unit: ' miles'},
                { key: 'topspeed_km', name: 'Top speed (km)', value: '261', convert_miles: false, unit: ' km/h'},
                { key: 'topspeed_km', name: 'Top speed (miles)', value: '261', convert_miles: true, unit: ' miles/h'},
                { key: 'speed', name: '0-100km/h (0-60 m/h)', value: '3.4', convert_miles: false, unit: 's'},
                { key: 'horsepower', name: 'Horsepower', value: '462', convert_miles: false, unit: 'pk'},
                { key: 'torgue', name: 'Torque', value: '639', convert_miles: false, unit: 'Nm'},
                { key: 'capacity', name: 'Battery Capacity', value: '75.0', convert_miles: false, unit: 'kWh'},
                { key: 'prem_options', name: 'Premium Options', value: 'Full Premium', convert_miles: false, unit: ''},
                { key: 'length', name: 'Length', value: '4694', convert_miles: false, unit: 'mm'},
                { key: 'width', name: 'Width', value: '1850', convert_miles: false, unit: 'mm'},
                { key: 'height', name: 'Height', value: '1443', convert_miles: false, unit: 'mm'},
                { key: 'weight', name: 'Wieght', value: '1847', convert_miles: false, unit: 'kg'}
            ],
        },
    ],
}