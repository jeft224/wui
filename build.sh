#!/bin/bash

cross-env BABEL_OUTPUT=commonjs babel src/components --out-dir lib/
babel src/components --out-dir es/
# 拷贝css
cpx \"src/components/**/*.css\" es"
cpx \"src/components/**/*.css\" lib"