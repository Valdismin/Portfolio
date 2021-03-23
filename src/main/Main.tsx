import React from 'react';
import s from './Main.module.scss';
import c from './../common/styles/Container.module.css';
import Photo from './../assets/images/photo.jpg'
import Particles from 'react-particles-js';
import Fade from 'react-awesome-reveal';




let ParticleParamsDots ={
    particles: {
        size: {
            value: 2
        },
        line_linked: {
            enable: false,
        }
    }
}

let ParticleParamsLines ={
    particles: {
        size: {
            value: 3
        },
        line_linked: {
            enable: true,
        }
    }
}



export function MainBlock() {

    return (
        <div id="main" className={s.mainBlock}>
            <Particles className={s.particles} params={ParticleParamsDots}/>
            <Particles className={s.particles}  params={ParticleParamsLines}/>
            <Fade  duration={1500} triggerOnce={true}>
            <div className={c.container}>
                <div className={s.text_photo}>
                <div className={s.text}>
                    <p>Frontend Developer</p>
                    <h1>Kozlovski Vlad</h1>
                </div>
                <img className={s.photo} src={Photo}/>
                </div>
            </div>
            </Fade>
        </div>
    );
}
