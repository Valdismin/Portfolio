import React from 'react';
import s from './Title.module.scss';

type titleType = {
    text:string
}

export function Title(props:titleType) {
    return (
        <div className={s.title}>
            <h1>{props.text}</h1>
        </div>
    );
}