.PHONY: build test lint check ci
build:
	npm run build
test:
	npm test
lint:
	npm run check
check: build lint test

ci: check
	cd site && npm ci --ignore-scripts
	cd site && npm run build
