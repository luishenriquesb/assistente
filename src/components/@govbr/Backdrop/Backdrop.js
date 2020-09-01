import React from 'react';
import Scrim from '../Scrim/Scrim'
import classes from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <Scrim classes="is-foco" click={props.click}/>:null
);

export default backdrop;