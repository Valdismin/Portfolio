import React from 'react';
import s from './Projects.module.scss';
import c from './../common/styles/Container.module.css';
import {Project} from './project/Project';
import { Title } from '../common/components/title/Title';
import Todo from './../assets/images/Todolist.png'
import Social from './../assets/images/social_network.png'
import Tasks from './../assets/images/tasks.jpg'


export function Projects() {
    const social = {
        backgroundImage:`url(${Social})`
    }
    const todolist = {
        backgroundImage:`url(${Todo})`
    }
    const tasks = {
        backgroundImage:`url(${Tasks})`
    }
    return (
        <div id="projects" className={s.projectsBlock}>
            <div className={`${c.container} ${s.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={s.projects}>
                    <Project href={""} style={social} title="Social Network" discription="Technologies: React, Redux, Formik, REST API, Typescript, CSS-Modules"/>
                    <Project href={""} style={todolist} title="TODOLIST" discription="Technologies:React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests"/>
                    <Project href={"https://valdismin.github.io/Ignat_DZ/#/PRE_JUNIOR"} style={tasks} title="Tasks" discription="Technologies:React,Hooks, Typescript, Material-UI, Unit-tests"/>
                </div>
            </div>
        </div>
    );
}