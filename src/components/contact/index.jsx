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
    <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:items-center mx-4 lg:mx-26 xl:mx-36 sm:pe-8 sm:my-10 md:py-16 py-8 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-md-beige sm:mx-4 font-medium rounded-md shadow-md w-82 sm:w-2/4 lg:w-2/5 xl:w-1/3">
        <div className="flex flex-col mx-4 px-5 py-5">
          <div className="mb-1">
            <label htmlFor="full-name">Full name</label>
            <input name="full-name" type="text" className="form-input bg-light-beige hover:brightness-105 duration-300 px-4 rounded-lg w-full border-0 shadow-sm" {...register('fullName')} />
            <p className="text-xs font-medium mt-1 tracking-wide">{errors.fullName?.message}</p>
          </div>

          <div className="mb-1">
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email" className="form-input bg-light-beige hover:brightness-105 duration-300 px-4 rounded-lg w-full border-0 shadow-sm" {...register('email')} />
            <p className="text-xs font-medium mt-1 tracking-wide">{errors.email?.message}</p>
          </div>

          <div className="mb-1">
            <label htmlFor="subject">Subject</label>
            <input name="subject" className="form-input bg-light-beige hover:brightness-105 duration-300 px-4 rounded-lg w-full border-0 shadow-sm" {...register('subject')} />
            <p className="text-xs font-medium mt-1 tracking-wide">{errors.subject?.message}</p>
          </div>

          <div className="mb-1">
            <label htmlFor="contact-message">Message</label>
            <textarea name="contact-message" className="resize-y rounded-md bg-light-beige hover:brightness-105 duration-300 w-full border-0 shadow-sm" {...register('contactMessage')}></textarea>
            <p className="text-xs font-medium mt-1 tracking-wide">{errors.contactMessage?.message}</p>
          </div>
          <Button type="submit" text="Submit" className="mt-6" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
