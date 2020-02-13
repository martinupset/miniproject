import {connect} from 'react-redux'
import Register from './index'
import {registerAction} from '../../redux/actions/registerAction'

const mapStateToProps = (state) => {
  return{
    register:state.register.register
  }
}

const mapDispatchToProps = {
  registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
