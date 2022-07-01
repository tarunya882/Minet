import React from 'react';
import MuiButton from '@mui/material/Button';

export type ButtonProps = {
}

const Button: React.FC<ButtonProps> = ((props) => {
    return(
        <MuiButton>{'Button'}</MuiButton>
    );
})

export default Button;
