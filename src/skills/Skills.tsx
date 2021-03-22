import React from 'react';
import s from './Skills.module.scss';
import c from './../common/styles/Container.module.css';
import {Skill} from './skill/Skill';
import {Title} from "../common/components/title/Title";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faServer, faSitemap} from "@fortawesome/free-solid-svg-icons";
import typescript from '../assets/images/typescript.svg'
import {Flip} from 'react-awesome-reveal';


export function Skills() {

    return (
        <div id="skills" className={s.skillsBlock}>
            <div className={`${c.container} ${s.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={s.skills}>
                    <Flip direction="vertical" duration={1500} triggerOnce={true}>
                        <Skill title="React"
                               isIcon={true}
                               discription="SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination..."
                               icon={faReact}/>
                    </Flip>
                    <Flip direction="vertical" duration={1500} triggerOnce={true}>
                        <Skill title="Redux"
                               isIcon={true}
                               discription="Thunk, ThunkCreator, Reducer, Hooks, Selectors, State Management, Immutability..."
                               icon={faSitemap}/>
                    </Flip>
                    <Flip direction="vertical" duration={1500} triggerOnce={true}>
                        <Skill title="Typescript"
                               isIcon={false}
                               icon={faSitemap}
                               src={typescript}
                               discription="Migrate projects from JS to TS, Generics, typeof, ReturnType, Enum..."
                        />
                    </Flip>
                    <Flip direction="vertical" duration={1500} triggerOnce={true}>
                        <Skill title="Javascript"
                               isIcon={true}
                               discription="Data Types, Functions, Loops, Currying, Closure, This, Array Methods, Recursion, EventLoop, Promise, Async-Await..."
                               icon={faJs}/>
                    </Flip>
                    <Flip direction="vertical" duration={1500} triggerOnce={true}>
                        <Skill title="HTML"
                               isIcon={true}
                               discription="Landing Pages, Semantic tags, Forms..."
                               icon={faHtml5}/>
                    </Flip>
                    <Flip direction="vertical" duration={1500} triggerOnce={true}>
                        <Skill title="RestAPI"
                               isIcon={true}
                               discription="CRUD Operations, working with Axios library..."
                               icon={faServer}/>
                    </Flip>
                    <Flip direction="vertical" duration={1500} triggerOnce={true}>
                        <Skill title="CSS"
                               isIcon={true}
                               discription="CSS3, CSS-Modules, Styled Components,SCSS"
                               icon={faCss3Alt}/>
                    </Flip>
                </div>
            </div>
        </div>
    );
}
