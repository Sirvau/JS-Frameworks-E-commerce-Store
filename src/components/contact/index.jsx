import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../button';

const schema = yup.object({
  fullName: yup.string().min(3, 'Your full name should be at least 3 characters.').max(50, 'Your full name cannot be longer than 50 characters.').required('Please enter your full name'),
  email: yup.string().matches(/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid email format.').required('Please enter your email address.'),
  subject: yup.string().min(3, 'Your subject should be at least 3 characters.').max(50, 'Your subject cannot be longer than 50 characters.').required('Please enter a subject'),
  contactMessage: yup.string().min(3, 'Your message should be at least 3 characters.').required('Please enter a message before submitting'),
}).required();


function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Submitted from contact form:", data);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center md:me-1 sm:my-10 my-8 ">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-md-beige px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 rounded-lg shadow-md w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px]">
        <div className="flex flex-col space-y-4">
          
          <div>
            <label htmlFor="full-name" className="block mb-2 font-semibold">Full name</label>
            <input name="full-name" type="text" className="form-input bg-light-beige hover:brightness-105 duration-300 px-4 py-2 rounded-lg w-full border-0 shadow-sm" {...register('fullName')} />
            <p className="text-xs text-red-500 mt-1">{errors.fullName?.message}</p>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">E-mail</label>
            <input name="email" type="email" className="form-input bg-light-beige hover:brightness-105 duration-300 px-4 py-2 rounded-lg w-full border-0 shadow-sm" {...register('email')} />
            <p className="text-xs text-red-500 mt-1">{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
            <input name="subject" className="form-input bg-light-beige hover:brightness-105 duration-300 px-4 py-2 rounded-lg w-full border-0 shadow-sm" {...register('subject')} />
            <p className="text-xs text-red-500 mt-1">{errors.subject?.message}</p>
          </div>

          <div>
            <label htmlFor="contact-message" className="block mb-2 font-semibold">Message</label>
            <textarea name="contact-message" className="resize-y rounded-md bg-light-beige hover:brightness-105 duration-300 px-4 py-2 w-full border-0 shadow-sm" {...register('contactMessage')}></textarea>
            <p className="text-xs text-red-500 mt-1">{errors.contactMessage?.message}</p>
          </div>

          <Button type="submit" text="Submit" className="mt-4" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
