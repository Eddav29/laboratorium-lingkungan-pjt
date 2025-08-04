# Docker commands for laboratorium-pjt

# Variables
IMAGE_NAME=laboratorium-pjt
CONTAINER_NAME=laboratorium-pjt-app
PORT=3000

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Run the container
run:
	docker run -d \
		--name $(CONTAINER_NAME) \
		-p $(PORT):3000 \
		--env-file .env \
		$(IMAGE_NAME)

# Run with docker-compose
up:
	docker-compose up -d

# Stop docker-compose
down:
	docker-compose down

# Build and run with docker-compose
up-build:
	docker-compose up -d --build

# Stop and remove container
stop:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true

# Remove image
clean:
	docker rmi $(IMAGE_NAME) || true

# View logs
logs:
	docker logs -f $(CONTAINER_NAME)

# View docker-compose logs
logs-compose:
	docker-compose logs -f

# Restart the container
restart: stop run

# Full clean (stop, remove container and image)
clean-all: stop clean

# Check container status
status:
	docker ps -a | grep $(CONTAINER_NAME) || echo "Container not found"

# Execute shell in running container
shell:
	docker exec -it $(CONTAINER_NAME) /bin/sh

# Health check
health:
	curl -f http://localhost:$(PORT)/api/health || echo "Health check failed"

.PHONY: build run up down up-build stop clean logs logs-compose restart clean-all status shell health
