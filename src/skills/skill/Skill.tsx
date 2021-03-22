import React from 'react';
import s from './Skill.module.scss';


type skillPropsType = {
    title:string
    discription:string
    icon:string
}

export function Skill(props:skillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img className={s.image} src={props.icon}/>
            </div>
            <h3 className={s.skillTitle}>{props.title}</h3>
            <span className={s.discription}>{props.discription}</span>
        </div>
    );
}