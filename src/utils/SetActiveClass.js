import clsx from 'clsx';

export const setActiveClass = ({ isActive, s }) => {
  return clsx(s.link, isActive && s.active);
};
