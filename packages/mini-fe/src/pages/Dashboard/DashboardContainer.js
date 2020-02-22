import {connect} from 'react-redux'
import Dashboard from './index'
import {changeInputAction, addItemAction, deleteItemAction, showTodoAction} from '../../redux/actions/dashboardAction'

const mapStateToProps = (state) => {
  return{
    dashboard:state.dashboard
  }
}

const mapDispatchToProps = {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  showTodoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
