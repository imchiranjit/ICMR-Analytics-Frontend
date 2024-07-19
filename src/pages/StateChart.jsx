import React, { useEffect, useState } from "react";
import { Bar, PolarArea } from "react-chartjs-2";
import Header from "../components/Header2";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const StateChartMH = (props) => {

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [genderChartData, setGenderChartData] = useState([]);
  const [ageChartData, setAgeChartData] = useState([]);
  const [DistrictChartData, setDistrictChartData] = useState([]);
  
  const genderDataURL = `http://localhost:4300/get/Gender/Count/State/${props.stateResidence} `;
  const ageDataURL = `http://localhost:4300/get/Age/Range/Malignancy/State/${props.stateResidence}`;
  const DistrictDataURL = `http://localhost:4300/get/Malignant/Count/State/${props.stateResidence}`;
  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log("Data fetched successfully:", url);
          console.log(data);
        } else {
          console.log("Failed to fetch data:", response.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(genderDataURL, setGenderChartData);
    fetchData(ageDataURL, setAgeChartData);
    fetchData(DistrictDataURL, setDistrictChartData);
  }, [genderDataURL, ageDataURL, DistrictDataURL]);

  const genderData = {
    labels: genderChartData?.map((x) => x.gender),
    datasets: [
      {
        barPercentage: 0.5,
        maxBarThickness: 40,
        minBarLength: 2,
        label: `${genderChartData?.length} Count  in Gender Dataset`,
        data: genderChartData?.map((x) => x.count),
        backgroundColor: [
          "rgb(255, 99, 132,0.7)",
          "rgb(255, 159, 64,0.7)",
          "rgb(255, 205, 86,0.7)",
          "rgb(75, 192, 192,0.7)",
          "rgb(54, 162, 235,0.7)",
          "rgb(153, 102, 255,0.7)",
          "rgb(201, 203, 207,0.7)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
       
        ],
        borderWidth: 2,
      },
    ],
  };

  const ageData = {
    labels: ageChartData?.map((x) => x.age_range), // Use "age" instead of "Age"
    datasets: [
      {
        label: `${ageChartData?.length} Count in Age Dataset`,
        data: ageChartData?.map((x) => parseInt(x.count)), // Use "count" instead of "Count"
        backgroundColor: [
          "rgb(255, 99, 132,0.5)",
          "rgb(255, 159, 64,0.5)",
          "rgb(255, 205, 86,0.5)",
          "rgb(75, 192, 192,0.5)",
          "rgb(54, 162, 235,0.5)",
          "rgb(153, 102, 255,0.5)",
          "rgb(201, 203, 207,0.5)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const DistrictData = {
    labels: DistrictChartData?.map((x) => x.district_residence),
    datasets: [
      {
        barPercentage: 0.8,
        maxBarThickness: 40,
        minBarLength: 2,
        label: `${DistrictChartData?.length} Count in District Dataset`,
        data: DistrictChartData?.map((x) => x.count),
        backgroundColor: [
          "rgb(255, 99, 132,0.7)",
          "rgb(255, 159, 64,0.7)",
          "rgb(255, 205, 86,0.7)",
          "rgb(75, 192, 192,0.7)",
          "rgb(54, 162, 235,0.7)",
          "rgb(153, 102, 255,0.7)",
          "rgb(201, 203, 207,0.7)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
       
        ],
        borderWidth: 2,
      },
    ],
  };

  const genderOptions = {
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
    },
    plugins: {
      tooltip: {
        events: ["mousemove"],
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = `Count: ${context.parsed.y}`;
            return label;
          },
        },
      },
    },
    legend: {
      labels: {
        fontSize: 60,
      },
    },
  };

  const ageOptions = {
    maintainAspectRatio: true,
    scales: {
      r: {
        grid: { display: true },
        angleLines: { display: true },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = "";
            if (context.dataset) {
              label = `Count: ${context.dataset.data[context.dataIndex]}`;
            }
            return label;
          },
        },
      },
    },
    legend: {
      labels: {
        position: "top",
        fontSize: 12,
      },
      title: {
        display: true,
        text: "Chart.js Polar Area Chart With Centered Point Labels",
      },
    },
  };
  const DistrictOptions = {
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
    },
    plugins: {
      tooltip: {
        events: ["mousemove"],
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = `Count: ${context.parsed.y}`;
            return label;
          },
        },
      },
    },
    legend: {
      labels: {
        fontSize: 60,
      },
    },
  };

  return (
    <>
    <div className="header_home">
      <Header>
        <Link to="/" onClick={logout}>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shutdown--v1.png"
            className="mr-8"
            alt="shutdown--v1"
          />
        </Link>
      </Header>
    </div>
    <div className="b_home">
      <Breadcrumbs>
        <Breadcrumb linkto="/dashboard" title="Dashboard" />
        <Breadcrumb linkto="/dashboard/state/mh" title="State Chart" />
      </Breadcrumbs>
    </div>
    <div className="state-chart-container" style={{position:"relative", top: "100px"}}>
      <div className="title text-[40px] pt-2 lg:text-[33px] font-bold leading-tight mt-8 page-title justify-center"><h2>State-Wise Malignancy Data</h2></div>
      <div className="map-wrapper">
        <div className="map-flex">
          <Map />
        </div>
        <div className="data-container">
          <div className="stateData">
          <div className=" p-4 state-text">
            <p className="text-center text-[18px] font-bold">State Name : {props.stateResidence}</p>
          </div>
          <div
            className=""
            style={{
              color: props.Mode === "dark" ? "#e7eaf6" : "#132743",
              fontFamily: "Calibri",
            }}
          >
            <div className="">
              <div
                className="mx-auto my-10 canvas-graph"
                style={{maxWidth:"400px", minWidth:"400px"
                  // boxShadow:
                  //   "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <h4 className="text-center">
                  <em>On the basis of Gender</em>
                </h4>
                <Bar data={genderData} height={200} options={genderOptions} />
              </div>
              <div
                className="mx-auto my-10 canvas-graph"
                style={{maxWidth:"400px",minWidth:"400px"
                  // boxShadow:
                  //   "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <h4 className="text-center">
                  <em>On the basis of Age</em>
                </h4>
                <PolarArea data={ageData} height={200} options={ageOptions} />
              </div>
            </div>
            <div
              className="mx-auto my-10 canvas-graph"
              style={{maxWidth:"400px",minWidth:"400px"
                // boxShadow:
                //   "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px ",
              }}
            >
              <h4 className="text-center">
                <em>On the basis of District</em>
              </h4>
              <Bar data={DistrictData} height={200} options={DistrictOptions} />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      </div>
      </>
    );
  };  
  export default StateChartMH;