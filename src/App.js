import './App.css';
import UserCard from './UserCard';

function App() {
  return (
    
    <div className="App">
      <UserCard name="Zaki Djaba" age="19" role="STUDENT"/>
      <UserCard name="Maria Chahrazed Rekab" age="19" role="TEACHER"/>
      <UserCard name="Akram Lisri" age="19" role="LISRI"/>

    </div>
  );
}

export default App;
