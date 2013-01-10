
# Prompt Popover

  Popover prompt component built on top of [Popover](http://github.com/component/popover).

  ![js popover prompt component](http://cdn.dropmark.com/41933/d85858ab38a78c6ad8d912adffb1998feab5d207/Screen%20Shot%202013-01-09%20at%205.31.42%20PM.png)

## Installation

```
$ component install component/prompt-popover
```

## Features

  - all the features of Popover / Tip

## Events

  - `show` the prompt is shown
  - `hide` the prompt is hidden
  - `cancel` the user closed the prompt or cancelled
  - `ok` the user accepted

## API

### new Prompt([placeholder])

  Create a new popover with optional input `placeholder` text.

```js
var Prompt = require('prompt-popover');
var prompt = new Prompt('Password');
var el = $('#change-password').get(0);
prompt.show(el);
```

### Prompt#cancel(text)

  Set cancel button `text`.

### Prompt#ok(text)

  Set cancel ok `text`.

### Prompt#show(el, [fn])

  Attach to `el`, and invoke `fn` with
  a boolean representing the user's choice.

  When `fn` is omitted you may still utilize the `cancel` / `ok` events.

### ...

  View [Tip](http://github.com/component/tip) and [Popover](http://github.com/component/popover) for additional
  API documentation.

## License

  MIT
