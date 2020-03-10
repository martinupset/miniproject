import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List, Skeleton, Alert} from 'antd'
import {Modal} from 'antd'
const {delCookie} = require('../handlecookie')

class Dashboard extends Component{
  state = {visible: false}

  constructor(props){
    super(props);
    console.log(this.state)
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  logout(){
    this.props.history.push('/login');
    delCookie("token")
  }

  componentDidMount(){
    this.props.showTodoAction()
  }

  render(){
    return(
      <div style = {{margin: '10px'}}>
      <div>
        <Input
        placeholder = {this.props.dashboard.inputValue}
        style = {{width: '250px', marginRight: '10px'}}
        onChange = {(e) => this.props.changeInputAction(e.target.value)}
        />
        <Button type = 'primary' onClick = {()=>this.props.addItemAction({description: this.props.dashboard.inputValue})}>add</Button>
        </div>
        <div style={{margin: '10px', width: '300px'}}>
        <List
            bordered
            dataSource={this.props.dashboard.list}
            renderItem={(item,index)=><List.Item actions={[<a key="list-loadmore-edit" onClick = {this.showModal}>edit</a>,
            <a key="list-loadmore-more" onClick={()=>alert(`This stuff was update at ${item.updateAt}`)}>more</a>,
            <a key="list-loadmore-delete" onClick={()=>this.props.deleteItemAction(index,item.id)}>delete</a>]}>
              <List.Item.Meta description = {item.status} title = {item.description} />
              </List.Item>
            }>
            </List>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>edit contents here...</p>
          <p>edit status here...</p>
        </Modal>
        </div>

        <div>
        <h1>Hello User {this.props.signIn.signIn.name}</h1>
        <Button type = 'primary' onClick = {()=>this.logout()}>Logout</Button>
        </div>
    </div>
    )
  }


}

export default Dashboard
