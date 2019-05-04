#!/usr/bin/env bash
docker run -it --rm --name js-practice -v "$PWD":/usr/src/app -w /usr/src/app node:10.15.3 $1 $2 $3 $4 $5