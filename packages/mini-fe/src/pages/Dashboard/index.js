import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
const {delCookie} = require('../handlecookie')

class Dashboard extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }

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
            renderItem={(item,index)=><List.Item onClick={()=>this.props.deleteItemAction(index,item.id)}>
              This item was update at {item.updateAt}
              <List.Item.Meta description = {item.status} title = {item.description}/>
              </List.Item>
            }>
            </List>
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
