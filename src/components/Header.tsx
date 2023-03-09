import { Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';

import '../style/header.scss';

const Header: React.FC = () => {
    return (
        <Container className='bd-header'>
            <Stack className='greeting' justifyContent='center'>
                <Typography variant='h1' textAlign='center'>С Днем рождения, милая <FavoriteIcon className='heart' fontSize='inherit' /></Typography>
            </Stack>
            <Stack className='scroll-down' alignItems='center'>
                <ExpandMoreIcon className='icon' fontSize='large' />
                <Typography variant='overline'>Гортай вниз, солнце</Typography>
            </Stack>
        </Container>
    )
};

export default Header;