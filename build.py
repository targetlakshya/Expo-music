import os
import subprocess

print("Starting production build...")

try:
    os.chdir("/Users/hqpl/Desktop/Lakshya/expo-MusicPlayer-main/android")
    subprocess.run(["./gradlew", "assembleRelease"], check=True)
    print("✅ Production build completed!")
except subprocess.CalledProcessError:
    print("❌ Build failed.")