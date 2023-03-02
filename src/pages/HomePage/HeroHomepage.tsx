import { Box, Grid, Typography, Slide, useMediaQuery, useTheme, Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import HomeImage from "./../../images/background.jpg";

const HeroHomepage = () => {

    // const theme = useTheme();
    // const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

    const history = useHistory();
    const isBigScreen = useMediaQuery('(min-width: 600px)')

    return (

        <Box style={{ paddingLeft: isBigScreen ? '10%' : '5%', paddingRight: isBigScreen ? '10%' : '5%', paddingBottom: '5%', paddingTop: '0%' }}>
            <Grid container spacing={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={isBigScreen ? 5 : 12}>
                    <img src={HomeImage} alt="HomeImage" width="80%" object-fit="cover" />
                </Grid>

                <Grid item xs={isBigScreen ? 7 : 12}>
                    <Typography variant={isBigScreen ? "h3" : "h4"} fontWeight={700} style={isBigScreen ? {} : { textAlign: 'center' }} >
                        Get Started!
                    </Typography>
                    <Typography style={{ textAlign: isBigScreen ? 'justify' : 'left' }} >
                        <br />
                        Our platform provides users to exchange their knowledge and skills regarding the
                        best ways to learn and read scientific papers. Where to start and how to start
                        learning a new topic are two problems that new students to a discipline face.
                        New learners can get off to an easy start thanks to the experts offering their
                        learning maps (each will have a somewhat different viewpoint). By exchanging,
                        giving likes, and building new roadmaps, we create a space where all learners
                        can profit from the advice of the experts.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ width: '200px', fontSize: '16px', marginTop: '20px' }}
                        onClick={() => { history.push('/create') }}
                    >
                        Create
                    </Button>
                </Grid>
            </Grid>
        </Box>


        // <Box>
        //     <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        //         <Grid container item sm={12} lg={9} justify="center" alignItems="center" spacing={3}>
        //             <Grid item sm={12} lg={6}>
        //                 <Slide direction="down" in={true} timeout={1000}>
        //                     <div>
        //                         <Typography variant="h5"></Typography>
        //                         <img
        //                             alt="React Northstar App"
        //                             style={{ height: "400px", width: "500px", transform: isSmallScreen ? "scale(0.5)" : "none" }}
        //                             src={LandingImage}
        //                         ></img>
        //                         <Typography variant="subtitle1">Create custom roadmaps and publish for fellow learners</Typography>
        //                     </div>
        //                 </Slide>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </Box>
    );
}
export default HeroHomepage;