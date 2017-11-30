import { Button, Card, View, WhiteSpace } from 'pand';

const { Header, Body, Footer } = Card;
export default () => {
  return (
    <View>
      <WhiteSpace />
      <Card>
        <Header split>Header</Header>
        <Body padding>Body</Body>
        <Footer split>
          <Button color="blue" size="large" ghost border={false}>
            Footer
          </Button>
        </Footer>
      </Card>
      <Card className="ddd">
        <Header split>Header</Header>
        <Body padding>Body</Body>
        <Footer split>
          <Button color="blue" size="large" ghost border={false}>
            Footer
          </Button>
        </Footer>
      </Card>
      <Card noMarginTop>
        <Header split>Header</Header>
        <Body padding>Body</Body>
        <Footer split>
          <Button color="blue" size="large" ghost border={false}>
            Footer
          </Button>
        </Footer>
      </Card>
      <WhiteSpace />
    </View>
  );
};
