import React, { useState, useEffect } from 'react';
import Carousel from '../Components/Carousel';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { SHIPS_URL } from '../constants';

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

const Starship = (props) => {
    // const [ships, setShips] = useState([])
    // useEffect(() => {
    //     axios.get(SHIPS_URL)
    //         .then((response) => {
    //             setShips(response.data)
    //         })
    // }, [])
        const classes = useStyles()
        const ships = [
            {
                name: 'A Wing',
                image: '/starships/a-wing.png'
            },
            {
                name: 'Belbullab 22',
                image: '/starships/belbullab-22.jpg'
            },
            {
                name: 'Federation Cruiser',
                image: '/starships/federation-cruiser.jpg'
            },
            {
                name: 'Millenium Falon',
                image: '/starships/millenium-falconHD.jpg'
            },
            {
                name: 'Naboo Royal Cruiser',
                image: '/starships/naboo-royal-cruiser.jpg'
            },
            {
                name: 'Nabooian Yacht',
                image: '/starships/Nabooyacht.jpg'
            },
            {
                name: 'Slave 1',
                image: '/starships/slave-1'
            },
            {
                name: 'Star Fighter',
                image: '/starships/Star-fighter.jpg'
            },
            {
                name: 'X Wing',
                image: '/starships/x-wing.jpg'
            },
            {
                name: 'Y Wing',
                image: '/starships/y-wing.jpg'
            }
        ]
    
    return (
        <div>
            <h3 className={classes.prompt}>Choose Your Ship</h3>
            <Carousel items={ships}
                updateData={props.updateData}
                updateImage={props.updateImage}
            /><br />
            <a href="/tourguide">
                <Button className={classes.button}>Choose your Ship!</Button>
            </a>

        </div>
    )
}

export default Starship;