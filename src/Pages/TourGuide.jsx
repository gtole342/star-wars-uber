import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Carousel from '../Components/Carousel';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { TOUR_GUIDE_URL } from '../constants';

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

const TourGuide = () => {
    const classes = useStyles()
    const tourguides = [
        {
            name: 'Admiral Holdo',
            image: '/guides/admiral-holdo.jpg'
        },
        {
            name: 'Anakin Skywalker',
            image: '/guides/anakin-skywalker.jpg'
        },
        {
            name: 'Gregor Typho',
            image: '/guides/gregor-typho.jpg'
        },
        {
            name: 'Leia',
            image: '/guides/Leia.jpeg'
        },
        {
            name: 'Jyn',
            image: '/guides/Jyn.jpg'
        },
        {
            name: 'Luke Skywalker',
            image: '/guides/luke-skywalker-old.png'
        },
        {
            name: 'Maz Kanata',
            image: '/guides/maz-kanata.jpeg'
        },
        {
            name: 'Plo Koon',
            image: '/guides/plo-koon.png'
        },
        {
            name: 'Lando Calrissian',
            image: '/guides/Lando-Calrissian.png'
        },
        {
            name: 'Nien Nunb',
            image: '/guides/nien-nunb.jpeg'
        },
        {
            name: 'Ric Olie',
            image: '/guides/Ric-Olie.jpg'
        },
        {
            name: 'Rose',
            image: '/guides/Rose.png'
        },
        {
            name: 'Wedge Antilles',
            image: '/guides/wedge-antilles.jpg'
        }
    ]
    return(
        <div>
            <h3 className={classes.prompt}>Choose Your Guide!</h3>
            <Carousel items={tourguides} /><br />
            <a href="/summary">
                <Button className={classes.button}>Choose your Guide!</Button>
            </a>
        </div>
    )
}

export default TourGuide;