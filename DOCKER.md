# Docker Setup for Laboratorium PJT

This document explains how to run the Laboratorium PJT application using Docker.

## ✅ Status: Fully Tested and Working

The Docker setup has been tested and is working correctly:
- ✅ Docker build completes successfully
- ✅ Container runs without errors
- ✅ Health check endpoint responds correctly
- ✅ Application accessible at http://localhost:3000
- ✅ Docker Compose working properly
- ✅ PowerShell scripts functional

## Prerequisites

- Docker Desktop installed on your system
- Docker Compose (included with Docker Desktop)

## Quick Start

### Using Docker Compose (Recommended)

1. **Copy environment variables:**
   ```bash
   copy .env.example .env
   ```
   Edit `.env` file with your actual environment variables.

2. **Build and start the application:**
   ```bash
   docker-compose up -d --build
   ```

3. **Access the application:**
   Open http://localhost:3000 in your browser

4. **Stop the application:**
   ```bash
   docker-compose down
   ```

### Using PowerShell Script (Windows)

We've provided a PowerShell script to make Docker operations easier:

```powershell
# Build and start
.\docker.ps1 up-build

# Show logs
.\docker.ps1 logs-compose

# Check health
.\docker.ps1 health

# Stop application
.\docker.ps1 down

# Show all available commands
.\docker.ps1 help
```

### Using Direct Docker Commands

1. **Build the image:**
   ```bash
   docker build -t laboratorium-pjt .
   ```

2. **Run the container:**
   ```bash
   docker run -d --name laboratorium-pjt-app -p 3000:3000 --env-file .env laboratorium-pjt
   ```

3. **Stop and remove:**
   ```bash
   docker stop laboratorium-pjt-app
   docker rm laboratorium-pjt-app
   ```

## Docker Files Explanation

### Dockerfile
- Uses multi-stage build for optimization
- Based on Node.js 20 Alpine for smaller image size
- Implements security best practices (non-root user)
- Uses Next.js standalone output for production

### docker-compose.yml
- Defines the application service
- Includes health check configuration
- Ready for database integration (commented out)
- Handles environment variables

### .dockerignore
- Excludes unnecessary files from Docker context
- Reduces build time and image size

## Health Check

The application includes a health check endpoint at `/api/health`. You can check if the application is running properly:

```bash
curl http://localhost:3000/api/health
```

Or using the PowerShell script:
```powershell
.\docker.ps1 health
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add other environment variables as needed
```

## Adding Database (Optional)

To add PostgreSQL database, uncomment the database service in `docker-compose.yml`:

```yaml
db:
  image: postgres:15-alpine
  environment:
    POSTGRES_DB: laboratorium_db
    POSTGRES_USER: postgres
    POSTGRES_PASSWORD: password
  ports:
    - "5432:5432"
  volumes:
    - postgres_data:/var/lib/postgresql/data
```

And uncomment the volumes section at the bottom.

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Check what's using port 3000
   netstat -ano | findstr 3000
   
   # Or use different port
   docker run -p 3001:3000 laboratorium-pjt
   ```

2. **Build fails:**
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker-compose build --no-cache
   ```

3. **Container won't start:**
   ```bash
   # Check logs
   docker-compose logs app
   
   # Or for direct container
   docker logs laboratorium-pjt-app
   ```

### Performance Tips

- Use `docker-compose up -d` to run in background
- Use `docker-compose logs -f` to follow logs
- Regular cleanup with `docker system prune` to free space

## Development with Docker

For development, you might want to mount your source code:

```yaml
# Add to docker-compose.yml under app service
volumes:
  - .:/app
  - /app/node_modules
  - /app/.next
```

This allows for hot reloading during development.

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in your environment
2. Use proper secrets management
3. Configure reverse proxy (nginx, traefik)
4. Set up SSL certificates
5. Configure monitoring and logging

## Useful Commands

```bash
# View running containers
docker ps

# View all containers
docker ps -a

# Remove all stopped containers
docker container prune

# View images
docker images

# Remove unused images
docker image prune -a

# View logs
docker-compose logs -f

# Execute shell in container
docker exec -it laboratorium-pjt-app /bin/sh
```
