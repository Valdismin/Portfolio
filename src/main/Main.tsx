import React from 'react';
import s from './Main.module.scss';
import c from './../common/styles/Container.module.css';
import Photo from './../assets/images/photo.jpg'

export function MainBlock() {

    return (
        <div className={s.mainBlock}>
            <div className={c.container}>
                <div className={s.text}>
                    <h1>Hi there! <br/> I'm Vlad Kozlovski</h1>
                    <p>I'm Frontend Developer from Minsk</p>
                </div>
                <img className={s.photo} src={Photo}/>
            </div>
        </div>
    );
}