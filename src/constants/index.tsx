import {
  FaArrowRight,
  FaCheck,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaUsers,
  FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { MdFlight } from 'react-icons/md';

export const webIcons = {
  location: FaLocationDot,
  phone: FaPhone,
  email: IoMdMail,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  check: FaCheck,
  users: FaUsers,
  flight: MdFlight,
  globe: FaGlobe,
  rightArrow: FaArrowRight,
};

export const titles = {
  appName: process.env.NEXT_APP_TITLE,
};
