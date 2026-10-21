.PHONY: build test lint check
build:
	npm run build
test:
	npm test
lint:
	npm run check
check: build lint test
