import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
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
  					<TabPane tab="头条" key="1">12222222</TabPane>
  					<TabPane tab="社会" key="2">333333333333333333</TabPane>
  					<TabPane tab="国内" key="3">4444444444444444444</TabPane>
  					<TabPane tab="国际" key="4">55555555555555</TabPane>
  					<TabPane tab="娱乐" key="5">555555555555555555</TabPane>
  				</Tabs>
            <MobileFooter></MobileFooter>
          </div>
        );
  };
}
