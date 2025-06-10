#!/bin/bash

# Config
REPO_DIR="/Users/hqpl/Desktop/Lakshya/expo-MusicPlayer-main"
BRANCH="main"
BUILD_SCRIPT="python3 $REPO_DIR/build.py"  # Path to your Python build script

cd "$REPO_DIR" || exit 1

# Ensure correct branch
git checkout $BRANCH > /dev/null 2>&1

# Fetch latest
git fetch origin $BRANCH > /dev/null 2>&1

# Get hashes
LOCAL=$(git rev-parse $BRANCH)
REMOTE=$(git rev-parse origin/$BRANCH)

echo "Local :  $LOCAL"
echo "Remote: $REMOTE"

if [ "$LOCAL" = "$REMOTE" ]; then
    echo "✅ Up-to-date"
else
    AHEAD_BEHIND=$(git rev-list --left-right --count $BRANCH...origin/$BRANCH)
    AHEAD=$(echo "$AHEAD_BEHIND" | awk '{print $1}')
    BEHIND=$(echo "$AHEAD_BEHIND" | awk '{print $2}')

    if [ "$AHEAD" -gt 0 ] && [ "$BEHIND" -eq 0 ]; then
        echo "📤 Local is ahead by $AHEAD commit(s). Pushing..."
        git push origin $BRANCH

        echo "🚀 Triggering production build..."
        eval "$BUILD_SCRIPT"
    elif [ "$BEHIND" -gt 0 ] && [ "$AHEAD" -eq 0 ]; then
        echo "📥 Local is behind by $BEHIND commit(s). Pulling..."
        git pull origin $BRANCH
    else
        echo "⚠️  Local and remote have diverged. Manual action required."
    fi
fi
