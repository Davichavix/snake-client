# snake-client

A terminal-based Snake client implementation written in JavaScript (Node.js).

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Run it:**

`node snake-client.js`

**Require it:**

`const _ = require('@davichavix/snake-client');`

**Install it:**

### Clone server side from repository

```bash
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer

# install and run via npm
npm install
npm run play
```

## Documentation

The following game controls are currently implemented:

* `w`: "w" key user input logs "Move: up" to server side and results in upward movement of snake
* `a`: "a" key user input logs "Move: left" to server side and results in leftward movement of snake
* `s`: "s" key user input logs "Move: down" to server side and results in downward movement of snake
* `d`: "d" key user input logs "Move: right" to server side and results in rightward movement of snake
* `h`: "h" key user input logs "Say: Hello" to server side and writes "Say: Hello"