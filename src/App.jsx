import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import styles from './App.module.css';

export const App = () => {
  return (
    <div
      style={{
        width: 400,
        padding: '12px 16px',
        borderRadius: 20,
        backgroundColor: 'violet',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 className={styles.formHeader}>Phonebook</h1>
      <ContactForm />

      <h2 className={styles.filterHeader}>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};
