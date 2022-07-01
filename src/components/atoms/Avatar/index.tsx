import React from 'react';
import {Avatar as MuiAvatar} from '@mui/material';

export type AvatarProps={
};
  
const Avatar:React.FC<AvatarProps>= ((props) => {
    return (
        <MuiAvatar />
    );
});

export default Avatar;
