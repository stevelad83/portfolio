import React, { useEffect, useState } from "react";
import { VectorMap } from "react-jvectormap";
import "./map.css";

const mapData = {
  AU: 100000,
  CN: 100000,
  CA: 100000,
  MX: 100000,
  CO: 100000,
  EC: 100000,
  PE: 100000,
  IS: 100000,
  GB: 100000,
  IE: 100000,
  ES: 100000,
  PT: 100000,
  MA: 100000,
  ET: 100000,
  TZ: 100000,
  ZA: 100000,
  ID: 100000,
  MY: 100000,
  TH: 100000,
  LK: 100000,
  VN: 100000,
  BN: 100000,
  PH: 100000,
  KR: 100000,
  JP: 100000,
  RU: 100000,
  MN: 100000,
  JO: 100000,
  OM: 100000,
  AE: 100000,
  QA: 100000,
  TR: 100000,
  GR: 100000,
  BA: 100000,
  HR: 100000,
  GE: 100000,
  UA: 100000,
  PL: 100000,
  LB: 100000,
  HU: 100000,
  RO: 100000,
  AT: 100000,
  CZ: 100000,
  DE: 100000,
  NL: 100000,
  BE: 100000,
  DK: 100000,
  IT: 100000,
  CH: 100000,
  IN: 100000,
  SA: 100000,
  EG: 100000,
  FR: 100000,
  US: 100000,
};
// // const handleClick = (e, countryCode) => {
// //   console.log(countryCode);
// // };
// const Map = () => {
//   const [dynamicMapData, setDynamicMapData] = useState({});
//   const [effectCompleted, setEffectCompleted] = useState(false);

//   useEffect(() => {
//     Object.entries(mapData).forEach(([key, val], idx) => {
//       setTimeout(
//         function (k, v) {
//           setDynamicMapData((old) => {
//             return {
//               ...old,
//               [k]: v,
//             };
//           });
//           if (idx === Object.keys(mapData).length - 1) {
//             setEffectCompleted(true);
//           }
//         },
//         idx * 300,
//         key,
//         val
//       );
//     });
//   }, []);

//   const handleRegionTipShow = (e, el, code) => {
//     if (effectCompleted) {
//       // Only apply hover behavior if the useEffect is completed
//       // Your hover behavior logic here
//       console.log("Hovered on:", code);
//     } else {
//       e.preventDefault(); // Prevents the default tooltip from showing while useEffect is running
//     }
//   };

//   return (
//     <div className="map-container">
//       <VectorMap
//         map={"world_mill"}
//         backgroundColor="#0077be"
//         zoomOnScroll={false}
//         containerStyle={{
//           width: "80%",
//           margin: "auto",
//           height: "520px",
//           padding: "0px",
//         }}
//         // onRegionClick={(e, code) => handleClick(e, code)} //gets the country code
//         onRegionTipShow={handleRegionTipShow} // containerClassName="map"
//         regionStyle={{
//           initial: {
//             fill: "#e4e4e4",
//             "fill-opacity": 0.9,
//             stroke: "none",
//             "stroke-width": 0,
//             "stroke-opacity": 0,
//           },
//           hover: {
//             "fill-opacity": 0.8,
//             cursor: "pointer",
//           },
//           selected: {
//             fill: "#2938bc", //color for the clicked country
//           },
//           selectedHover: {},
//         }}
//         regionsSelectable={true}
//         series={{
//           regions: [
//             {
//               values: dynamicMapData, //this is your data
//               scale: ["#146804", "#ff0000"], //your color game's here
//               normalizeFunction: "polynomial",
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// };
// export default Map;

const Map = () => {
  const [dynamicMapData, setDynamicMapData] = useState({});
  const [effectCompleted, setEffectCompleted] = useState(false);

  useEffect(() => {
    Object.entries(mapData).forEach(([key, val], idx) => {
      setTimeout(
        function (k, v) {
          setDynamicMapData((old) => {
            return {
              ...old,
              [k]: v,
            };
          });
          if (idx === Object.keys(mapData).length - 1) {
            setEffectCompleted(true);
          }
        },
        idx * 300,
        key,
        val
      );
    });
  }, []);

  const handleRegionTipShow = (e, el, code) => {
    if (effectCompleted) {
      console.log("Hovered on:", code);
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="map-container">
      <div className="map-aspect-ratio">
        <VectorMap
          map={"world_mill"}
          backgroundColor="#0077be"
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "100%",
            padding: "0px",
          }}
          onRegionTipShow={handleRegionTipShow}
          regionStyle={
            {
              // Your region style properties here
            }
          }
          regionsSelectable={true}
          series={{
            regions: [
              {
                values: dynamicMapData,
                scale: ["#146804", "#ff0000"],
                normalizeFunction: "polynomial",
              },
            ],
          }}
          zoomButtons={false}
        />
      </div>
    </div>
  );
};

export default Map;
