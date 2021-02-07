.PHONY: status logs start stop clean

status: ## Get status of containers
	docker-compose ps

logs: ## Get logs of containers
	docker-compose logs -f

update: ## Pull latest images
	docker-compose pull

stop: ## Stop docker containers
	docker-compose stop

clean:stop ## Stop docker containers, clean data and workspace
	docker-compose down -v --remove-orphans

prune:stop ## Stop and prune obsolete images
	docker image prune
