import React from 'react';
import ReactPlayer from 'react-player/file';
import { Container, Grid } from '@mui/material';

import '../style/video.scss';

const Video: React.FC = () => {
    return (
        <Container className='bd-video'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center'>
                <Grid item xs={4} sm={4} md={4}>
                    <ReactPlayer
                        className='player'
                        url='video.mp4'
                        width='100%'
                        height='inherit'
                        controls
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Video;