import { useState, useEffect } from 'react';
import { Box, Grid, Grow, Typography, Slide, useMediaQuery, useTheme, Button } from '@mui/material';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Roadmap } from '../../types/roadmap';
import { getIllustration, getBackground } from '../../utils';
import { useHistory } from "react-router-dom";

const RoadMapsTopics = () => {

    const [recentBoards, setRecentBoards] = useState<Roadmap[] | undefined>(undefined);
    const history = useHistory();
    const isBigScreen = useMediaQuery('(min-width: 600px)');

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

    const openRoadmap = (board) => {
        history.push("/boards/" + `${board.uid}`, board);
    };


    return (
        <Box style={{ paddingLeft: isBigScreen ? '10%' : '5%', paddingRight: isBigScreen ? '10%' : '5%', paddingBottom: '5%', paddingTop: '0%' }}>
            <Grid container spacing={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={isBigScreen ? 12 : 12}>
                    <Typography variant={isBigScreen ? "h4" : "h5"} fontWeight={700} style={isBigScreen ? {} : { textAlign: 'center' }} >
                        By Topics
                    </Typography>
                    <Grow style={{ paddingTop: '20px' }} in={true} timeout={1000}>
                        <div className="ccard">
                            {isEmptyRecentBoards() && <Typography variant="body2">No roadmaps found</Typography>}
                            {recentBoards && recentBoards.length > 0 && (
                                <div className="ccardbox">
                                    {recentBoards.slice(0, 4).map((recentBoard) => (
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
                    <Button
                        variant="contained"
                        sx={{ width: '200px', fontSize: '16px', marginTop: '20px' }}
                        onClick={() => { history.push('/Register') }}
                    >
                        Explore More
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
export default RoadMapsTopics;