import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import Login from './Authentication/Login';
import Dashboard from './Dashboard/Dashboard';
import StackingIncome from './Bonus/StakingIncome'
import Forget from './Authentication/Forget';
import Private from './Private/PrivateRoute';
import PublicRoute from './Private/PublicRoute';
import { Toaster } from 'react-hot-toast';
import DirectIncome from './Bonus/DirectIncome';
import PrivateLayout from './layouts/PrivateLayout';
import MatrixIncome from './Bonus/MatrixIncome';
import RewardsIncome from './Bonus/RewardsIncome';
import IncomeLedgar from './Bonus/IncomeLedgar';
import StarClubBonus from './Bonus/StarClubBonus';
import LeaderShpBonus from './Bonus/LeaderShpBonus';
import ChangePassword from './Pages/ChangePassword/ChangePassword'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Private routes */}
        <Route element={<Private />}>
          <Route path="/" element={<PrivateLayout><Dashboard /></PrivateLayout>} />
          {/* <Route path="/direct_income" element={<PrivateLayout><DirectIncome /></PrivateLayout>} />
          <Route path="/change_password" element={<PrivateLayout><ChangePassword /></PrivateLayout>} />

          <Route path="/staking_income" element={<PrivateLayout><StackingIncome /></PrivateLayout>} />
          <Route path="/matrix_income" element={<PrivateLayout><MatrixIncome /></PrivateLayout>} />
          <Route path="/rewards_income" element={<PrivateLayout><RewardsIncome /></PrivateLayout>} />
          <Route path="/income_ledgar" element={<PrivateLayout><IncomeLedgar /></PrivateLayout>} />
          <Route path="/star_club_bonus" element={<PrivateLayout><StarClubBonus /></PrivateLayout>} />
          <Route path="/leadershp_bonus" element={<PrivateLayout><LeaderShpBonus /></PrivateLayout>} /> */}
        </Route>

        {/* Public routes */}

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<Forget />} />
        </Route>

      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
