import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'medium', disabled = false, className }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
