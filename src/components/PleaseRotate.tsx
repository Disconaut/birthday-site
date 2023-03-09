import React from 'react';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import { Stack } from '@mui/material';

import '../style/pleaseRotate.scss';

const PleaseRotate: React.FC = () => {
    return (
        <Stack className="bd-please-rotate" justifyContent="center" alignItems="center" spacing={2}>
            <ScreenRotationIcon className="icon" />
            <div className="text">Пожалуйста, переверни</div>
        </Stack>
    );
};

export default PleaseRotate;