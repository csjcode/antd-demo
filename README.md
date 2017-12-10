# antd-demo
Ant Design library demo

## Notes

* Experimenting with some different designs of the Ant  Design framework.


* `yarn add antd`
* `cd antd-demo/`
* `yarn start` to check that it installed correctly.
* `yarn add antd`
* Add this code to App.js:
```
import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
```
* Add ant styles to App.j: `@import '~antd/dist/antd.css';`



