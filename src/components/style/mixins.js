const mixins = {
  xmFlexCenter: (dirction = 'row') => {
    return `
              flex-direction: ${dirction};
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
            `;
  },
};

export default mixins;
