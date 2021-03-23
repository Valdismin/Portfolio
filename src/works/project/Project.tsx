import React from 'react';
import p from './Project.module.scss';

type projectPropsType = {
    title: string
    discription: string
    style:{ backgroundImage: string; }
    href:string
}

export function Project(props: projectPropsType) {
    return (
        <div className={p.project}>
            <div className={p.projectInfo}>
                <h3 className={p.projectTitle}>{props.title}</h3>
                <p className={p.discription}>{props.discription}</p>
            </div>
            <div className={p.icon} style={props.style}>
                <a className={p.button} target='_blank' href={props.href}>View more</a>
            </div>
        </div>
    );
}