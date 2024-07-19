import Header from "../components/Header2";
import Footer from "../components/Footer";
import GenderChart from "./GenderChart";
import AgePie from "./AgePie";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Breadcrumbs from "../components/Breadcrumbs";
import StateChartData from "../components/covidpos_statewise";
import StateChartData2 from "../components/covidCombo_Statewise";
import StateChartData1 from "../components/malignancy_statewise";
import Breadcrumb from "../components/Breadcrumb";

const Home = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <div className="header_home">
        <Header>
          <div className="flex items-center">
            {/* <Link to="/dashboard/state/mh">
              <button type="button" className="state-button">
                State-wise Data
              </button>
            </Link> */}
            <Link to="/" onClick={logout}>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shutdown--v1.png"
                className="mr-8"
                alt="shutdown--v1"
              />
            </Link>
          </div>
        </Header>
      </div>
      <div className="b_home">
        <Breadcrumbs>
            <Breadcrumb linkto="/dashboard" title="Dashboard" />
        </Breadcrumbs>
      </div>
      <div className="dashboard-container">
        <div className="title text-[40px] lg:text-[45px] font-bold leading-tight mt-10 page-title">
          Dashboard
        </div>

        <div className="flex flex-col mx-auto justify-between md:mx-[100px] xl:mx-[200px] md:flex-row">
          <div className="mx-10 my-8 md:w-[400px] 2xl:w-[600px] h-auto">
            <GenderChart />
          </div>
          <div className="mx-10 my-8 md:w-[400px] 2xl:w-[600px] h-auto">
            <AgePie />
          </div>
        </div>
        <div className="state-covid-pos-data">
          <StateChartData />
        </div>
        <div className="explore">
          <Link to='/dashboard/covid/dl'>
            <button type="button" className="explore-button">Explore More <i class="uil uil-arrow-right explore-icon"></i></button>
          </Link>
        </div>
        <div className="state-covid-pos-data">
          <StateChartData2 />
        </div>
        <div className="explore">
          <Link to='/dashboard/comorbid/dl'>
            <button type="button" className="explore-button">Explore More <i class="uil uil-arrow-right explore-icon"></i></button>
          </Link>
        </div>
        <div className="state-covid-pos-data">
          <StateChartData1 />
        </div>
        <div className="explore">
          <Link to='/dashboard/state/dl'>
            <button type="button" className="explore-button">Explore More <i class="uil uil-arrow-right explore-icon"></i></button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;