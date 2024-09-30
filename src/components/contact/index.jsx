import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup
  .object({
    fullName: yup.string().min(3, 'Your full name should be at least 3 characters.').max(50, 'Your full name cannot be longer than 50 characters.').required('Please enter your full name'),
    email: yup.string().matches(/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email format.').required( 'Please enter your email adress.'),
    subject: yup.string().min(3, 'Your subject should be at least 3 characters.').max(50, 'Your subject cannot be longer than 50 characters.').required('Please enter a subject'),
    contactMessage: yup.string().min(3, 'Your message should be at least 3 characters.').required('Please enter a message before submitting'),

  })
  .required();

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
      function onSubmit(data) {
        console.log("Submitted from contact form:",data);
      }

    return (
      <div className="flex flex-col sm:flex-row items-center sm:justify-center  sm:items-center mx-4 lg:mx-26 xl:mx-36  sm:pe-8 sm:my-10 md:py-16 sm:bg-dark-brown py-8 rounded-lg">

      

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden sm:block size-52 md:size-60 lg:size-72 xl:size-80 xl:mx-5 text-dark-brown sm:text-md-beige">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>

        
        <form onSubmit={handleSubmit(onSubmit)}className="  bg-md-beige sm:mx-4 sm:mx-0 font-medium rounded-md shadow-md w-82 sm:w-2/4 lg:w-2/5 xl:w-1/3">
        
     
        <div className="flex flex-col  mx-4 px-5 py-5 "> 
          <div className="mb-1">
            <label htmlFor="full-name">Full name</label>
            <input name="full-name" type="text" className="form-input bg-light-beige px-4 rounded-lg w-full border-0 shadow-sm" {...register('fullName')} />
            <p className="text-xs font-medium mt-1 tracking-wide">{errors.fullName?.message}</p>
          </div>
        
          <div className="mb-1">
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email" className="form-input bg-light-beige px-4 rounded-lg w-full border-0 shadow-sm" {...register('email')} />
            <p className="text-xs font-medium mt-1 tracking-wide">{errors.email?.message}</p>
          </div>
          
          <div className="mb-1">
            <label htmlFor="subject">Subject</label>
            <input name="subject" className="form-input bg-light-beige px-4 rounded-lg w-full border-0 shadow-sm" {...register('subject')} />
            <p className="text-xs font-medium mt-1 tracking-wide">{errors.subject?.message}</p>
          </div>
        
          <div className="mb-1">
            <label htmlFor="contact-message">Message</label>
            <textarea name="contact-message" className="resize-y rounded-md  bg-light-beige w-full border-0 shadow-sm"{...register('contactMessage')}></textarea>
          
            <p className="text-xs font-medium mt-1 tracking-wide">{errors.contactMessage?.message}</p>
          </div>
        
            <input type="submit" className="bg-dark-brown text-light-beige my-5 py-3 rounded-lg resize-x" />

        </div>

        </form>

      </div>
    )
}

export default ContactForm