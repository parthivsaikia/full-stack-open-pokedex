#!/bin/bash

echo "Build script"

# add the commands here
npm install
npm run eslint -- --fix
npm run build
