#!/bin/bash

cd /Users/hqpl/Desktop/Lakshya/expo-MusicPlayer-main  # Replace with your actual repo path

# Get the latest local commit hash on main
LOCAL=$(git rev-parse main)

# Get the latest remote commit hash on main
REMOTE=$(git ls-remote https://github.com/targetlakshya/Expo-music.git refs/heads/main | awk '{print $1}')

echo "Local:  $LOCAL"
echo "Remote: $REMOTE"

if [ "$LOCAL" = "$REMOTE" ]; then
    echo "Up-to-date"
else
    echo "Need to pull"
    git pull origin main
fi