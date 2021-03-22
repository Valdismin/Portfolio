import React from 'react';
import s from './Contact.module.scss'
import c from './../common/styles/Container.module.css';
import {Title} from "../common/components/title/Title";

export function ContactBlock() {
    return <div id="contacts" className={s.contactBlock}>
        <div className={`${c.container } ${s.contactContainer}`}>
           <Title text={"Contacts"}/>
            <fieldset className={s.formBlock}>
                <input className={s.input} type={"text"} placeholder={"Name"}/>
                <input className={s.input} type={"text"} placeholder={"Email"}/>
                <input className={s.input} placeholder={"Напишите ваше сообщение"}></input>
                <button type={"submit"} className={s.button}>Submit</button>
            </fieldset>
        </div>
    </div>
}