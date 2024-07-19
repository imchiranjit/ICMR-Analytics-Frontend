import Header from '../components/Header2'
import Carousel from '../components/Carousel1'
import { Link } from 'react-router-dom'
import '../components/dhamaka.css'
import GenderChart from './GenderChart'
import AgePie from './AgePie'
import StateChartData from "../components/covidpos_statewise";
import StateChartData2 from "../components/covidCombo_Statewise";
import StateChartData1 from "../components/malignancy_statewise";

export default function Dhamaka(){
    return (
        <div className='dhamaka'>
            <div className="header_main snap-align">
                <Header />
            </div>
            <div className='carousel-full snap-align'>
                <Carousel />
            </div>
            <div className='rk snap-align' style={{position: "relative",top:"100vh"}}>
                <div className="flex flex-col mx-auto justify-between md:mx-[100px] xl:mx-[200px] md:flex-row">
                    <div className="mx-10 my-8 max-w-[400px] anim anim1">
                        <GenderChart />
                    </div>
                    <div className="mx-10 my-8 max-w-[400px] anim anim1">
                        <AgePie />
                    </div>
                </div>
            </div>
            <div className='rk snap-align' style={{position: "relative",top:"100vh"}}>
                <div className="state-covid-pos-data anim anim1">
                    <StateChartData />
                </div>
                <div className="explore anim anim2">
                    <Link to='/dashboard/state/mh'>
                        <button type="button" className="explore-button">Explore More <i class="uil uil-arrow-right explore-icon"></i></button>
                    </Link>
                </div>
                <div className="state-covid-pos-data1 anim anim1">
                    <StateChartData2 />
                </div>
                <div className="explore anim anim2">
                    <Link to='/dashboard/state/mh'>
                        <button type="button" className="explore-button">Explore More <i class="uil uil-arrow-right explore-icon"></i></button>
                    </Link>
                </div>
                <div className="state-covid-pos-data2 anim anim1">
                    <StateChartData1 />
                </div>
                <div className="explore mb-0 pb-4 anim anim2">
                    <Link to='/dashboard/state/mh'>
                        <button type="button" className="explore-button">Explore More <i class="uil uil-arrow-right explore-icon"></i></button>
                    </Link>
                </div>
            </div>
            <div className='rk snap-align flex flex-col justify-center items-center' style={{position: "relative",top:"100vh"}}>
                <div className='anim anim1'>
                    <h1>Ram</h1>
                    <h2>Krishna</h2>
                    <h3>Hari</h3>
                </div>
            </div>
        </div>
    )
}