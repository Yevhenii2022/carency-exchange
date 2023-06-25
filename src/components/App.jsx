import { Route, Routes } from 'react-router-dom';
import Loyaut from './Loyaut';
import { Home } from 'pages/Home';
import { Rates } from 'pages/Rates';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from 'redux/operations';
import { setCurency } from 'redux/currentSlice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(fetchBaseCurrency(crd));
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      dispatch(setCurency('usd'))
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Loyaut />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
    </Routes>
  );
};
