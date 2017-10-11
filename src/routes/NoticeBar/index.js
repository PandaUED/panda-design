import React from 'react';
import { Icon, List, NoticeBar, Button, View, WhiteSpace } from 'pand';

export default () => {
  class PageNoticeBarView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          notice1: false,
          notice2: false,
          notice3: false,
          notice4: false,
          notice5: false,
        },
      };
    }

    show(index, duration) {
      let data = this.state.data;
      if (!data[index]) {
        data[index] = true;
        this.setState({ data });
        if (duration) {
          window.setTimeout(() => {
            this.hide(index);
          }, duration * 1000);
        }
      }
    }

    hide(index) {
      let data = this.state.data;
      if (data[index]) {
        data[index] = false;
        this.setState({ data });
      }
    }

    render() {
      return (
        <List>
          <WhiteSpace>居中显示</WhiteSpace>
          <NoticeBar center visible={this.state.data['notice1']} className="NoticeBarExample">
            短信验证码已发至153****3008，请查收
          </NoticeBar>
          <Button
            onClick={() => {
              this.show('notice1');
            }}
          >
            点击展示
          </Button>

          <WhiteSpace>滚动显示，可添加左侧图标</WhiteSpace>
          <NoticeBar
            marquee
            closable
            onClose={() => {
              this.hide('notice2');
            }}
            icon={<Icon size={16} type="news" color="#CACACA" />}
            visible={this.state.data['notice2']}
          >
            START短信验证码已发至153****3008，请查收短信验证码已发至153****3008，请查收短信验证码已发至153****3008，请查收短信验证码已发至153****3008，请查收OVER
          </NoticeBar>
          <Button
            onClick={() => {
              this.show('notice2');
            }}
          >
            点击展示
          </Button>

          <WhiteSpace>手动关闭</WhiteSpace>
          <NoticeBar
            center
            closable
            onClose={() => {
              this.hide('notice3');
            }}
            visible={this.state.data['notice3']}
          >
            短信验证码已发至153****3008，请查收
          </NoticeBar>
          <Button
            onClick={() => {
              this.show('notice3');
            }}
          >
            点击展示
          </Button>

          <WhiteSpace>自动关闭</WhiteSpace>
          <NoticeBar center visible={this.state.data['notice4']}>
            交易成功
          </NoticeBar>
          <Button
            onClick={() => {
              this.show('notice4', 3);
            }}
          >
            点击展示
          </Button>

          <WhiteSpace>禁止关闭</WhiteSpace>
          <NoticeBar center visible={this.state.data['notice5']}>
            短信验证码已发至153****3008，请查收
          </NoticeBar>
          <Button
            onClick={() => {
              this.show('notice5');
            }}
          >
            点击展示
          </Button>
        </List>
      );
    }
  }

  return (
    <View>
      <WhiteSpace />
      <PageNoticeBarView />
      <WhiteSpace />
    </View>
  );
};
