import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';

function App() {
  return (
    <Router>
      <PageHeader />
      <PageFooter />
    </Router>
  );
}

export default App;
