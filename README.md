## Do you absolutely need this?

You don’t. You can achieve the same functionality with a lot more typing. What this component does is it prevents rerendering of it’s child components unless some of the variables that they depend on change.

So you could extract those child components into a separate component, implement a `shouldComponentUpdate()` method and you would have the same functionality. With much more typing.

## Instalation

Via NPM, `npm install update-if-props-change --save`

## How to use it
This component is especially useful if you have a big component with few sections that depend on different props/state variables. 

Since all those sections belong to the same component, they will be rerendered whenever any of the props/state variables change. You don’t want that. You want the section of a big component to be re rendered only when variables that that section depends on change.

You can setup this ‘conditional’ re-rendering easy inline with `<UpdateIfPropsChange />` component. Here is an example:
```javascript

render() {
  return (
    <ComponentA>
      <UpdateIfPropsChange props={[this.props.someVar1, this.state.someVar2]}>
        <ComponentB>
          <Text>{this.props.someVar1 + this.state.someVar2}</Text>
        </ComponentB>
      </UpdateIfPropsChange>
      <UpdateIfPropsChange props={[this.props.someVar3]}>
        <ComponentE>
          <Text>{this.props.someVar3}</Text>
        </ComponentE>
      </UpdateIfPropsChange>
    </ComponentA>
  );
}
```

### Props

`props` - Array of variables that you want to watch for changes. They can be state variables, props, whatever. Whenever any of those variables change, the child components of `<UpdateIfPropsChange/>` will be rerendered.
