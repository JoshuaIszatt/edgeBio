#!/bin/bash

# Start both frontend and backend servers concurrently
npx concurrently \
  "cd backend && npm start" \
  "cd frontend && npm run dev"