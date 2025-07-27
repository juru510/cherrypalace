#!/bin/bash

echo "🎬 Cherry Palace Video Data Generator"
echo "====================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Navigate to scripts directory
cd "$(dirname "$0")"

# Run the generator
echo "📁 Scanning video directory..."
node generate-video-data.js

echo ""
echo "✅ Done! Your video data has been generated."
echo "📄 Check videos/videos-data.json for the generated data."
echo ""
echo "💡 Tips:"
echo "   - Edit the categories in scripts/generate-video-data.js if needed"
echo "   - Update video titles and durations manually in videos-data.json"
echo "   - Add more video metadata as needed" 