import { authModalState } from '@/Atoms/AuthModalAtom';
import React from 'react'
import { useRecoilValue } from 'recoil';
import Login from './Login';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';

type Props = {}

const AuthInputs = (props: Props) => {
    const modalState = useRecoilValue(authModalState);
  return (

    <div>
          {modalState.view === 'login' && <Login />}
        {modalState.view === 'signup' && <SignUp/>}
      
    </div>
  )
}

export default AuthInputs