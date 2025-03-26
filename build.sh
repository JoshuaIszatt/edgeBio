#!/bin/bash

# Navigate to the backend directory and install packages
echo "Installing backend packages..."
cd ./backend/
npm install

echo ">>>"
echo ">>>"
echo ">>>"

# Navigate to the frontend directory and install packages
echo "Installing frontend packages..."
cd ../frontend/
npm install

echo ">>>"
echo ">>>"
echo ">>>"

# Navigate back to the root directory
cd ..

# Finish the build script
echo "Build script completed successfully."
