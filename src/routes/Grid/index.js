import React from 'react';
import { View, WhiteSpace, Row, Col } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>Grid栅格</WhiteSpace>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <WhiteSpace />
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <WhiteSpace />
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
      <WhiteSpace>定制间距</WhiteSpace>
      <Row gutter={16}>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
      <WhiteSpace />
      <Row gutter={8}>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <WhiteSpace>使用offset</WhiteSpace>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>
          col-8 col-offset-8
        </Col>
      </Row>
      <WhiteSpace />
      <Row>
        <Col span={6} offset={6}>
          col-offset-6
        </Col>
        <Col span={6} offset={6}>
          col-offset-6
        </Col>
      </Row>
      <WhiteSpace>align=top(默认)</WhiteSpace>
      <Row gutter={8}>
        <Col span={8}>col-8</Col>
        <Col span={8} height={100}>
          col-8
        </Col>
        <Col span={8} height={75}>
          col-8
        </Col>
      </Row>
      <WhiteSpace>align=center</WhiteSpace>
      <Row gutter={8} align="center">
        <Col span={8}>col-8</Col>
        <Col span={8} height={100}>
          col-8
        </Col>
        <Col span={8} height={75}>
          col-8
        </Col>
      </Row>
      <WhiteSpace>align=bottom</WhiteSpace>
      <Row gutter={8} align="bottom">
        <Col span={8}>col-8</Col>
        <Col span={8} height={100}>
          col-8
        </Col>
        <Col span={8} height={75}>
          col-8
        </Col>
      </Row>
      <WhiteSpace />
    </View>
  );
};
