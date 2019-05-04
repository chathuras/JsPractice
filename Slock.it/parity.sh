#!/usr/bin/env bash
docker run -ti -p 8545:8545 -p 8546:8546 parity/parity:stable --ui-interface all --jsonrpc-interface all --light $1 $2 $3 $4 $5
