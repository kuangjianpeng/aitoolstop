$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

Write-Host 'Building the VitePress site...'
pnpm docs:build
if ($LASTEXITCODE -ne 0) {
    Write-Host 'Build failed. Nothing was pushed.' -ForegroundColor Red
    exit 1
}

Write-Host 'Preparing changed files...'
git add -A
git add -f .vitepress/dist

# Keep the existing local .gitignore change out of the site release.
git restore --staged -- .gitignore 2>$null

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host 'No changes to publish.'
    exit 0
}

$message = 'Update site ' + (Get-Date -Format 'yyyy-MM-dd HH:mm')
git commit -m $message
if ($LASTEXITCODE -ne 0) {
    Write-Host 'Commit failed. Nothing was pushed.' -ForegroundColor Red
    exit 1
}

Write-Host 'Pushing to GitHub...'
git -c http.proxy=http://127.0.0.1:7897 push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host 'Push failed. Check that the proxy is running, then try again.' -ForegroundColor Red
    exit 1
}

Write-Host 'Published successfully. Baota can now pull the update.' -ForegroundColor Green
