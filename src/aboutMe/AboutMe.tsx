import React from 'react'
import s from './AboutMe.module.scss'
import {Title} from "../common/components/title/Title";
import c from "../common/styles/Container.module.css";


export const AboutMe = () => {
    return <div className={s.aboutMeBlock}>
        <div className={`${c.container} ${s.aboutMeContainer}`}>
            <Title text={"Personal information"}/>
            <div className={s.information}>
                <ul>
                    <li>Name: <span>Vladislav</span></li>
                    <li>Last Name:<span>Kozlovski</span></li>
                    <li>Age:<span>24</span></li>
                    <li>Nationality:<span>Belarus</span></li>
                </ul>
                <ul>
                    <li>Address: <span>Minsk</span></li>
                    <li>Phone: <span>+375-44-732-03-27</span></li>
                    <li>Email: <span>valdismin@gmail.com</span></li>
                    <li>Language: <span>English(B1)</span></li>
                </ul>
            </div>
        </div>
    </div>
}