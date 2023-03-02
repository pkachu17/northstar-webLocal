import { Divider, Grid, Slide, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Toolbar } from "@mui/material";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { CreateRoadmap } from "../../components/Roadmaps/CreateRoadmap/CreateRoadmap";
import { RecentRoadmaps } from "../../components/Roadmaps/RecentRoadmaps/RecentRoadmaps";
import LandingImage from "./../../images/background.jpg";
import "./HomePage.css";
import { Routes } from "../../service/config";
import { sampleTasks } from "../../service/sampleTasks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import SearchHome from "./SearchHome";
import HeroHomepage from "./HeroHomepage";
import TopRatedRoadMaps from "./TopRatedRoadMaps";
import RoadMapsTopics from "./RoadMapsTopics";
import MyRoadMaps from "./MyRoadMaps";
import RoadMapsByAuthors from "./RoadMapsByAuthors";

export const HomePage = () => {

  const [user, loading, error] = useAuthState(auth);
  //user?.getIdToken().then(data => localStorage.setItem("userToken", data));
  // console.log("This is the user token", localStorage.getItem("userToken"));

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Toolbar />
      <SearchHome />
      <HeroHomepage />
      <TopRatedRoadMaps />
      <RoadMapsTopics />
      <MyRoadMaps />
      <RoadMapsByAuthors />
      <Footer />
    </>
  );
};

export default HomePage;
