#!/bin/bash

# Action
libs() {
  npm install
}

run_on_win() {
  libs

  docker-compose stop

  docker-compose build

  docker-compose up -d

  docker-compose start
}

run_on_win
