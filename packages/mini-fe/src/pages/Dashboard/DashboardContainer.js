import {connect} from 'react-redux'
import Dashboard from './index'
import {changeInputAction, addItemAction, deleteItemAction} from '../../redux/actions/dashboardAction'

const mapStateToProps = (state) => {
  return{
    dashboard:state.dashboard
  }
}

const mapDispatchToProps = {
  changeInputAction,
  addItemAction,
  deleteItemAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
