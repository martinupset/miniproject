import React, { useState, useEffect, useRef } from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List, Modal} from 'antd'
import {withRouter } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'
const {delCookie} = require('../handlecookie')

const Dashboard = (props) => {
  const [myVisible, setMyVisible] = useState({visible: false, id: 0})
  const [compList, setCompList] = useState([])
  const bottomDomRef = useRef(null)
  const homeList = [...props.dashboard.list]
  const [myRef, inView] = useInView({
    threshold: 0,
 });
 const scrollRenderHandler = () => {
   if (inView && compList !== homeList){
     setCompList({
       homeList
     })
   }
 }

  let editorDescription = null

  let editorStatus = null

  const showModal = (id) => {
    setMyVisible({visible: true, id});
  };

  const handleOk = (id) => {
    props.changeItemAction({
      'id': id,
      'description':editorDescription,
      'status':editorStatus
    }, props.signIn.signIn.id)

    setMyVisible({...myVisible, visible: false});
  };

  const handleCancel = () => {
    setMyVisible({...myVisible, visible:false});
  };

  const logout = () =>{
    localStorage.clear()
    props.history.push('/login');
    delCookie("token")
  }

  useEffect(() => {
    props.showTodoAction(props.signIn.signIn.id)
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', scrollRenderHandler);
    return () => {
      document.removeEventListener('scroll', scrollRenderHandler);
    }
  }, [])

    return(
      <div style = {{margin: '10px'}}>
      <div>
        <Input
        placeholder = {props.dashboard.inputValue}
        style = {{width: '250px', marginRight: '10px'}}
        onChange = {(e) => props.changeInputAction(e.target.value)}
        />
        <Button type = 'primary' onClick = {
          ()=>props.addItemAction({
            description: props.dashboard.inputValue, 
            userId: props.signIn.signIn.id})}>add</Button>
        </div>
        <div style={{margin: '10px', width: '300px', backgroundColor: 'white'}}>
          <List
            bordered
            dataSource={homeList}
            renderItem={(item,index)=><List.Item actions={[<a key="list-loadmore-edit" onClick = {()=>showModal(item.id)}>edit</a>,
            <a key="list-loadmore-more" onClick={()=>alert(`This stuff was update at ${item.updateAt}`)}>more</a>,
            <a key="list-loadmore-delete" onClick={()=>props.deleteItemAction(index,item.id,props.signIn.signIn.id)}>delete</a>]}>
              <List.Item.Meta description = {item.status} title = {item.description} />
              </List.Item>
            }>
            </List>
            <div ref={myRef}>
            </div>
            <div>
            <p>已经到底啦</p>
            </div>

          <Modal
          title="todo editor"
          visible={myVisible.visible}
          onOk={() => handleOk(myVisible.id)}
          onCancel={handleCancel}
          >
          <Input placeholder="edit description here"
          onChange ={(e) => {editorDescription = e.target.value}}></Input>
          <Input placeholder="edit status here"
          onChange = {(e) => {editorStatus = e.target.value}}></Input>
          </Modal>
        </div>

        <div>
        <h1>Hello User {props.signIn.signIn.name}</h1>
        <Button type = 'primary' onClick = {()=>logout()}>Logout</Button>
        </div>
    </div>
    )
  }

export default withRouter(Dashboard);
