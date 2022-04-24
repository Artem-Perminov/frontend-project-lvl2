install:
	npm ci

pull:
	git pull

lint:
	npx eslint .

gendiff:
	node bin/gendiff

publish:
	npm publish --dry-run

test-coverage:
	npm test -- --coverage