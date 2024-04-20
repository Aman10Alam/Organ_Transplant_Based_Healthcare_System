import { lookInSession } from "../common/session"
import { useEffect } from "react";
import {Navigate} from "react-router-dom"
import SurveyComponent from"../components/AddPatientForm/src/SurveyComponent"
import Layout from "./Layout";
import {Routes,Route} from "react-router-dom";

const HomePage= ()=>{

    let userInSession= JSON.parse(lookInSession("user"))
    
    return (
        <>
            {
                !(userInSession)? <Navigate to="/login"/>
                :
                <Layout>
                    <Routes>
                        <Route path="/addpatient" element={<SurveyComponent/>}/>
                    </Routes>
                </Layout>
            }
        </>
    )
}

export default HomePage