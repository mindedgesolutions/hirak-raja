import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export const webIcons = {
  location: FaLocationDot,
  phone: FaPhone,
  email: IoMdMail,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

export const titles = {
  appName: process.env.NEXT_APP_TITLE,
};
