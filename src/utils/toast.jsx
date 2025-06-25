import { toast } from 'react-toastify';

export const successToast = () => {
  return toast('Thanks for your message! I will get back to you soon.', {
    type: 'success',
  });
};

export const ErrorToast = () => {
  return toast('Oops! Something went wrong. Please try again.', {
    type: 'error',
  });
};
