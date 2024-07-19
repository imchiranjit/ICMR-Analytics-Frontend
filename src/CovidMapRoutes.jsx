import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StateChartMH from "./pages/StateChart";
export default function CovidMap(){
    return(
        <>
        <Router>
        <Route
            path="/home/state/mh"
            element={<StateChartMH stateResidence={"Maharashtra"} />}
          />
          <Route
            path="/home/state/dl"
            element={<StateChartMH stateResidence={"Delhi"} />}
          />
          <Route
            path="/home/state/pb"
            element={<StateChartMH stateResidence={"Punjab"} />}
          />
          <Route
            path="/home/state/karnataka"
            element={<StateChartMH stateResidence={"Karnataka"} />}
          />
          <Route
            path="/home/state/up"
            element={<StateChartMH stateResidence={"Uttar Pradesh"} />}
          />
          <Route 
          path="/home/state/jk"
          element={<StateChartMH stateResidence={"JAMMU AND KASHMIR"}/>}
          />
          <Route 
          path="/home/state/tl"
          element={<StateChartMH stateResidence={"TELANGANA"}/>}
          />
          <Route
          path="/home/state/hr"
          element={<StateChartMH stateResidence={"HARYANA"}/>}
          />
          <Route
          path="/home/state/ap"
          element={<StateChartMH stateResidence={"ANDRA PRADESH"}/>}
          />
          <Route
          path="/home/state/pb"
          element={<StateChartMH stateResidence={"PUNJAB"}/>}
          />
          <Route
          path="/home/state/rj"
          element={<StateChartMH stateResidence={"Rajasthan"}/>}
          />
          <Route
          path="/home/state/sk"
          element={<StateChartMH stateResidence={"Sikkim"}/>}
          />
          <Route
          path="/home/state/wb"
          element={<StateChartMH stateResidence={"West Bengal"}/>}
          />
          <Route
          path="/home/state/or"
          element={<StateChartMH stateResidence={"Odisha"}/>}
          />
          <Route
          path="/home/state/mp"
          element={<StateChartMH stateResidence={"Madhya Pradesh"}/>}
          />
          <Route
          path="/home/state/ch"
          element={<StateChartMH stateResidence={"Chandigarh"}/>}
          />
          <Route
          path="/home/state/tn"
          element={<StateChartMH stateResidence={"Tamil Nadu"}/>}
          />
          <Route
          path="/home/state/jh"
          element={<StateChartMH stateResidence={"Jharkhand"}/>}
          />
          <Route
          path="/home/state/hp"
          element={<StateChartMH stateResidence={"Himachal Pradesh"}/>}
          />
          <Route
          path="/home/state/uk"
          element={<StateChartMH stateResidence={"Uttarakhand"}/>}
          />
          <Route
          path="/home/state/br"
          element={<StateChartMH stateResidence={"Bihar"}/>}
          />
          <Route
          path="/home/state/chg"
          element={<StateChartMH stateResidence={"Chhattisgarh"}/>}
          />
          <Route
          path="/home/state/krt"
          element={<StateChartMH stateResidence={"Karnataka"}/>}
          />
          <Route
          path="/home/state/krl"
          element={<StateChartMH stateResidence={"Kerala"}/>}
          />
          <Route
          path="/home/state/arp"
          element={<StateChartMH stateResidence={"Arunanchal Pradesh"}/>}
          />
          <Route
          path="/home/state/asm"
          element={<StateChartMH stateResidence={"Assam"}/>}
          />
          <Route
          path="/home/state/mgl"
          element={<StateChartMH stateResidence={"Meghalaya"}/>}
          />
          <Route
          path="/home/state/gj"
          element={<StateChartMH stateResidence={"Gujarat"}/>}
          />
          <Route
          path="/home/state/tpr"
          element={<StateChartMH stateResidence={"Tripura"}/>}
          />
          <Route
          path="/home/state/mnpr"
          element={<StateChartMH stateResidence={"Manipur"}/>}
          />
           <Route
          path="/home/state/mzrm"
          element={<StateChartMH stateResidence={"Mizoram"}/>}
          />
           <Route
          path="/home/state/ngl"
          element={<StateChartMH stateResidence={"Nagaland"}/>}
          />
        </Router>
        </>
    )
}