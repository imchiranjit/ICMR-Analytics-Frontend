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

const Map_Combo = () => {
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
      navigate("/dashboard/comorbid/dl");
    } else if (name === "Maharashtra") {
      console.log("maharastra was clicked");
      navigate("/dashboard/comorbid/mh");
    } else if (name === "Uttar Pradesh") {
      console.log("UP was clicked");
      navigate("/dashboard/comorbid/up");
    } else if (name === "Jammu & Kashmir") {
      console.log("j&k was clicked");
      navigate("/dashboard/comorbid/jk");
    } else if (name === "Telangana") {
      console.log("Telangana was clicked");
      navigate("/dashboard/comorbid/tl");
    } else if (name === "Haryana") {
      console.log("Haryana was clicked");
      navigate("/dashboard/comorbid/hr");
    } else if (name === "Andhra Pradesh") {
      console.log("AP was clicked");
      navigate("/dashboard/comorbid/ap");
    } else if (name === "Punjab") {
      console.log("punjab was clicked");
      navigate("/dashboard/comorbid/pb");
    } else if (name === "Rajasthan") {
      console.log("rajasthan was clicked");
      navigate("/dashboard/comorbid/rj");
    } else if (name === "Sikkim") {
      console.log("Sikkim was clicked");
      navigate("/dashboard/comorbid/sk");
    } else if (name === "West Bengal") {
      console.log("wb was clicked");
      navigate("/dashboard/comorbid/wb");
    } else if (name === "Odisha") {
      console.log("odisha was clicked");
      navigate("/dashboard/comorbid/or");
    } else if (name === "Madhya Pradesh") {
      console.log("mp was clicked");
      navigate("/dashboard/comorbid/mp");
    } else if (name === "Chandigarh") {
      console.log("chandigarh was clicked");
      navigate("/dashboard/comorbid/ch");
    } else if (name === "Tamil Nadu") {
      console.log("tn was clicked");
      navigate("/dashboard/comorbid/tn");
    } else if (name === "Jharkhand") {
      console.log("jharkhand was clicked");
      navigate("/dashboard/comorbid/jh");
    } else if (name === "Himachal Pradesh") {
      console.log("Hp was clicked");
      navigate("/dashboard/comorbid/hp");
    } else if (name === "Uttarakhand") {
      console.log("UK was clicked");
      navigate("/dashboard/comorbid/uk");
    } else if (name === "Bihar") {
      console.log("br was clicked");
      navigate("/dashboard/comorbid/br");
    } else if (name === "Chhattisgarh") {
      console.log("ch was clicked");
      navigate("/dashboard/comorbid/chg");
    } else if (name === "Karnataka") {
      console.log("Krt was clicked");
      navigate("/dashboard/comorbid/krt");
    } else if (name === "Kerala") {
      console.log("Krl was clicked");
      navigate("/dashboard/comorbid/krl");
    } else if (name === "Arunanchal Pradesh") {
      console.log("Arp was clicked");
      navigate("/dashboard/comorbid/arp");
    } else if (name === "Assam") {
      console.log("Asm was clicked");
      navigate("/dashboard/comorbid/asm");
    } else if (name === "Meghalaya") {
      console.log("mgl was clicked");
      navigate("/dashboard/comorbid/mgl");
    } else if (name === "Gujarat") {
      console.log("gj was clicked");
      navigate("/dashboard/comorbid/gj");
    } else if (name === "Tripura") {
      console.log("tpr was clicked");
      navigate("/dashboard/comorbid/tpr");
    } else if (name === "Manipur") {
      console.log("mnpr was clicked");
      navigate("/dashboard/comorbid/mnpr");
    } else if (name === "Mizoram") {
      console.log("mzrm was clicked");
      navigate("/dashboard/comorbid/mzrm");
    } else if (name === "Nagaland") {
      console.log("ngl was clicked");
      navigate("/dashboard/comorbid/ngl");
    }

    // console.log(data);
    setactiveState({ data, name });
  };

  return (
    <div className="map-india">
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
    </div>
  );
};
export default Map_Combo;
