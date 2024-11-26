import { isPlatform } from "@ionic/react";
import MobileHome from "../android/Home";
import WebHome from "../web/pages/Home";
import { SampleForm } from "./SampleForm";
import SampleForm2 from "./SampleForm2";
import Login from "./Login";
import Dashboard from "./Dashboard";

export const Home = () => {
 // return isPlatform("android") ? <MobileHome /> : <WebHome />;

  return (
  
 // <Login/>
  <Dashboard />

  ) ;
};
