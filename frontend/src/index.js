import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { ChatProvider } from './contexts/ChatContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

frontend/src/App.js

javascript

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';
import AdminDashboard from './components/AdminDashboard';
import Settings from './components/Settings';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/settings" component={Settings} />
          <Route path="/" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
