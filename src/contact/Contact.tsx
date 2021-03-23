import React, {useState} from 'react';
import s from './Contact.module.scss'
import c from './../common/styles/Container.module.css';
import {Title} from "../common/components/title/Title";
import {useFormik} from "formik";
import emailjs from 'emailjs-com'

type FormikErrorType = {
    name?: string
    email?: string
}

export function ContactBlock() {

    const [send, setSend] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message:''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email Required!';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = "Please,enter your name"
            }else if (values.name.length < 2  ) {
                errors.name = "Please, enter your full name"
            }
            return errors;
        },
        onSubmit: (values) => {}
    })
    //@ts-ignore
    const sendEmail = (e) => {
        setSend(true)
        e.preventDefault()
        emailjs.sendForm('service_sxulrj3', 'template_m1rzjzq', e.target,'user_odufobvmBnlnSn58cvJrB')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
        e.target.reset()

        const timeOutID = setTimeout(() => {
            setSend(false)
        }, 5000)
        return () => {
            clearTimeout(timeOutID)
        }
    }

        return <div id="contacts" className={s.contactBlock}>
            <div className={`${c.container} ${s.contactContainer}`}>
                <Title text={"Contacts"}/>
                <form className={s.formBlock} onSubmit={sendEmail}>
                    <input id="name" className={s.input} type={"text"} placeholder={"Name"} {...formik.getFieldProps('name')}/>
                    {formik.touched.name &&
                    formik.errors.name ? <div style={{color: "red"}}>{formik.errors.name}</div> : null}
                    <input id="email" className={s.input} type={"text"} placeholder={"Email"} {...formik.getFieldProps('email')}/>
                    {formik.touched.email &&
                    formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                    <input id="message" className={s.input} placeholder={"Напишите ваше сообщение"} {...formik.getFieldProps('message')}></input>
                    <button type={"submit"} className={s.button}>Submit</button>
                </form>
            </div>
        </div>
}
