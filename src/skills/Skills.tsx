import React from 'react';
import s from './Skills.module.scss';
import c from './../common/styles/Container.module.css';
import { Skill } from './skill/Skill';
import {Title} from "../common/components/title/Title";

export function Skills() {
    return (
        <div id="skills" className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={s.skills}>
                    <Skill title="R" discription="Working with data in R-studio." icon={""}/>
                    <Skill title="HTML" discription="Can do something" icon={""}/>
                    <Skill title="JS" discription="React/Redux" icon={""}/>
                </div>
            </div>
        </div>
    );
}