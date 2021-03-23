import React from 'react';
import s from './Footer.module.scss'
import c from './../common/styles/Container.module.css';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faTelegram} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function FooterBlock() {
    return <div className={s.footerBlock}>
        <div className={`${c.container} ${s.footerContainer}`}>
            <div className={s.footerLinks}>
                <a target={'blank'}
                   href={'https://www.linkedin.com/in/vladislav-kozlovski-b50232191/'}><FontAwesomeIcon icon={faLinkedin}
                                    size={'2x'}
                                    color="#ADFF2F"/></a>
                <a target={'blank'}
                   href={'https://www.instagram.com/kozlovskiy.vlad/'}><FontAwesomeIcon icon={faInstagram}
                                                                                                        size={'2x'}
                                                                                                        color="#ADFF2F"/></a>
                <a target={'blank'}
                   href={'https://github.com/Valdismin'}><FontAwesomeIcon icon={faGithub}
                                                                                        size={'2x'}
                                                                                        color="#ADFF2F"/></a>
                <a target={'blank'}
                   href={'https://t.me/valdismin'}><FontAwesomeIcon icon={faTelegram}
                                                                          size={'2x'}
                                                                          color="#ADFF2F"/></a>
            </div>
            <div className={s.allRights}>© 2021 Все права защищены.</div>
        </div>
    </div>
}

