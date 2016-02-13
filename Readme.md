# Taipei Hackerspace IRC Bot

A simple little bot to do some fun stuff. But not just yet.
At the moment it just keeps the IRC channel alive, and gives
op to a list of admin users. But in the future!

[![dependencies](https://david-dm.org/taipeihackerspace/taipeihackbot.svg)](https://david-dm.org/taipeihackerspace/taipeihackbot)

## Working commands

Most of these commands are implemented in plugins

* `!help`: list working commands
* `!flip`: flip a coin, heads or tails
* `!yesno`: give a simple yes or no answer
* `!roll (<sides>)`: roll a dice, default 6 sided, or if a number given then that
* `!open`: is anyone checked in the space ("are we open?") using SpaceAPI
* `!8ball`: ask the magic 8-ball
* `!iching (<hexagram>)`: get your i-ching hexagram
* `!bare`: run the barebones plugin
* `!weather (<location>)`: weather report for a given location, or to Taipei

## Plugins

You can implement other plugins:

* take the example of the barebones plugin (`plugins/barebones.js`)
* copy it on another file
* modify your command string, what the commands do, and so on
* add your filename (without the directory and the .js extension) to the config file you use to run (see `bot.conf.example`)

## Running the bot

* Copy the `bot.conf.example` into another file such that `mybot.conf`
* Modify the settings inside (the channels to connect to, the bot IRC nick, the enabled plugins)
* Run `node bot.js mybot.conf` to start up. In 5-10 seconds you should have your bot logged in to the selected channel

## License

TL;DR: MIT License, do whatever.

Copyright (c) 2014 Gergely Imreh <imrehg@gmail.com> + Taipei Hackerspace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
