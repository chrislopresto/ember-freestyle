# <Freesyle::Usage>

- [<Freesyle::Usage>](#freesyleusage)
  - [API](#api)
  - [`<Args>` Documentation](#args-documentation)
    - [`<Args.Base>` a.k.a. `<Freestyle::Usage::Argument>`](#argsbase-aka-freestyleusageargument)
    - [`<Args.Bool>` a.k.a. `<Freestyle::Usage::Bool>`](#argsbool-aka-freestyleusagebool)
    - [`<Args.String>` a.k.a. `<Freestyle::Usage::String>`](#argsstring-aka-freestyleusagestring)
    - [`<Args.Number>` a.k.a. `<Freestyle::Usage::Number>`](#argsnumber-aka-freestyleusagenumber)
    - [`<Args.Action>`](#argsaction)
    - [`<Args.Yield>`](#argsyield)
    - [`<Args.Object>`](#argsobject)

This component is an experimental API which to accomplish two goals:
1. Increase the flexibility of testing a components edge cases, while reducing the overal amount of boilerplate code that needs to be written
2. Clearly document how a component can be used. 

A basic example:

```hbs
 <Freestyle::Usage @name="Message">
  <:description>
    This component shows is a basic visual wrapper around some content
  </:description>

  <:example>
    <Message
      @content={{this.content}}
      @isError={{this.isError}}
    />
  </:example>

  <:api as |Args|>
    <Args.String
      @name="content"
      @required={{true}}
      @description="A string of message to be displayed inside the message"
      @value={{this.content}}
      @onInput={{fn (mut this.content)}}
    />
    <Args.Bool
      @name="isError"
      @defaults={{false}}
      @description='Whether the message should display the error styling'
      @value={{this.isError}}
      @onInput={{fn (mut this.isError)}}
    />
  </:api>
</Freestyle::Usage>
```
## API
| Arg   |   Type |  Description       |
|----------|-------------|-----|
|`@name`|`String`|The name of the component|
|`@description`|`String`| (Optional) Information to describe the component|
|`:description`|Named block |Alternative to `@description`. Allows you compose markdown support or anything else you may want |
|`:example`|Named block| Write the code that will be run to preview the component|
|`:api`|Named block| Yields `Args`. Use `Args` to document the component arguments|

## `<Args>` Documentation

### `<Args.Base>` a.k.a. `<Freestyle::Usage::Argument>`
`Base` is the base argument components that all other args compose. All Arg types support these aruments.
|Argument|Type|Description|
|---|---|---|
|`@name`|`String`|The name of the argument|
|`@type`|`String`|The argument type, ex `String`, `Number`, `Action`, etc|
|`@description`|`String`|Description of the argument|
|`@required`|`Bool`|Whether this is a required argument|
|`@defaultValue`|`Any`|Does it have a default value?|
|`@hideControls`|`Bool`|Should the argument show the dynamic controls for its value?|
||`{{yield}}`|The base argument accepts a yielded block. Whatever is in the block will show up in the "Controls" column of the table. Here you can provide a mechanism to dynamicaly modify the value of the argument, updating the preview|

### `<Args.Bool>` a.k.a. `<Freestyle::Usage::Bool>`
A Boolean argument. Provides a simple toggle.
|Argument|Type|Description|
|---|---|---|
|`@value`|`Bool`|The current value|
|`@onInput`|`Action`|An action that is called when the button toggles|

### `<Args.String>` a.k.a. `<Freestyle::Usage::String>`
A Boolean argument. Provides a simple toggle.
|Argument|Type|Description|
|---|---|---|
|`@value`|`Bool`|The current value|
|`@options`|`Array`|If the arg only accepts a certain number of values, ie: `['sm', 'md', 'lg']`, provide them here and the control will change to a select menu
|`@onInput`|`Action`|An action that is called when the input updates|

### `<Args.Number>` a.k.a. `<Freestyle::Usage::Number>`
A number argument.
|Argument|Type|Description|
|---|---|---|
|`@value`|`Number`|The current value|
|`@min`|`Number`| The minimum acceptable value. When present, along with max, the control will show a range slider instead of an input.
|`@max`|`Number`| The maximum acceptable value. 
|`@step`|`Number`| Defaults to 1. How much the input slider should step when adjusted
|`@onInput`|`Action`|An action that is called when the input updates

### `<Args.Action>`
A way to document an argument that expects a function to be passed to it. There is currently no dynamic controls for this Argument type. 

### `<Args.Yield>`
A way to document an argument that expects a function to be passed to it. There is currently no dynamic controls for this Argument type. 

|Argument|Type|Description|
|---|---|---|
|`@name`|`String`|Optional, if the component has a named block|

### `<Args.Object>`
When a component expects a type of javascript object as an input. The API row will display a syntax highlighted output of the value passed in.

|Argument|Type|Description|
|---|---|---|
|`@name`|`String`|Optional, if the component has a named block|
|`@value`|`Object`|Optional. Will display a pretty printed and syntax highlighted representation in the controls column|
|`@jsonCollapseDepth`|`Number`| In the preview, how many levels in should the json object be collapsed on initial render|
