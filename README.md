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

* Checkbox needs style adjustments
```
  .ant-checkbox-inner:after {

    position: absolute;
    left: 9.57142857px;
    top: 1.24285714px;
    display: table;
    width: 7.71428571px;
    height: 18.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: ' ';
    -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6);
  }
```


