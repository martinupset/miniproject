import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

class Dashboard extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }

  logout(){
    this.props.history.push('/login');
    document.cookie = `token = null`
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
              {item.description}
              </List.Item>}>
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
