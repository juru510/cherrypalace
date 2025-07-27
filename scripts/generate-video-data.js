const fs = require('fs');
const path = require('path');

// Configuration
const VIDEOS_DIR = '../assets/videos/tik toks/';
const OUTPUT_FILE = '../videos/videos-data.json';
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
    'anime',
    'gaming',
    'nature',
    'urban',
    'abstract'
];

function generateVideoData() {
    try {
        // Read all video files from the directory
        const videoFiles = fs.readdirSync(VIDEOS_DIR)
            .filter(file => file.endsWith('.mp4'))
            .sort(); // Sort alphabetically

        const videos = videoFiles.map((filename, index) => {
            const id = index + 1;
            
            // Extract title from filename (remove extension and underscores)
            let title = filename
                .replace('.mp4', '')
                .replace(/tiktok_/g, '')
                .replace(/_/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
            
            // Capitalize first letter of each word
            title = title.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            // Generate video source path
            const videoSrc = `../../assets/videos/tik toks/${filename}`;
            
            // Random duration (you can update this later with actual durations)
            const minutes = Math.floor(Math.random() * 4) + 1;
            const seconds = Math.floor(Math.random() * 60);
            const duration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Random category (you can update this later)
            const category = CATEGORIES[Math.floor(Math.random() * (CATEGORIES.length - 1)) + 1]; // Skip 'all'
            
            // Random date within last year
            const date = new Date();
            date.setDate(date.getDate() - Math.floor(Math.random() * 365));
            const dateString = date.toISOString().split('T')[0];

            return {
                id,
                title,
                videoSrc,
                duration,
                category,
                date: dateString
            };
        });

        const videoData = {
            videos,
            categories: CATEGORIES
        };

        // Write to JSON file
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(videoData, null, 2));
        
        console.log(`✅ Generated video data for ${videos.length} videos`);
        console.log(`📁 Output saved to: ${OUTPUT_FILE}`);
        console.log(`📊 Categories: ${CATEGORIES.join(', ')}`);
        
        // Show some stats
        const categoryCounts = {};
        videos.forEach(video => {
            categoryCounts[video.category] = (categoryCounts[video.category] || 0) + 1;
        });
        
        console.log('\n📈 Category distribution:');
        Object.entries(categoryCounts).forEach(([category, count]) => {
            console.log(`   ${category}: ${count} videos`);
        });

    } catch (error) {
        console.error('❌ Error generating video data:', error.message);
    }
}

// Run the script
generateVideoData(); 