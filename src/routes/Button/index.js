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
          <Button round color="primary">
            按钮标题
          </Button>
          <Button round ghost>
            按钮标题
          </Button>
          <Button
            round
            disabled={disabled}
            onClick={() => this.setState({ disabled: !disabled })}
          >
            按钮标题
          </Button>
          <Button round color="primary" deg={-45} shadow>
            按钮标题
          </Button>
          <Button round size="small" color="primary" deg={45} shadow highlight>
            按钮标题
          </Button>
        </CardBody>
      );
    }
  }

  return (
    <View>
      <WhiteSpace />
      <Card>
        <Header split>Button</Header>
        <Buttons />
      </Card>
      <WhiteSpace />
    </View>
  );
};
