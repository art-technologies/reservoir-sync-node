#!/bin/sh

# Run database preparation
echo "Running database preparation..."
yarn database:prepare

# Start the application
echo "Starting the application..."
exec "$@"
