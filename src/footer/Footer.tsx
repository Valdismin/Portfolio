import React from 'react';
import s from './Footer.module.scss'
import c from './../common/styles/Container.module.css';

export function FooterBlock() {
    return <div className={s.footerBlock}>
        <div className={`${c.container} ${s.footerContainer}`}>
            <span>Козловский Владислав</span>
            <div className={s.footerLinks}>
                <a>VK</a>
                <a>Instagram</a>
                <a>Twitter</a>
                <a>LinkedIn</a>
            </div>
            <div>© 2020 Все права защищены.</div>
        </div>
    </div>
}