import React from 'react';
import { Button, Card, View, WhiteSpace } from 'pand';
import styled from 'styled-components';

const { Header } = Card;

export default () => {
  class Buttons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        disabled: true,
      };
    }
    render() {
      const disabled = this.state.disabled;
      const CardBody = styled(Card.Body)`
        > a {
          margin-bottom: 1rem;
        }
      `;
      return (
        <CardBody padding>
          <WhiteSpace>round color = primary</WhiteSpace>
          <Button>按钮标题</Button>
          <WhiteSpace>round ghost</WhiteSpace>
          <Button ghost>按钮标题</Button>
          <WhiteSpace>round desabled</WhiteSpace>
          <Button disabled={disabled}>按钮标题</Button>
          <WhiteSpace>round color=primary deg=-45 shadow</WhiteSpace>
          <Button deg={-45} shadow>
            按钮标题
          </Button>
          <WhiteSpace>round size=small color=primary deg=45 shadow highlight</WhiteSpace>
          <Button size="small" deg={45} shadow highlight>
            按钮标题
          </Button>
          <WhiteSpace>textColor</WhiteSpace>
          <Button textColor="black">按钮标题</Button>
          <WhiteSpace>textActiveColor</WhiteSpace>
          <Button textActiveColor="rgba(0,0,0, 0.6)" deg={45}>
            按钮标题
          </Button>
        </CardBody>
      );
    }
  }

  return (
    <View>
      <Header split>Button</Header>
      <WhiteSpace />
      <Buttons />
    </View>
  );
};
