import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

export const SocialMedia = () => {
    return (
        <div className=' flex justify-center'>
            <FacebookIcon style={{fill:'#6C7680' , fontSize: '40px', padding: '4px'}}/>
            <InstagramIcon  style={{fill:'#6C7680' , fontSize: '40px', padding: '4px'}} />
            <XIcon  style={{fill:'#6C7680' , fontSize: '40px', padding: '4px'}} />
            <YouTubeIcon style={{fill:'#6C7680' , fontSize: '40px', padding: '4px'}}  />
            <TelegramIcon  style={{fill:'#6C7680' , fontSize: '40px', padding: '4px'}} />
        </div>
    );
}
