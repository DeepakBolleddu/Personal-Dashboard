// App.js

import React from 'react';
import './App.css'; // Import CSS file for styling
import WeatherWidget from './components/WeatherWidget';
import NewsFeed from './components/NewsFeed';
import TaskManager from './components/TaskManager';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Dashboard</h1>
      </header>
      <main className="app-main">
        <section className="widget-section">
          <WeatherWidget />
        </section>
        <section className="widget-section">
          <NewsFeed />
        </section>
        <section className="widget-section">
          <TaskManager />
        </section>
      </main>
    </div>
  );
}

export default App;
