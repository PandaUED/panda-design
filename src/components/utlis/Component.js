import React from 'react';

export default class extends React.Component {
  constructor() {
    super();

    const registered = [];
    const originalRender = this.render.bind(this);

    this.render = (...futureArgs) => {
      const { props, state, context } = this;
      let render = null;
      for (let i = 0; !render && i < registered.length; i += 1) {
        const { cb, renderMethod } = registered[i];
        if (cb(props, state, context)) {
          render = renderMethod;
        }
      }
      if (!render) {
        render = originalRender;
      }
      return render(props, state, context, ...futureArgs);
    };

    this.registerRender = (cb, methodKey) => {
      const renderMethod = this[methodKey].bind(this);
      registered.push({ cb, renderMethod });
    };
  }

  bind(...keys) {
    keys.forEach(key => {
      this[key] = this[key].bind(this);
    });
  }
}
