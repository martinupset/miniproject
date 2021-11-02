import {connect} from 'react-redux'
import Login from './index'
import {signInAction} from '../../redux/actions/signInAction'
import {setAuthAction} from '../../redux/actions/sharedAction'

const mapStateToProps = (state) => {
  return{
    signIn:state.signIn
  }
}

const mapDispatchToProps = {
  signInAction,
  setAuthAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
