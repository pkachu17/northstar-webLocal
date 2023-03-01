import {
  Card,
  CardContent,
  CardHeader,
  Grow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button
} from '@material-ui/core';
import { Toolbar } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getBoards } from '../../../service/roadmaps';
import { Routes } from '../../../service/config';
import { Roadmap } from '../../../types/roadmap';
import { getIllustration, getBackground } from '../../../utils';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import './RecentRoadmaps.css';
import { auth, getToken } from '../../../firebase';

export const RecentRoadmaps = () => {
  const history = useHistory();
  const [recentBoards, setRecentBoards] = useState<Roadmap[] | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('userToken');

  // const token = getToken();
  // console.log('Token: ',token);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch("https://p9m3dl.deta.dev/roadmap/all/", {
          method: "GET",
          headers: {
            'Access-Control-Allow-Origin': '*',
            'token': `${token}`
          },
        })
        const json = await response.json();
        const result = json.roadmaps;
        setRecentBoards(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, []);

  const isEmptyRecentBoards = (): boolean => {
    if (!recentBoards) {
      return true;
    }
    if (recentBoards && recentBoards.length === 0) {
      return true;
    }
    return false;
  };

  const openRoadmap = (board) => {
    history.push(`${Routes.boards}/${board.uid}`, board);
  };

  return (
    <>
      <Toolbar />
      <Grow in={true} timeout={1000}>
        <div className="ccard">
          {loading ? <>Loading...</> : 
          // isEmptyRecentBoards() ?
          // <Typography variant="body2">No roadmaps found</Typography> :
          recentBoards && recentBoards.length > 0 && (
            <div className="ccardbox">
              {recentBoards.map((recentBoard) => (
                <div
                  className="dcard"
                  style={getBackground(Math.floor(Math.random() * 5))}
                  onClick={() => openRoadmap(recentBoard)}
                >
                  <div className="fpart">
                    <img src={getIllustration(Math.floor(Math.random() * 3))} />
                  </div>
                  <div className="spart">{recentBoard.name}</div>
                  <Button className="spart2" startIcon={<PersonPinIcon />} style={{ textTransform: "none" }}>
                    {recentBoard.author}
                  </Button>
                </div>
              ))}
              
            </div>
          )} 
        </div>
      </Grow>
    </>
  );
};
