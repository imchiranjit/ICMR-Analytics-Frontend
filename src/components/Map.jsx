import React, { useState } from "react";
import "./Map.css";
import { useNavigate } from "react-router-dom";
import ReactDatamaps from "react-india-states-map";

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
    },
  },
};

const Map = () => {
  const navigate = useNavigate();
  const [activeState, setactiveState] = useState({
    data: STATES,
    name: "India",
  });

  const [stateLists, setStateLists] = useState(STATES);
  // console.log(stateLists);
  const stateOnClick = (data, name) => {
    console.log(`Clicked state: ${name}`);
    if (name === "Delhi") {
      console.log("Delhi was clicked");
      navigate("/dashboard/state/dl");
    } else if (name === "Maharashtra") {
      console.log("maharastra was clicked");
      navigate("/dashboard/state/mh");
    } else if (name === "Uttar Pradesh") {
      console.log("UP was clicked");
      navigate("/dashboard/state/up");
    } else if (name === "Jammu & Kashmir") {
      console.log("j&k was clicked");
      navigate("/dashboard/state/jk");
    } else if (name === "Telangana") {
      console.log("Telangana was clicked");
      navigate("/dashboard/state/tl");
    } else if (name === "Haryana") {
      console.log("Haryana was clicked");
      navigate("/dashboard/state/hr");
    } else if (name === "Andhra Pradesh") {
      console.log("AP was clicked");
      navigate("/dashboard/state/ap");
    } else if (name === "Punjab") {
      console.log("punjab was clicked");
      navigate("/dashboard/state/pb");
    } else if (name === "Rajasthan") {
      console.log("rajasthan was clicked");
      navigate("/dashboard/state/rj");
    } else if (name === "Sikkim") {
      console.log("Sikkim was clicked");
      navigate("/dashboard/state/sk");
    } else if (name === "West Bengal") {
      console.log("wb was clicked");
      navigate("/dashboard/state/wb");
    } else if (name === "Odisha") {
      console.log("odisha was clicked");
      navigate("/dashboard/state/or");
    } else if (name === "Madhya Pradesh") {
      console.log("mp was clicked");
      navigate("/dashboard/state/mp");
    } else if (name === "Chandigarh") {
      console.log("chandigarh was clicked");
      navigate("/dashboard/state/ch");
    } else if (name === "Tamil Nadu") {
      console.log("tn was clicked");
      navigate("/dashboard/state/tn");
    } else if (name === "Jharkhand") {
      console.log("jharkhand was clicked");
      navigate("/dashboard/state/jh");
    } else if (name === "Himachal Pradesh") {
      console.log("Hp was clicked");
      navigate("/dashboard/state/hp");
    } else if (name === "Uttarakhand") {
      console.log("UK was clicked");
      navigate("/dashboard/state/uk");
    } else if (name === "Bihar") {
      console.log("br was clicked");
      navigate("/dashboard/state/br");
    } else if (name === "Chhattisgarh") {
      console.log("ch was clicked");
      navigate("/dashboard/state/chg");
    } else if (name === "Karnataka") {
      console.log("Krt was clicked");
      navigate("/dashboard/state/krt");
    } else if (name === "Kerala") {
      console.log("Krl was clicked");
      navigate("/dashboard/state/krl");
    } else if (name === "Arunanchal Pradesh") {
      console.log("Arp was clicked");
      navigate("/dashboard/state/arp");
    } else if (name === "Assam") {
      console.log("Asm was clicked");
      navigate("/dashboard/state/asm");
    } else if (name === "Meghalaya") {
      console.log("mgl was clicked");
      navigate("/dashboard/state/mgl");
    } else if (name === "Gujarat") {
      console.log("gj was clicked");
      navigate("/dashboard/state/gj");
    } else if (name === "Tripura") {
      console.log("tpr was clicked");
      navigate("/dashboard/state/tpr");
    } else if (name === "Manipur") {
      console.log("mnpr was clicked");
      navigate("/dashboard/state/mnpr");
    } else if (name === "Mizoram") {
      console.log("mzrm was clicked");
      navigate("/dashboard/state/mzrm");
    } else if (name === "Nagaland") {
      console.log("ngl was clicked");
      navigate("/dashboard/state/ngl");
    }

    // console.log(data);
    setactiveState({ data, name });
  };

  return (
    <ReactDatamaps
      regionData={stateLists}
      mapLayout={{
        hoverTitle: "Count",
        noDataColor: "#ADD8E9",
        borderColor: "#ffffff",
        hoverBorderColor: "pink",
        hoverColor: "#10131c",
      }}
      hoverComponent={({ value }) => {
        return (
          <>
            {/* <p>{value.name}</p> */}
            {/* <p>{value.content}</p> */}
          </>
        );
      }}
      onClick={stateOnClick}
      activeState={activeState}
    />
  );
};
export default Map;
