# Ping Pong

#### A program that allows users to input a word and determine its raw pingpong, assuming no special tiles. 3/6/19

#### By **Mohammed Qedan**

## Description

A website created with C# and HTML where a user can submit a word and determine its raw Scrabble score.

## Setup/Installation Requirements

_Clone the repo and open up index.html to view in your web browser._
_Link to site on gh-pages coming soon but it will be: https://github.com/mohammedqedan/pingpong

## Specifications

* Behavior: A single list item is added if user enters a 1, item removed when form is re submitted input: 1 output: 1 formatted into a list
  * **Example input:** "1"
  * **Example output:** 1 formatted into a list in HTML
* Behavior: Takes a number from a user and returns a range of numbes from 1 up to and including the chosen number
  * **Example input:** 2
  * **Example output:** 1,2 formatted into a list in HTML
* Behavior: Numbers divisible by 3 are replaced with "ping"
  * **Example input:** 5
  * **Example output:** 1,2,ping,4,5
* Behavior: Numbers divisible by 5 are replaced with "pong"
  * **Example input:** 7
  * **Example output:** 1,2,ping,4,pong,ping,7
* Behavior: Numbers divisible by 15 are replaced with "ping-pong"
  * **Example input:** 16
  * **Example output:** 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong,16
* Behavior: A user that enters number larger than 1 followed by a new number sees accurate results after each new submit
  * **Example input:** enter 7, click submit, enter 3, click submit...etc
  * **Example output:** after first submit 1,2,ping,4,pong,ping,7 shows. User hits submit and old list clears and 1,2,ping appars...

## Known Bugs
* No known bugs at this time.

## Technologies Used


* HTML

## Support and contact details

_Email qedan@yahoo.com with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **_{Mohammed Qedan}_**
