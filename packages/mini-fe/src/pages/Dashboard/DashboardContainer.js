import {connect} from 'react-redux'
import Dashboard from './index'
import {changeInputAction, addItemAction, deleteItemAction, showTodoAction, changeItemAction} from '../../redux/actions/dashboardAction'

const mapStateToProps = (state) => {
  return{
    dashboard:state.dashboard,
    signIn: state.signIn
  }
}

const mapDispatchToProps = {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  showTodoAction,
  changeItemAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
