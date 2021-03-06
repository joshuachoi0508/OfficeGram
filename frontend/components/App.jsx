import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ProfileContainer from './profile/profile_container';
import UploadContainer from './profile/upload_container';
import UserPageContainer from './profile/user_page_container';
import EditProfileContainer from './profile/edit_profile_container'
import IndexContainer from './index/index_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import Modal from './modal/modal';

const App = (props) => {
  return (
    <div className="boss-div">
      <Modal />
      <ProtectedRoute component={NavBarContainer} />
      <Switch>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/profile/edit' component={EditProfileContainer} />
        <ProtectedRoute path='/profile' component={ProfileContainer} />
        <ProtectedRoute path='/upload' component={UploadContainer} />
        <ProtectedRoute path='/users/:id' component={UserPageContainer} />
        <ProtectedRoute exact path='/' component={IndexContainer} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App;
