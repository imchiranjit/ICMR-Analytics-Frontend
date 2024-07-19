import React, { useEffect, useState } from "react";
import { Bar ,Line} from "react-chartjs-2";
import Header from "../components/Header2";
import Covid_Map from "../components/Covid_Map";
import Breadcrumbs from "../components/Breadcrumbs";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const CovidStateWise = (props) => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [genderChartData, setGenderChartData] = useState([]);
  const [ageChartData, setAgeChartData] = useState([]);
  const [DistrictChartData, setDistrictChartData] = useState([]);
  const [genderChartDataNeg, setGenderChartDataNeg] = useState([]);
  const [ageChartDataNeg, setAgeChartDataNeg] = useState([]);
  const [DistrictChartDataNeg, setDistrictChartDataNeg] = useState([]);
  
  const genderDataURL = `http://localhost:4300/get/Count/covid/positive/${props.stateResidence}/genderwise `;
  const ageDataURL = `http://localhost:4300/get/Count/covid/positive/${props.stateResidence}/agewise`;
  const DistrictDataURL = `http://localhost:4300/get/Count/covid/positive/${props.stateResidence}/distwise`;
  const genderDataNegURL = `http://localhost:4300/get/Count/covid/negative/${props.stateResidence}/genderwise `;
  const ageDataNegURL = `http://localhost:4300/get/Count/covid/negative/${props.stateResidence}/agewise`;
  const DistrictDataNegURL = `http://localhost:4300/get/Count/covid/positive/${props.stateResidence}/distwise`;

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
    fetchData(genderDataNegURL, setGenderChartDataNeg);
    fetchData(ageDataNegURL, setAgeChartDataNeg);
    fetchData(DistrictDataNegURL, setDistrictChartDataNeg);
  }, [genderDataURL, ageDataURL, DistrictDataURL,genderDataNegURL, ageDataNegURL, DistrictDataNegURL]);

  const genderData = {
    labels: genderChartData?.map((x) => x.gender),
    datasets: [
      {
        barPercentage: 0.5,
        maxBarThickness: 40,
        minBarLength: 2,
        label: `${genderChartData?.length} Count in Covid Positive`,
        data: genderChartData?.map((x) => x.count),
        backgroundColor: [
         
          "rgb(75, 192, 192,0.7)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
       
        ],
        borderWidth: 2,
      },
      //
      {
        barPercentage: 0.5,
        maxBarThickness: 40,
        minBarLength: 2,
        label: `${genderChartDataNeg?.length} Count in Covid Negative`,
        data: genderChartDataNeg?.map((x) => x.count),
        backgroundColor: [
        
          "rgb(54, 162, 235,0.9)",
       
        ],
        borderColor: [
       
          "rgb(54, 162, 235)",
        
       
        ],
        borderWidth: 2,
      },
    ],
  };

  const ageData = {
    labels: ageChartData?.map((x) => x.age), // Use "age" instead of "Age"
    datasets: [
      {
        label: `${ageChartData?.length} Count in Covid Positive`,
        data: ageChartData?.map((x) => parseInt(x.count)), // Use "count" instead of "Count"
        backgroundColor: [
          "rgb(75, 192, 192,0.9)",
       
        ],
        borderColor: [
         
          "rgb(75, 192, 192)",
        
        ],
        borderWidth: 2,
      },
      {
        label: `${ageChartDataNeg?.length} Count in Covid Negative`,
        data: ageChartDataNeg?.map((x) => parseInt(x.count)), // Use "count" instead of "Count"
        backgroundColor: [
        
          "rgb(54, 162, 235,0.9)",
        ],
        borderColor: [
         
          "rgb(54, 162, 235)",
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
        label: `${DistrictChartData?.length} Count in Covid Positive`,
        data: DistrictChartData?.map((x) => x.count),
        backgroundColor: [
          "rgb(75, 192, 192,0.7)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
        ],
        borderWidth: 2,
      },
      //
      {
        barPercentage: 0.8,
        maxBarThickness: 40,
        minBarLength: 10,
        label: `${DistrictChartDataNeg?.length} Count in Covid Negative`,
        data: DistrictChartDataNeg?.map((x) => x.count),
        backgroundColor: [
          "rgb(54, 162, 235,0.7)",
        ],
        borderColor: [
          "rgb(54, 162, 235)",       
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
        stacked:"true",
        grid: { display: false },
      },
      y: {
        stacked:"true",
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
      x: {
        stacked:true,
        grid: { display: false },
      },
      y: {
        
        beginAtZero: true,
        grid: { display: false },
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
        stacked:"true",
        grid: { display: false },
      },
      y: {
        stacked:"true",
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
      <div className="title text-[40px] pt-2 lg:text-[33px] font-bold leading-tight mt-8 page-title justify-center"><h2>State-Wise Covid Data</h2></div>
      <div className="map-wrapper">
        <div className="map-flex">
          <Covid_Map />
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
                <Line data={ageData} height={200} options={ageOptions} />
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
  export default CovidStateWise;