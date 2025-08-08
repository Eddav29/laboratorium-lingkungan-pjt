# Safe Build Script for Next.js
# This script handles the critters module issue

Write-Host "🚀 Starting safe Next.js build..." -ForegroundColor Green

# Clear previous build
Write-Host "📦 Cleaning previous build..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force .next
    Write-Host "✅ Previous build cleaned" -ForegroundColor Green
}

# Set environment variables to prevent critters issue
$env:NEXT_DISABLE_CSS_OPTIMIZATION = "true"
$env:NODE_OPTIONS = "--max_old_space_size=4096"

Write-Host "🔧 Building with safe configuration..." -ForegroundColor Cyan

# Try build with npx
try {
    npx next build
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Build completed successfully!" -ForegroundColor Green
        Write-Host "🚀 You can now run: npm start" -ForegroundColor Yellow
    } else {
        throw "Build failed with exit code $LASTEXITCODE"
    }
} catch {
    Write-Host "❌ Build failed: $_" -ForegroundColor Red
    Write-Host "🔧 Trying alternative build method..." -ForegroundColor Yellow
    
    # Fallback: try with different settings
    $env:NEXT_DISABLE_CSS_OPTIMIZATION = "true"
    $env:DISABLE_CSS_OPTIMIZATION = "true"
    
    npx next build --no-lint
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Alternative build succeeded!" -ForegroundColor Green
    } else {
        Write-Host "❌ Build failed completely. Check Next.js configuration." -ForegroundColor Red
    }
}
