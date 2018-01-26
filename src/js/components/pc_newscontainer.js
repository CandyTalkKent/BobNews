import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component {

  render() {

    const settings = {
      autoplay:true,
      dots:true,
      speed:500,
      vertical : false
    };

    return (
        <div>
            <Row>
                <Col span={2}></Col>
                <Col span={20} class = "container">
                  <div class= "leftContainer">
                    <div class = "carousel">
                    <Carousel {...settings}>
                      <div><img src="./src/images/carousel_1.jpg"/></div>
                      <div><img src="./src/images/carousel_2.jpg"/></div>
                      <div><img src="./src/images/carousel_3.jpg"/></div>
                      <div><img src="./src/images/carousel_4.jpg"/></div>
                    </Carousel>
                    <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
                    </div>
                  </div>
                  <Tabs class="tabs_news">
      							<TabPane tab="娱乐新闻" key="1">
      								<PCNewsBlock count={22} type="yule" width="100%" bordered="true" />
      							</TabPane>
                    <TabPane tab="头条新闻" key="2">
      								<PCNewsBlock count={22} type="top" width="100%" bordered="true" />
      							</TabPane>
						      </Tabs>
                  <div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
							<PCNewsImageBlock count={10} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
						</div>
                </Col>
                <Col span={2}></Col>
            </Row>
        </div>
    );

  }
}
