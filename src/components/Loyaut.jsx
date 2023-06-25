import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Loyaut() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rates">Rates</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
