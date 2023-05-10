import {
  googleLogoGray,
  fbLogoGray,
  youtubeLogoGray,
  testimonial1,
  testimonial2,
  testimonial3,
} from '../assets';

export const getCompanyLogo = (company = '') => {
  switch (company) {
    case 'google':
      return googleLogoGray;
    case 'fb':
      return fbLogoGray;
    case 'youtube':
      return youtubeLogoGray;
    default:
      break;
  }
};

export const getTestimonialPhoto = (id = 0) => {
  switch (id) {
    case 0:
      return testimonial1;
    case 1:
      return testimonial2;
    case 2:
      return testimonial3;
    default:
      break;
  }
};
