const fs = require('fs');
const path = require('path');

// Configuration
const VIDEOS_DIR = '../assets/videos/tik toks/';
const BACKUP_DIR = '../backups/';
const LOG_FILE = '../logs/upload-log.txt';

// Create directories if they don't exist
function ensureDirectories() {
    const dirs = [BACKUP_DIR, path.dirname(LOG_FILE)];
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
}

// Log function
function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(LOG_FILE, logMessage);
}

// Analyze video directory
function analyzeVideos() {
    try {
        const files = fs.readdirSync(VIDEOS_DIR);
        const videoFiles = files.filter(file => file.endsWith('.mp4'));
        
        log(`📊 Video Analysis Report`);
        log(`=======================`);
        log(`Total video files: ${videoFiles.length}`);
        
        // File size analysis
        let totalSize = 0;
        const sizeRanges = {
            '0-10MB': 0,
            '10-50MB': 0,
            '50-100MB': 0,
            '100MB+': 0
        };
        
        videoFiles.forEach(file => {
            const filePath = path.join(VIDEOS_DIR, file);
            const stats = fs.statSync(filePath);
            const sizeMB = stats.size / (1024 * 1024);
            totalSize += sizeMB;
            
            if (sizeMB < 10) sizeRanges['0-10MB']++;
            else if (sizeMB < 50) sizeRanges['10-50MB']++;
            else if (sizeMB < 100) sizeRanges['50-100MB']++;
            else sizeRanges['100MB+']++;
        });
        
        log(`Total size: ${(totalSize / 1024).toFixed(2)} GB`);
        log(`Average size: ${(totalSize / videoFiles.length).toFixed(2)} MB`);
        log(``);
        log(`Size distribution:`);
        Object.entries(sizeRanges).forEach(([range, count]) => {
            log(`  ${range}: ${count} videos`);
        });
        
        // Naming pattern analysis
        const patterns = {};
        videoFiles.forEach(file => {
            const pattern = file.split('_')[0]; // First part before underscore
            patterns[pattern] = (patterns[pattern] || 0) + 1;
        });
        
        log(``);
        log(`Naming patterns:`);
        Object.entries(patterns).forEach(([pattern, count]) => {
            log(`  ${pattern}: ${count} videos`);
        });
        
        return videoFiles.length;
        
    } catch (error) {
        log(`❌ Error analyzing videos: ${error.message}`);
        return 0;
    }
}

// Generate optimized categories based on content
function suggestCategories() {
    const categories = [
        'aesthetic', 'music', 'cinema', 'glitch', 'portrait',
        'vaporwave', 'cyberpunk', 'retro', 'experimental',
        'anime', 'gaming', 'nature', 'urban', 'abstract',
        'dance', 'comedy', 'art', 'fashion', 'food', 'travel'
    ];
    
    log(``);
    log(`🎯 Suggested Categories for 1,000+ videos:`);
    log(`=========================================`);
    categories.forEach(category => {
        log(`  • ${category}`);
    });
    
    return categories;
}

// Performance recommendations
function performanceRecommendations(videoCount) {
    log(``);
    log(`⚡ Performance Recommendations:`);
    log(`==============================`);
    
    if (videoCount > 500) {
        log(`  • Use pagination (50-100 videos per page)`);
        log(`  • Implement lazy loading for video thumbnails`);
        log(`  • Consider video compression (H.264, WebM)`);
        log(`  • Use CDN for video delivery`);
        log(`  • Implement video caching`);
    }
    
    if (videoCount > 1000) {
        log(`  • Consider database storage for metadata`);
        log(`  • Implement server-side pagination`);
        log(`  • Use video streaming (HLS/DASH)`);
        log(`  • Optimize thumbnail generation`);
    }
    
    log(`  • Monitor browser memory usage`);
    log(`  • Test on mobile devices`);
    log(`  • Implement search with debouncing`);
}

// Generate upload checklist
function generateUploadChecklist() {
    log(``);
    log(`📋 Upload Checklist for 1,000 Videos:`);
    log(`=====================================`);
    log(`  □ Organize videos into subdirectories`);
    log(`  □ Compress videos to reasonable sizes`);
    log(`  □ Generate thumbnails for all videos`);
    log(`  □ Create consistent naming convention`);
    log(`  □ Backup original files`);
    log(`  □ Test video playback on different devices`);
    log(`  □ Verify all video metadata`);
    log(`  □ Check mobile performance`);
    log(`  □ Test search and filter functionality`);
    log(`  □ Monitor server bandwidth usage`);
}

// Main function
function main() {
    ensureDirectories();
    
    log(`🎬 Cherry Palace Batch Upload Helper`);
    log(`===================================`);
    
    const videoCount = analyzeVideos();
    suggestCategories();
    performanceRecommendations(videoCount);
    generateUploadChecklist();
    
    log(``);
    log(`✅ Analysis complete! Check the log file for details.`);
    log(`📄 Log file: ${LOG_FILE}`);
}

// Run the script
main(); 