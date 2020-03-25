'use strict'

// No more imports, we are including from cdn
const e = React.createElement;

class HelloWorld extends React.Component {
  constructor(props){
    super(props);
  }
  
  handleClick = (event) => {
    alert("Hello there");
  }
  
  render() {
    const {userid} = this.props;
    return (
    <h1><span onClick={this.handleClick}>Hello {userid}</span></h1>
    );
  }
}

const containers = document.querySelectorAll(".cfe-app");
containers.forEach(domContainer => {
  const userid = domContainer.dataset.userid;
  ReactDOM.render(
    e(HelloWorld, {userid: userid}),
    domContainer
  );
});



