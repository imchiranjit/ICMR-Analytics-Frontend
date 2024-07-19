import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Login from "./pages/loginpage";
import Dhamaka from "./pages/Dhamaka";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import StateChartMH from "./pages/StateChart";
import Comorbid from "./pages/Comorbid";
import CovidStateWise from "./pages/CovidStateWise";

export default function App() {
  const isAuth = localStorage.getItem("token-info") ? true : false;
  const RestrictedRoutes = () => {
    return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
  };

  const PrivateRoutes = () => {
    return <>{isAuth ? <Outlet /> : <Navigate to="/" />}</>;
  };

  return (
    <>
      <Router>
        {/* <CovidMap /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dhamaka" element={<Dhamaka />} />
          <Route element={<RestrictedRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/state/mh"
              element={<StateChartMH stateResidence={"Maharashtra"} />}
            />
            <Route
              path="/dashboard/state/dl"
              element={<StateChartMH stateResidence={"Delhi"} />}
            />
            <Route
              path="/dashboard/state/pb"
              element={<StateChartMH stateResidence={"Punjab"} />}
            />
            <Route
              path="/dashboard/state/karnataka"
              element={<StateChartMH stateResidence={"Karnataka"} />}
            />
            <Route
              path="/dashboard/state/up"
              element={<StateChartMH stateResidence={"Uttar Pradesh"} />}
            />
            <Route
              path="/dashboard/state/jk"
              element={<StateChartMH stateResidence={"JAMMU AND KASHMIR"} />}
            />
            <Route
              path="/dashboard/state/tl"
              element={<StateChartMH stateResidence={"TELANGANA"} />}
            />
            <Route
              path="/dashboard/state/hr"
              element={<StateChartMH stateResidence={"HARYANA"} />}
            />
            <Route
              path="/dashboard/state/ap"
              element={<StateChartMH stateResidence={"ANDRA PRADESH"} />}
            />
            <Route
              path="/dashboard/state/pb"
              element={<StateChartMH stateResidence={"PUNJAB"} />}
            />
            <Route
              path="/dashboard/state/rj"
              element={<StateChartMH stateResidence={"Rajasthan"} />}
            />
            <Route
              path="/dashboard/state/sk"
              element={<StateChartMH stateResidence={"Sikkim"} />}
            />
            <Route
              path="/dashboard/state/wb"
              element={<StateChartMH stateResidence={"West Bengal"} />}
            />
            <Route
              path="/dashboard/state/or"
              element={<StateChartMH stateResidence={"Odisha"} />}
            />
            <Route
              path="/dashboard/state/mp"
              element={<StateChartMH stateResidence={"Madhya Pradesh"} />}
            />
            <Route
              path="/dashboard/state/ch"
              element={<StateChartMH stateResidence={"Chandigarh"} />}
            />
            <Route
              path="/dashboard/state/tn"
              element={<StateChartMH stateResidence={"Tamil Nadu"} />}
            />
            <Route
              path="/dashboard/state/jh"
              element={<StateChartMH stateResidence={"Jharkhand"} />}
            />
            <Route
              path="/dashboard/state/hp"
              element={<StateChartMH stateResidence={"Himachal Pradesh"} />}
            />
            <Route
              path="/dashboard/state/uk"
              element={<StateChartMH stateResidence={"Uttarakhand"} />}
            />
            <Route
              path="/dashboard/state/br"
              element={<StateChartMH stateResidence={"Bihar"} />}
            />
            <Route
              path="/dashboard/state/chg"
              element={<StateChartMH stateResidence={"Chhattisgarh"} />}
            />
            <Route
              path="/dashboard/state/krt"
              element={<StateChartMH stateResidence={"Karnataka"} />}
            />
            <Route
              path="/dashboard/state/krl"
              element={<StateChartMH stateResidence={"Kerala"} />}
            />
            <Route
              path="/dashboard/state/arp"
              element={<StateChartMH stateResidence={"Arunanchal Pradesh"} />}
            />
            <Route
              path="/dashboard/state/asm"
              element={<StateChartMH stateResidence={"Assam"} />}
            />
            <Route
              path="/dashboard/state/mgl"
              element={<StateChartMH stateResidence={"Meghalaya"} />}
            />
            <Route
              path="/dashboard/state/gj"
              element={<StateChartMH stateResidence={"Gujarat"} />}
            />
            <Route
              path="/dashboard/state/tpr"
              element={<StateChartMH stateResidence={"Tripura"} />}
            />
            <Route
              path="/dashboard/state/mnpr"
              element={<StateChartMH stateResidence={"Manipur"} />}
            />
            <Route
              path="/dashboard/state/mzrm"
              element={<StateChartMH stateResidence={"Mizoram"} />}
            />
            <Route
              path="/dashboard/state/ngl"
              element={<StateChartMH stateResidence={"Nagaland"} />}
            />
            <Route
              path="/dashboard/comorbid/mh"
              element={<Comorbid stateResidence={"Maharashtra"} />}
            />
            <Route
              path="/dashboard/comorbid/dl"
              element={<Comorbid stateResidence={"Delhi"} />}
            />
            <Route
              path="/dashboard/comorbid/pb"
              element={<Comorbid stateResidence={"Punjab"} />}
            />
            <Route
              path="/dashboard/comorbid/karnataka"
              element={<Comorbid stateResidence={"Karnataka"} />}
            />
            <Route
              path="/dashboard/comorbid/up"
              element={<Comorbid stateResidence={"Uttar Pradesh"} />}
            />
            <Route
              path="/dashboard/comorbid/jk"
              element={<Comorbid stateResidence={"JAMMU AND KASHMIR"} />}
            />
            <Route
              path="/dashboard/comorbid/tl"
              element={<Comorbid stateResidence={"TELANGANA"} />}
            />
            <Route
              path="/dashboard/comorbid/hr"
              element={<Comorbid stateResidence={"HARYANA"} />}
            />
            <Route
              path="/dashboard/comorbid/ap"
              element={<Comorbid stateResidence={"ANDRA PRADESH"} />}
            />
            <Route
              path="/dashboard/comorbid/pb"
              element={<Comorbid stateResidence={"PUNJAB"} />}
            />
            <Route
              path="/dashboard/comorbid/rj"
              element={<Comorbid stateResidence={"Rajasthan"} />}
            />
            <Route
              path="/dashboard/comorbid/sk"
              element={<Comorbid stateResidence={"Sikkim"} />}
            />
            <Route
              path="/dashboard/comorbid/wb"
              element={<Comorbid stateResidence={"West Bengal"} />}
            />
            <Route
              path="/dashboard/comorbid/or"
              element={<Comorbid stateResidence={"Odisha"} />}
            />
            <Route
              path="/dashboard/comorbid/mp"
              element={<Comorbid stateResidence={"Madhya Pradesh"} />}
            />
            <Route
              path="/dashboard/comorbid/ch"
              element={<Comorbid stateResidence={"Chandigarh"} />}
            />
            <Route
              path="/dashboard/comorbid/tn"
              element={<Comorbid stateResidence={"Tamil Nadu"} />}
            />
            <Route
              path="/dashboard/comorbid/jh"
              element={<Comorbid stateResidence={"Jharkhand"} />}
            />
            <Route
              path="/dashboard/comorbid/hp"
              element={<Comorbid stateResidence={"Himachal Pradesh"} />}
            />
            <Route
              path="/dashboard/comorbid/uk"
              element={<Comorbid stateResidence={"Uttarakhand"} />}
            />
            <Route
              path="/dashboard/comorbid/br"
              element={<Comorbid stateResidence={"Bihar"} />}
            />
            <Route
              path="/dashboard/comorbid/chg"
              element={<Comorbid stateResidence={"Chhattisgarh"} />}
            />
            <Route
              path="/dashboard/comorbid/krt"
              element={<Comorbid stateResidence={"Karnataka"} />}
            />
            <Route
              path="/dashboard/comorbid/krl"
              element={<Comorbid stateResidence={"Kerala"} />}
            />
            <Route
              path="/dashboard/comorbid/arp"
              element={<Comorbid stateResidence={"Arunanchal Pradesh"} />}
            />
            <Route
              path="/dashboard/comorbid/asm"
              element={<Comorbid stateResidence={"Assam"} />}
            />
            <Route
              path="/dashboard/comorbid/mgl"
              element={<Comorbid stateResidence={"Meghalaya"} />}
            />
            <Route
              path="/dashboard/comorbid/gj"
              element={<Comorbid stateResidence={"Gujarat"} />}
            />
            <Route
              path="/dashboard/comorbid/tpr"
              element={<Comorbid stateResidence={"Tripura"} />}
            />
            <Route
              path="/dashboard/comorbid/mnpr"
              element={<Comorbid stateResidence={"Manipur"} />}
            />
            <Route
              path="/dashboard/comorbid/mzrm"
              element={<Comorbid stateResidence={"Mizoram"} />}
            />
            <Route
              path="/dashboard/comorbid/ngl"
              element={<Comorbid stateResidence={"Nagaland"} />}
            />
            <Route
              path="/dashboard/covid/mh"
              element={<CovidStateWise stateResidence={"Maharashtra"} />}
            />
            <Route
              path="/dashboard/covid/dl"
              element={<CovidStateWise stateResidence={"Delhi"} />}
            />
            <Route
              path="/dashboard/covid/pb"
              element={<CovidStateWise stateResidence={"Punjab"} />}
            />
            <Route
              path="/dashboard/covid/karnataka"
              element={<CovidStateWise stateResidence={"Karnataka"} />}
            />
            <Route
              path="/dashboard/covid/up"
              element={<CovidStateWise stateResidence={"Uttar Pradesh"} />}
            />
            <Route
              path="/dashboard/covid/jk"
              element={<CovidStateWise stateResidence={"JAMMU AND KASHMIR"} />}
            />
            <Route
              path="/dashboard/covid/tl"
              element={<CovidStateWise stateResidence={"Telangana"} />}
            />
            <Route
              path="/dashboard/covid/hr"
              element={<CovidStateWise stateResidence={"Haryana"} />}
            />
            <Route
              path="/dashboard/covid/ap"
              element={<CovidStateWise stateResidence={"Andhra Pradesh"} />}
            />
            <Route
              path="/dashboard/covid/pb"
              element={<CovidStateWise stateResidence={"Punjab"} />}
            />
            <Route
              path="/dashboard/covid/rj"
              element={<CovidStateWise stateResidence={"Rajasthan"} />}
            />
            <Route
              path="/dashboard/covid/sk"
              element={<CovidStateWise stateResidence={"Sikkim"} />}
            />
            <Route
              path="/dashboard/covid/wb"
              element={<CovidStateWise stateResidence={"West Bengal"} />}
            />
            <Route
              path="/dashboard/covid/or"
              element={<CovidStateWise stateResidence={"Odisha"} />}
            />
            <Route
              path="/dashboard/covid/mp"
              element={<CovidStateWise stateResidence={"Madhya Pradesh"} />}
            />
            <Route
              path="/dashboard/covid/ch"
              element={<CovidStateWise stateResidence={"Chandigarh"} />}
            />
            <Route
              path="/dashboard/covid/tn"
              element={<CovidStateWise stateResidence={"Tamil Nadu"} />}
            />
            <Route
              path="/dashboard/covid/jh"
              element={<CovidStateWise stateResidence={"Jharkhand"} />}
            />
            <Route
              path="/dashboard/covid/hp"
              element={<CovidStateWise stateResidence={"Himachal Pradesh"} />}
            />
            <Route
              path="/dashboard/covid/uk"
              element={<CovidStateWise stateResidence={"Uttarakhand"} />}
            />
            <Route
              path="/dashboard/covid/br"
              element={<CovidStateWise stateResidence={"Bihar"} />}
            />
            <Route
              path="/dashboard/covid/chg"
              element={<CovidStateWise stateResidence={"Chhattisgarh"} />}
            />
            <Route
              path="/dashboard/covid/krt"
              element={<CovidStateWise stateResidence={"Karnataka"} />}
            />
            <Route
              path="/dashboard/covid/krl"
              element={<CovidStateWise stateResidence={"Kerala"} />}
            />
            <Route
              path="/dashboard/covid/arp"
              element={<CovidStateWise stateResidence={"Arunanchal Pradesh"} />}
            />
            <Route
              path="/dashboard/covid/asm"
              element={<CovidStateWise stateResidence={"Assam"} />}
            />
            <Route
              path="/dashboard/covid/mgl"
              element={<CovidStateWise stateResidence={"Meghalaya"} />}
            />
            <Route
              path="/dashboard/covid/gj"
              element={<CovidStateWise stateResidence={"Gujarat"} />}
            />
            <Route
              path="/dashboard/covid/tpr"
              element={<CovidStateWise stateResidence={"Tripura"} />}
            />
            <Route
              path="/dashboard/covid/mnpr"
              element={<CovidStateWise stateResidence={"Manipur"} />}
            />
            <Route
              path="/dashboard/covid/mzrm"
              element={<CovidStateWise stateResidence={"Mizoram"} />}
            />
            <Route
              path="/dashboard/covid/ngl"
              element={<CovidStateWise stateResidence={"Nagaland"} />}
            />
              
          </Route>
        </Routes>
      </Router>
    </>
  );
}