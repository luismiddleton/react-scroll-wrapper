# react-scroll-wrapper

Made using the create-react-app. Therefore, the following you'll need to make sure the following prequisites are installed or located in your `package.json` file.

### Prequisites
- "react": "^16.4.2",
- "react-dom": "^16.4.2"

### Import Component
``` javascript
// ES6
import Scroll from 'path/to/component'
// in most case, ./src/ScrollWrapper
 ```

### Component use

```javascript

<Scroll>

    // wraps child components

    {this.props.children}

    // e.g. <div>Hello World!</div>
    // <SomeChildComponent />

</Scroll>


```

### Props

| Prop | Type | Description | Default |
| --- | --- | --- | --- |
| children | `Object, Array` | ` Renders child component(s) or element(s)` | `true` |
| barSize | `String` | `Controls the size of progress bar` | `5px` |
| barColor | `String` | `Specifies the color to be used` | `#e74c3c` |
| customStyles | `Object` | `Overides default settings. allows for custom positioning, bar size, color and other CSS properties ` | `false` uses default style


### Default Styles
```css
    position: fixed,
    height: 5px,
    backgroundColor: #e74c3c
```
