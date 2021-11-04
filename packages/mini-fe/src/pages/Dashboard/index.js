import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List, Modal} from 'antd'
import {withRouter } from 'react-router-dom';
const {delCookie} = require('../handlecookie')

class Dashboard extends Component{
  state = {visible: false, id: 0}

  editorDescription = null

  editorStatus = null

  constructor(props){
    super(props);
    console.log(this.state)
  }

  showModal = (id) => {
    this.setState({
      visible: true,
      id
    });
  };

  handleOk = () => {
    this.props.changeItemAction({
      'id': this.state.id,
      'description':this.editorDescription,
      'status':this.editorStatus
    }, this.props.signIn.signIn.id)
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  logout(){
    this.props.clearAuthAction()
    this.props.history.push('/login');
    delCookie("token")
  }

  componentDidMount(){
    this.props.showTodoAction(this.props.signIn.signIn.id)
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
        <Button type = 'primary' onClick = {
          ()=>this.props.addItemAction({
            description: this.props.dashboard.inputValue, 
            userId: this.props.signIn.signIn.id})}>add</Button>
        </div>
        <div style={{margin: '10px', width: '300px'}}>
        <List
            bordered
            dataSource={this.props.dashboard.list}
            renderItem={(item,index)=><List.Item actions={[<a key="list-loadmore-edit" onClick = {()=>this.showModal(item.id)}>edit</a>,
            <a key="list-loadmore-more" onClick={()=>alert(`This stuff was update at ${item.updateAt}`)}>more</a>,
            <a key="list-loadmore-delete" onClick={()=>this.props.deleteItemAction(index,item.id,this.props.signIn.signIn.id)}>delete</a>]}>
              <List.Item.Meta description = {item.status} title = {item.description} />
              </List.Item>
            }>
            </List>

        <Modal
          title="todo editor"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="edit description here"
          onChange ={(e) => {this.editorDescription = e.target.value}}></Input>
          <Input placeholder="edit status here"
          onChange = {(e) => {this.editorStatus = e.target.value}}></Input>
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

export default withRouter(Dashboard);
