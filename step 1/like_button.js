'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: 0 };
  }

  render() {
    if (this.state.like == 2) {
      return 'You liked this.';
    }

    // non-jsx syntax
    return e(
      'button',
      { onClick: () => this.setState({ like: this.state.like + 1 }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
