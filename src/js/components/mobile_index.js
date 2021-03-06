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

import {Carousel} from 'antd';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
  render(){
				const settings = {
					autoplay:true,
					dots:true,
					speed:500,
					vertical : false
				};
        return(
          <div>
            <MobileHeader></MobileHeader>
            <Tabs>
  					<TabPane tab="头条" key="1">
						<Carousel {...settings}>
							<div><img src="./src/images/carousel_1.jpg"/></div>
							<div><img src="./src/images/carousel_2.jpg"/></div>
							<div><img src="./src/images/carousel_3.jpg"/></div>
							<div><img src="./src/images/carousel_4.jpg"/></div>
						</Carousel>
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
