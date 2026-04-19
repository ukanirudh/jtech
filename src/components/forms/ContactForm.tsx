
'use client'
import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from "@emailjs/browser";


interface FormData {
  fullname: string;  
  email: string;   
  phone: string;   
  title: string; 
  company: string; 
  message: string; 
}

const schema = yup
  .object({
    fullname: yup.string().required().label("Full Name"), 
    email: yup.string().required().email().label("Email"), 
    phone: yup.string().required().label("Phone"), 
    title: yup.string().required().label("Subject"),
    company: yup.string().required().label("Company"),
    message: yup.string().required().label("Message"),
  })
  .required();


const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const notify = () => toast("Message send successful");

  const onSubmit = (data: FormData) => {   
    console.log(data);


    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current!
    ).then(
      () => {
        reset();
        notify()
      },
      (error) => console.error("FAILED", error)
    );

  };


  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}  id="it-form">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-box contact-inner">
              <input type="text" {...register("fullname")} placeholder="Full Name" />
              <i className="bi bi-person"></i>
              <p className="form_error">{errors.fullname?.message}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-box contact-inner">
              <input type="text" {...register("email")} placeholder="Email Address" />
              <i className="bi bi-envelope"></i>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box contact-inner">
              <input type="text" {...register("phone")} placeholder="Phone Number" />
              <i className="bi bi-phone-flip"></i>
              <p className="form_error">{errors.phone?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box">
              <input type="text" {...register("title")} placeholder="subject" />
              <i className="bi bi-pencil-square"></i>
              <p className="form_error">{errors.title?.message}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box contact-inner">
              <input type="text" {...register("company")} placeholder="Your Company Name" />
              <p className="form_error">{errors.company?.message}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-box contact-inner">
              <textarea {...register("message")} id="massage" cols={30} rows={10} placeholder="Write your question here"></textarea>
              <i className="bi bi-chat-left-text-fill"></i>
              <p className="form_error">{errors.message?.message}</p>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-box-button contact-inner">
              <button type="submit">Send Messages</button>
            </div>
          </div>
        </div>
      </form> 
    </>
  );
};

export default ContactForm;