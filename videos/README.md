# Cherry Palace Videos Wing

This directory contains the video gallery system designed to handle 1,000+ videos efficiently.

## 🚀 Quick Start

### 1. Generate Video Data
Run the automated script to scan your video directory and generate metadata:

```bash
# From project root
./scripts/run-generator.sh
```

This will:
- Scan `assets/videos/tik toks/` for all `.mp4` files
- Generate `videos-data.json` with metadata for all videos
- Assign random categories and durations (you can edit these later)

### 2. Customize Video Data
Edit `videos-data.json` to:
- Update video titles
- Set correct durations
- Assign proper categories
- Add custom metadata

### 3. Add New Videos
1. Place new video files in `assets/videos/tik toks/`
2. Run the generator script again
3. Or manually add entries to `videos-data.json`

## 📁 File Structure

```
videos/
├── videos.html          # Main video gallery page
├── videos-data.json     # Video metadata (auto-generated)
├── README.md           # This file
└── test.html           # Video testing page

scripts/
├── generate-video-data.js  # Video data generator
└── run-generator.sh        # Generator runner script
```

## 🎯 Features

### Performance Optimizations
- **Pagination**: Loads 50 videos at a time
- **Lazy Loading**: Videos load as you scroll
- **Search**: Real-time search with debouncing
- **Filtering**: Category-based filtering
- **Caching**: Video metadata cached in JSON

### User Experience
- TikTok-style video grid
- Modal video player with controls
- Theme switching (Purple/Light/Dark)
- Responsive design
- Keyboard navigation

### Video Management
- External JSON data file
- Automated metadata generation
- Category organization
- Search functionality
- Bulk operations support

## 🔧 Configuration

### Video Categories
Edit `scripts/generate-video-data.js` to modify categories:

```javascript
const CATEGORIES = [
    'all',
    'aesthetic',
    'music',
    'cinema',
    'glitch',
    'portrait',
    'vaporwave',
    'cyberpunk',
    'retro',
    'experimental',
    // Add your categories here
];
```

### Pagination Settings
In `videos.html`, adjust:

```javascript
const videosPerPage = 50; // Change this number
```

### Video Directory
Update the video directory path in `scripts/generate-video-data.js`:

```javascript
const VIDEOS_DIR = '../assets/videos/tik toks/';
```

## 📊 Video Data Format

Each video entry in `videos-data.json`:

```json
{
  "id": 1,
  "title": "Video Title",
  "videoSrc": "../../assets/videos/tik toks/filename.mp4",
  "duration": "2:34",
  "category": "aesthetic",
  "date": "2024-01-15"
}
```

## 🛠️ Advanced Usage

### Manual Video Entry
Add videos manually to `videos-data.json`:

```json
{
  "id": 1001,
  "title": "Custom Video Title",
  "videoSrc": "../../assets/videos/tik toks/custom_video.mp4",
  "duration": "3:45",
  "category": "custom",
  "date": "2024-01-20",
  "description": "Optional description",
  "tags": ["optional", "tags"]
}
```

### Custom Categories
Add new categories and update the filter system:

1. Add category to `CATEGORIES` array in generator
2. Regenerate data or manually assign categories
3. Categories automatically appear in filter buttons

### Performance Monitoring
Check browser console for:
- Video load times
- Memory usage
- Search performance

## 🐛 Troubleshooting

### Videos Not Loading
1. Check file paths in `videos-data.json`
2. Verify video files exist in directory
3. Check browser console for errors

### Generator Script Issues
1. Ensure Node.js is installed
2. Check directory permissions
3. Verify video directory path

### Performance Issues
1. Reduce `videosPerPage` value
2. Optimize video file sizes
3. Use video compression

## 📈 Scaling Tips

For 1,000+ videos:

1. **File Organization**: Keep videos in organized subdirectories
2. **Metadata Management**: Use the JSON file for bulk editing
3. **Performance**: Monitor load times and adjust pagination
4. **Storage**: Consider video compression for faster loading
5. **CDN**: Use a CDN for video delivery if needed

## 🔄 Maintenance

### Regular Tasks
- Run generator script when adding new videos
- Update video metadata as needed
- Monitor performance metrics
- Backup `videos-data.json` regularly

### Updates
- Keep video categories organized
- Remove broken video links
- Update video titles and descriptions
- Optimize video file sizes

---

**Need help?** Check the browser console for errors or refer to the main project documentation. 