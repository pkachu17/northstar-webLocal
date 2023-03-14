import { Grow } from '@material-ui/core';
import { Toolbar } from "@mui/material";
import { useEffect, useState } from 'react';
import { Roadmap } from '../../../types/roadmap';
import './RecentRoadmaps.css';
import CardArea from '../../Card/CardArea';
import Spinners from '../../Spinners/Spinners';

export const RecentRoadmaps = () => {

  const [recentBoards, setRecentBoards] = useState<Roadmap[] | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        let token = localStorage.getItem("userToken");
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

  return (
    <>
      <Toolbar />
      <Toolbar />
      <Grow in={true} timeout={1000}>
        <div className="ccard">
          {isEmptyRecentBoards() && <Spinners />}
          {recentBoards && recentBoards.length > 0 && (
            <div className="ccardbox">
              {recentBoards.map((recentBoard) => (
                <CardArea props={recentBoard} />
              ))}
            </div>
          )}
        </div>
      </Grow>
    </>
  );
};
