import { Routes, Route } from 'react-router-dom';

import Home from './component/routes/home/home.component';
import Navigation from './component/routes/navigation/nav.component';
import SignIn from './component/routes/sign-in/sign-in.component';

const Shop = () => {
  return <h1>I am the shope page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;