import React from 'react';
import s from './Projects.module.scss';
import c from './../common/styles/Container.module.css';
import {Project} from './project/Project';
import { Title } from '../common/components/title/Title';
import Todo from './../assets/images/Todolist.png'
import Social from './../assets/images/social_network.png'


export function Projects() {
    const social = {
        backgroundImage:`url(${Social})`
    }
    const todolist = {
        backgroundImage:`url(${Todo})`
    }
    return (
        <div id="projects" className={s.projectsBlock}>
            <div className={`${c.container} ${s.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={s.projects}>
                    <Project style={social} title="Социальная сеть" discription="Тренировочный проект от курсов Димыча It-Kamasutra.com"/>
                    <Project style={todolist} title="Социальная сеть" discription="Тренировочный проект"/>
                </div>
            </div>
        </div>
    );
}