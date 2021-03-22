import React from 'react';
import s from './Nav.module.scss';

export function Nav() {
    return (
        <div className={s.nav}>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <a className={s.a} href="">Главная</a>
            <a className={s.a} href="">Скилы</a>
            <a className={s.a} href="">Проекты</a>
            <a className={s.a} href="">Контакты</a>
        </div>
    );
}


