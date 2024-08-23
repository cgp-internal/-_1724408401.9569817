#!/bin/bash

# Install Node
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

# Init a project
mkdir project
cd project
npm init -y

# Install Express
npm install express

# Install SQLite
npm install sqlite3

echo "Node, Express, and SQLite installed successfully. Project initialized."