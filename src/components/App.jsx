import { Route, Routes } from 'react-router-dom';
import Loyaut from './Loyaut';
import { Home } from 'pages/Home';
import { Rates } from 'pages/Rates';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyaut />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
      </Route>
    </Routes>
  );
};
