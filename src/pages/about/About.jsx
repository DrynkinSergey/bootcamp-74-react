import { NavLink, Outlet } from 'react-router-dom';
import { setActiveClass } from '../../utils/SetActiveClass';
import s from './About.module.css';
const About = () => {
  return (
    <div>
      <h2>About page </h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi mollitia cum adipisci praesentium consectetur velit voluptate at laborum facilis
      beatae recusandae eaque quaerat atque aperiam, possimus veritatis quia asperiores fuga!
      <nav className={s.nav}>
        <NavLink className={({ isActive }) => setActiveClass({ isActive, s })} to='aim'>
          Aim
        </NavLink>
        <NavLink className={({ isActive }) => setActiveClass({ isActive, s })} to='team'>
          Team
        </NavLink>
        <NavLink className={({ isActive }) => setActiveClass({ isActive, s })} to='company'>
          Company
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default About;
