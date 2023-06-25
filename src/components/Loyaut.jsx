import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectCurrency } from 'redux/selector';

export default function Loyaut() {
  const baseCurency = useSelector(selectCurrency);
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
        <p>Base curency: {baseCurency}</p>
      </header>
      <Outlet />
    </>
  );
}
