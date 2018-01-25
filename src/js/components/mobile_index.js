import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileNewsList from './mobile_list';
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
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
  render(){
        return(
          <div>
            <MobileHeader></MobileHeader>
            <Tabs>
  					<TabPane tab="头条" key="1">
							<MobileNewsList count = {20} type="top"></MobileNewsList>
						</TabPane>
  					<TabPane tab="社会" key="2">
							<MobileNewsList count = {20} type = "shehui"></MobileNewsList>
						</TabPane>
  					<TabPane tab="国内" key="3">
							<MobileNewsList count = {20} type = "guonei"></MobileNewsList>
						</TabPane>
  					<TabPane tab="国际" key="4">
							<MobileNewsList count = {20} type = "guoji"></MobileNewsList>
						</TabPane>
  					<TabPane tab="娱乐" key="5">
							<MobileNewsList count = {20} type = "yule"></MobileNewsList>
						</TabPane>
  				</Tabs>
            <MobileFooter></MobileFooter>
          </div>
        );
  };
}
