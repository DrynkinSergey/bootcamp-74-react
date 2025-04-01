import { FaUser } from 'react-icons/fa';
import { SlUserFemale } from 'react-icons/sl';
import s from './Profile.module.css';
import { Activity } from 'lucide-react';
import clsx from 'clsx';
const Profile = ({ email, image, age, lastName, firstName, gender, phone, address }) => {
  const { address: street, city } = address;

  const iconMapping = {
    male: <FaUser fill='green' />,
    female: <SlUserFemale fill='black' />,
  };
  return (
    <section className={s.wrapper}>
      <article className={s.card}>
        <img src={image} />
        <p>
          {iconMapping[gender]}
          {firstName} {lastName}
        </p>
        <p className={clsx(age > 18 ? s.adult : s.young, s.age)}>
          <Activity />
          Age: {age}
        </p>
        <p>Gender: {gender}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>
          Address: {city} {street}
        </p>
      </article>
    </section>
  );
};
export default Profile;
