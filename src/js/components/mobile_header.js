import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {Link,Router,Route} from 'react-router';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component {
	constructor() {
		super();
    this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: ''
		};
	}

	componentWillMount(){
			if (localStorage.userid!='') {
				this.setState({hasLogined:true});
				this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
			}
			console.log(localStorage.userNickName+" userNickName ");
			console.log(localStorage.userid + "UserId");
		};

setModalVisible(value){
   this.setState({
     modalVisible:value
   });
 };
handleClick(e){
    if(e.key == 'register'){
      this.setState({current: 'register'});
      this.setModalVisible(true);
    }else{
      this.setState({current: e.key});
    }
};
handleSubmit(event){
  event.preventDefault();
  var myFetchOptions = {
      method : 'GET'
  }
  var formData= this.props.form.getFieldsValue();
	console.log(formData);
	fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
	+ "&username="+formData.userName+"&password="+formData.password
	+"&r_userName=" + formData.r_userName + "&r_password="
	+ formData.r_password + "&r_confirmPassword="
	+ formData.r_confirmPassword, myFetchOptions).
  		then(response=>response.json()).then(json=>{
  			this.setState({userNickName:json.NickUserName,userid:json.UserId});
				localStorage.userNickName = json.NickUserName;
				localStorage.userid = json.UserId;
  		});
  		message.success("请求成功！");
			this.setState({hasLogined : true});
  		this.setModalVisible(false);
};
login(){
  this.setModalVisible(true);
};

callback(key){
	if(key == 1){
		this.setState({action : "login"});
	}else if(key == 2){
	  this.setState({action : "register"});
	}
}
logout(){
	localStorage.userNickName = '';
	localStorage.userid = '';
	this.setState({hasLogined : false});
}

render() {
	let {getFieldDecorator} = this.props.form;
	const userShow = this.state.hasLogined ?
		<Icon type="poweroff" onClick = {this.logout.bind(this)}/>
	:
	<Icon type="smile" onClick={this.login.bind(this)}/>
		return (
      <div id="mobileheader">
        <header>
          <img src="./src/images/logo.png" alt="logo"/>
          <span>ReactNews</span>
					{userShow}
        </header>
				<Modal  title="用户中心" wrapClassName="vertical-center-modal"  visible={this.state.modalVisible}  onOk={() => this.setModalVisible(false)}
				onCancel={()=>this.setModalVisible(false)} okText = "关闭">
						<Tabs type="card" onChange = {this.callback.bind(this)}>
						<TabPane tab="登录" key="1">
							<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
								<FormItem label="账户">
														{getFieldDecorator('userName', {
																 rules: [{ required: true, message: "请填写用户名" }],
															 })(
																 <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的用户名" />
															 )}
									{/*<Input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>*/}
								</FormItem>
								<FormItem label="密码">
														{getFieldDecorator('password', {
															 rules: [{ required: true, message: "请输入您的密码" }],
														 })(
															 <Input type = "password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的密码" />
														 )}
								</FormItem>
								<Button type="primary" htmlType="submit" >确认登录</Button>
							</Form>
						</TabPane>
								<TabPane tab="注册" key="2">
									<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
																{getFieldDecorator('r_userName', {
																		 rules: [{ required: true, message: "请填写用户名" }],
																	 })(
																		 <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的用户名" />
																	 )}
											{/*<Input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}/>*/}
										</FormItem>
										<FormItem label="密码">
																{getFieldDecorator('r_password', {
																	 rules: [{ required: true, message: "请输入您的密码" }],
																 })(
																	 <Input type = "password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的密码" />
																 )}
										</FormItem>
										<FormItem label="确认密码">
																{getFieldDecorator('r_confirmPassword', {
																	 rules: [{ required: true, message: "请再次输入您的密码" }],
																 })(
																	 <Input type = "password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请再次输入您的密码" />
																 )}
										</FormItem>
										<Button type="primary" htmlType="submit" >注册</Button>
									</Form>
								</TabPane>
							</Tabs>
				</Modal>
      </div>
		);
	};
}
export default MobileHeader = Form.create({})(MobileHeader);
