# Uncomment and add your authentication info and space id below
export CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=CFPAT-aea9459fd221f34000ef1ccd88fda3208a5d4ff944083a115ffce2fdaec3fae7
export SPACE=nk1sa4wmi9ob

GH_PAGES_URL=https://contentful.github.io/ui-extensions-sdk/examples/chessboard/

# Run a static webserver inside 'dist'
serve: build
	cd dist && python -m SimpleHTTPServer 5000

# Move all assets to the 'dist/' directory
build:
	mkdir -p dist
	cp -fr index.html app.js vendor/chessboard/* dist/

update: extension.json
	contentful-extension update --space-id $(SPACE) --force

update-gh: extension.json
	contentful-extension update --space-id $(SPACE) --force --src "$(GH_PAGES_URL)"

create: extension.json
	contentful-extension create --space-id $(SPACE)

.PHONY: build
