---
title: React入门
date: 2016-05-11 14:57:43
tags: [javascript,react]
---

## React

### React.createClass()
```
var NewClass = React.createClass({

  getDefaultProps: function(){
    return: {
      prop1: "a",
      prop2: "b"
    }
  },
  getInitialState: function(){
    return {
      data: {}
    }
  },
  render: function(){

  },
  componentDidMount: function(){
    return (
      <div className="newClass">
        hello {this.props.name}!
      </div>
    )
  }
})
```
### ReactDOM.render()
```
ReactDOM.render(
  <NewClass name="galen" />,
  document.getElementById("example")
)
```

### 顶层方法
```
React.PropType.Array.isRequired

propTypes: {
    name: React.PropTypes.Array.isRequired
}
```
> 参见Reuseable Component Prop Validation

```
React.findDOMNode(this.refs.xxx)
this.refs.xxx.getDOMNode()
```
### 双向数据绑定
```
mixin: [Reat.addons.LinkStateMixin]

valueLink={this.linkState("xxxx")}
checkedLink={this.linkState("xxxx")}
```
> valueLink之后可以被props传递

### 组件生命周期

```
getDefaultProps: function(){
    return {

    }
},
getInitialState: function(){
    return {

    }
},
componentWillMount: function(){

},
componentDidMount: function(){

},
shouldComponentUpdate: function(nextProp, nextState){

},
componentWillUpdate: function(){

},
componentDidUpdate: function(){

},
componentWillReceiceProps: function(){

}


unmountComponentAtNode(this)
```
