import React from 'react';
import s from './Main.module.scss';
import c from './../common/styles/Container.module.css';
import Photo from './../assets/images/photo.jpg'

export function MainBlock() {

    return (
        <div id="main" className={s.mainBlock}>
            <div className={c.container}>
                <div className={s.text_photo}>
                <div className={s.text}>
                    <p>Front-end Developer</p>
                    <h1>Kozlovski Vlad</h1>
                </div>
                <img className={s.photo} src={Photo}/>
                </div>
            </div>
        </div>
    );
}