## Instruction

1. edit `./client/components/App/index.jsx`

```
import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      msg: 'hello world reactjs',
    };
  }

  render () {
    return (
      <div>
        <h2>{this.state.msg}</h2>
      </div>
    );
  }
}

export default App;
```