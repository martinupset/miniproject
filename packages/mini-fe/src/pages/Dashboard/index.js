import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

class Dashboard extends Component{
  constructor(props){
    super(props);
    console.log(this.props)
  }
  render(){
    return(
      <div style = {{margin: '10px'}}>
      <div>
        <Input
        placeholder = {this.props.dashboard.inputValue}
        style = {{width: '250px', marginRight: '10px'}}
        onChange = {this.changeInputValue}
        />
        <Button type = 'primary'>add</Button>
        </div>
        <div style={{margin: '10px', width: '300px'}}>
        <List
            bordered
            dataSource={this.props.dashboard.list}
            renderItem={(item)=><List.Item >{item}</List.Item>}/>
        </div>
    </div>
    )
  }

}

export default Dashboard
