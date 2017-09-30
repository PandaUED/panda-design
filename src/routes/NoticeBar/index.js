import { List, NoticeBar, Button, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace />
      <List>
        <WhiteSpace>居中显示</WhiteSpace>
        <NoticeBar center>短信验证码已发至153****3008，请查收</NoticeBar>
        <Button>点击展示</Button>

        <WhiteSpace>滚动显示</WhiteSpace>
        <NoticeBar marquee>
          短信验证码已发至153****3008，请查收短信验证码已发至153****3008，请查收短信验证码已发至153****3008，请查收短信验证码已发至153****3008，请查收
        </NoticeBar>
        <Button>点击展示</Button>

        <WhiteSpace>自动关闭</WhiteSpace>
        <NoticeBar center closable="auto">
          短信验证码已发至153****3008，请查收
        </NoticeBar>
        <Button>点击展示</Button>

        <WhiteSpace>禁止关闭</WhiteSpace>
        <NoticeBar center closable="false">
          短信验证码已发至153****3008，请查收
        </NoticeBar>
        <Button>点击展示</Button>
      </List>
      <WhiteSpace />
    </View>
  );
};
