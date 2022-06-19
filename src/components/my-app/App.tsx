import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { menuOptionsType } from '../../interfaces/menuOptions';
import { Layout } from '../layout/Layout';
import './App.css';

const HomePage = React.lazy(() => import('../../pages/home'));
const Todo = React.lazy(() => import('../../pages/todo'));
const About = React.lazy(() => import('../../pages/about'));

function App() {
  const appTitle = 'Learning React';
  const appCompany = 'ISDI Coders';
  const menuOptions: menuOptionsType = [
    { path: 'index', label: 'Home' },
    { path: 'tasks', label: 'Tasks' },
    { path: 'about', label: 'About' },
  ];
  return (
    <Router>
      <Layout
        appTitle={appTitle}
        appCompany={appCompany}
        menuOptions={menuOptions}
      >
        <Routes>
          <Route
            path=""
            element={
              <React.Suspense>
                <HomePage />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="tasks"
            element={
              <React.Suspense>
                <Todo />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="about"
            element={
              <React.Suspense>
                <About />
              </React.Suspense>
            }
          ></Route>
          <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
