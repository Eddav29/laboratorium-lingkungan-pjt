# Docker management script for laboratorium-pjt
# Usage: .\docker.ps1 <command>

param(
    [Parameter(Mandatory=$true)]
    [string]$Command
)

# Variables
$IMAGE_NAME = "laboratorium-pjt"
$CONTAINER_NAME = "laboratorium-pjt-app"
$PORT = 3000

function Build-Image {
    Write-Host "Building Docker image..." -ForegroundColor Green
    docker build -t $IMAGE_NAME .
}

function Run-Container {
    Write-Host "Running container..." -ForegroundColor Green
    docker run -d --name $CONTAINER_NAME -p "${PORT}:3000" --env-file .env $IMAGE_NAME
}

function Start-Compose {
    Write-Host "Starting with docker-compose..." -ForegroundColor Green
    docker-compose up -d
}

function Stop-Compose {
    Write-Host "Stopping docker-compose..." -ForegroundColor Green
    docker-compose down
}

function Build-And-Start {
    Write-Host "Building and starting with docker-compose..." -ForegroundColor Green
    docker-compose up -d --build
}

function Stop-Container {
    Write-Host "Stopping container..." -ForegroundColor Yellow
    docker stop $CONTAINER_NAME 2>$null
    docker rm $CONTAINER_NAME 2>$null
}

function Remove-Image {
    Write-Host "Removing image..." -ForegroundColor Yellow
    docker rmi $IMAGE_NAME 2>$null
}

function Show-Logs {
    Write-Host "Showing logs..." -ForegroundColor Cyan
    docker logs -f $CONTAINER_NAME
}

function Show-Compose-Logs {
    Write-Host "Showing docker-compose logs..." -ForegroundColor Cyan
    docker-compose logs -f
}

function Restart-Container {
    Stop-Container
    Run-Container
}

function Clean-All {
    Stop-Container
    Remove-Image
}

function Show-Status {
    Write-Host "Container status:" -ForegroundColor Cyan
    docker ps -a | Select-String $CONTAINER_NAME -ErrorAction SilentlyContinue
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Container not found" -ForegroundColor Red
    }
}

function Enter-Shell {
    Write-Host "Entering container shell..." -ForegroundColor Green
    docker exec -it $CONTAINER_NAME /bin/sh
}

function Check-Health {
    Write-Host "Checking health..." -ForegroundColor Green
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:$PORT/api/health" -UseBasicParsing
        Write-Host "Health check passed: $($response.StatusCode)" -ForegroundColor Green
        Write-Host $response.Content
    }
    catch {
        Write-Host "Health check failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

function Show-Help {
    Write-Host "Available commands:" -ForegroundColor Yellow
    Write-Host "  build       - Build Docker image"
    Write-Host "  run         - Run container"
    Write-Host "  up          - Start with docker-compose"
    Write-Host "  down        - Stop docker-compose"
    Write-Host "  up-build    - Build and start with docker-compose"
    Write-Host "  stop        - Stop and remove container"
    Write-Host "  clean       - Remove image"
    Write-Host "  logs        - Show container logs"
    Write-Host "  logs-compose - Show docker-compose logs"
    Write-Host "  restart     - Restart container"
    Write-Host "  clean-all   - Stop container and remove image"
    Write-Host "  status      - Show container status"
    Write-Host "  shell       - Enter container shell"
    Write-Host "  health      - Check application health"
    Write-Host "  help        - Show this help"
}

# Execute command
switch ($Command.ToLower()) {
    "build" { Build-Image }
    "run" { Run-Container }
    "up" { Start-Compose }
    "down" { Stop-Compose }
    "up-build" { Build-And-Start }
    "stop" { Stop-Container }
    "clean" { Remove-Image }
    "logs" { Show-Logs }
    "logs-compose" { Show-Compose-Logs }
    "restart" { Restart-Container }
    "clean-all" { Clean-All }
    "status" { Show-Status }
    "shell" { Enter-Shell }
    "health" { Check-Health }
    "help" { Show-Help }
    default { 
        Write-Host "Unknown command: $Command" -ForegroundColor Red
        Show-Help
    }
}
