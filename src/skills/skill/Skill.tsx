import React from 'react';
import s from './Skill.module.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type skillPropsType = {
    title:string
    discription:string
    icon:IconDefinition
    isIcon:boolean
    src?:string
}

export function Skill(props:skillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon}>

                {props.isIcon ? <FontAwesomeIcon icon={props.icon}
                                                 size={'5x'}
                                                 color="#1E90FF"/> : <img className={s.image} src={props.src} alt='skill'/>}
            </div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <span className={s.discription}>{props.discription}</span>
        </div>
    );
}