import {connect} from 'react-redux'
import Login from './index'
import {signInAction} from '../../redux/actions/signInAction'

const mapStateToProps = (state) => {
  return{
    signIn:state.signIn
  }
}

const mapDispatchToProps = {
  signInAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
