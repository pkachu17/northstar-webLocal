import { Box, Grid, Typography, Slide, useMediaQuery, useTheme, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const SearchHome = () => {

    const isBigScreen = useMediaQuery('(min-width: 600px)');

    return (
        <Box style={{ width: '100%', display: 'flex', flexDirection: 'row', paddingLeft: isBigScreen ? '10%' : '5%', paddingRight: isBigScreen ? '10%' : '5%', paddingBottom: '1%', paddingTop: '1%', justifyContent: 'flex-end' }}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Roadmaps"
                    inputProps={{ 'aria-label': 'search roadmaps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    );
}
export default SearchHome;