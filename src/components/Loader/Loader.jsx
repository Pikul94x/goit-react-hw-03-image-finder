import ReactLoading from 'react-loading';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loading}>
    <ReactLoading type="spinningBubbles" color="black" />
  </div>
);

export default Loader;
