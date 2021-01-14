import Resume from '../Resume';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <header></header>
      <main >
        <Resume title="CV Application Form"/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
