import { Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

import '../style/header.scss';

const Header: React.FC = () => {
    return (
        <Container className='bd-header'>
            <Stack className='greeting' justifyContent='center'>
                <Typography variant='h1' textAlign='center'>С Днем рождения, милая!</Typography>
            </Stack>
            <Stack className='scroll-down' alignItems='center'>
                <ExpandMoreIcon className='icon' fontSize='large' />
                <Typography variant='overline'>Гортай вниз, солнце</Typography>
            </Stack>
        </Container>
    )
};

export default Header;