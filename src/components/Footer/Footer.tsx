import { Divider, Link, Slide, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Footer.css';
import GithubIcon from '@material-ui/icons/GitHub';

export const Footer = () => {
  return (
    <Slide in={true} direction='up' timeout={500}>
      <div className='FooterSection'>
        <Divider variant='middle'></Divider>
        <div className='FooterContainer'>
          <div className='FooterItemContainer'>
            <CopyrightIcon color='primary' fontSize='small' />
            <Typography color='textSecondary' variant='body2'>
              northstar
            </Typography>
          </div>

          <Divider orientation='vertical' flexItem></Divider>
          <div className='FooterItemContainer'>
            <Typography color='textSecondary' variant='body2'>
              northstar@buffalo.edu
            </Typography>
          </div>

          <Divider orientation='vertical' flexItem></Divider>
          <Link href=''><GithubIcon fontSize='inherit' />          Submit an Issue</Link>
        </div>
      </div>
    </Slide>
  );
};
