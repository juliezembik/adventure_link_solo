import React from 'react';

function Player() {


    return (
        <div 
            style={{
                position: 'relative',
                backgroundImage: `url('/player/defaultplayer.png')`,
                backgroundPosition: `0 0`,
                width: '36px',
                height: '61px',
            }}        
        />
    )
}

export default Player;