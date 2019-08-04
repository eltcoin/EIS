#!/bin/bash
set -ex

# Connect to the local node
export ETH_RPC_URL=http://127.0.0.1:8545

# Disable below if not on Truffle
export ETH_GAS=4712388

# Use the unlocked RPC accounts
export ETH_RPC_ACCOUNTS=yes

# Get the 1st account and use it
export ETH_FROM=$(seth accounts | head -n1 | awk '{ print $1 }')



export MEMBERNFT=$(cat ../deploy/MemberNFT)

seth send $MEMBERNFT "join(string memory)" "something" --value $(seth --to-wei 0.09 ether)