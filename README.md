## Introduction

`tu-emitter` is a small, simple, typescript event emitter which provides clean utilities to fire and listen to events.

## Usage

Inside your React project, add `tu-emitter` using,

`yarn add tu-emitter`

or with npm:

`npm install tu-emitter`

## Quick Start

```jsx
import { Emitter } from "tu-emitter";

const emitter = new Emitter();
emitter.addListener("event", function (x) {
  console.log(`event fired with args ${x}`);
});
emitter.fire("event", [5]); // Listener prints "event fired with args 5".
```

addListener() returns a subscription object, upon which remove can be called.

```jsx
let subscription = emitter.addListener("event", listener);
subscription.remove();
```

## License

The MIT License.
