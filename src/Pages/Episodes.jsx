import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { EPISODES_URL } from '../constants';

const useStyles = makeStyles({
    home: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    prompt: {
        color: 'white',
    },
    button: {
        width: '90vw',
        height: '10vh',
        backgroundColor: '#2E88D1',
    }

})

const Episodes = (props) => {
    const classes = useStyles()
    const episodes = [
        {
            name: 'Episode 1: The Phantom Menace',
            image: '/episodes/episode1.jpg'
        },
        {
            name: 'Episode 2: Attack of the Clones',
            image: '/episodes/episode2.jpg'
        },
        {
            name: 'Episode 3: Revenge of the Sith',
            image: '/episodes/episode3.jpg'
        },
        {
            name: 'Episode 4: A New Hope',
            image: '/episodes/episode4.jpg'
        },
        {
            name: 'Episode 5: The Empire Strikes Back',
            image: '/episodes/episode5.jpg'
        },
        {
            name: 'Episode 6: Return of the Jedi',
            image: '/episodes/episode6.jpg'
        },
        {
            name: 'Episode 7: The Force Awakens',
            image: '/episodes/episode7.jpg'
        },
        {
            name: 'Episode 8: The Last Jedi',
            image: '/episodes/episode8.jpg'
        },
        {
            name: 'Episode 9: The Rise of Skywalker',
            image: '/episodes/episode9.jpg'
        }
    ]
    return (
        <div className={classes.home}>
            <h3 className={classes.prompt}>Choose Your Episode</h3>
            <Carousel items={episodes}
                updateData={props.updateData}
                updateImage={props.updateImage}
            /><br />
            <a href="/pilot">
                <Button className={classes.button}>Choose your Episode!</Button>
            </a>
        </div>
    )
}

export default Episodes;