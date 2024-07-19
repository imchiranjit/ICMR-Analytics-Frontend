import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const StateChartData1 = () => {
  const [stateChartData, setStateChartData] = useState([]);
  const [stateChartDataNeg, setStateChartDataNeg]=useState([]);

  const stateDataURL = "http://localhost:4300/Map/Cov/Mal/State/Count";
  const stateDataNegURL="http://localhost:4300/get/Count/covid/nonmalignancy/statewise";
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
    fetchData(stateDataURL, setStateChartData);
    fetchData(stateDataNegURL, setStateChartDataNeg)
  }, [stateDataURL]);

  const stateData = {
    labels: stateChartDataNeg?.map((x) => x.state_residence),
    datasets:[
        {
        barPercentage: 0.5,
        maxBarThickness: 40,
        minBarLength: 20,
        label: `${stateChartData.length} Count in Malignant`,
        data:stateChartData?.map((x) => x.malignancy_count),
        backgroundColor: [
           "rgb(255, 99, 132,0.9)",
          "rgb(255, 159, 64,0.9)",
          "rgb(255, 205, 86,0.9)",
          "rgb(75, 192, 192,0.9)",
          "rgb(54, 162, 235,0.9)",
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
        {
          barPercentage: 0.5,
          maxBarThickness: 40,
          minBarLength: 20,
          label: `${stateChartDataNeg.length} Count in Non-Malignant`,
          data:stateChartDataNeg?.map((x) => x.count),
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
    ]
    
  };
  

  const stateOptions = {
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
    legend:{
      display:true
    }
    
  };
  return (
    <>
      <div className="row justify-content-center  my-30">
        <div
          className="col mx-2 my-2"
          style={{
            fontFamily: "Calibri",
          }}
        >
          <h4  className="text-center text-[24px]" style={{fontWeight:"600"}}>
            <em>State Wise Malignancy Count</em>
          </h4>
          <Bar data={stateData} height={50} options={stateOptions} />
        </div>
      </div>
    </>
  );
};

export default StateChartData1;
