# Uncomment the lines below after adding your data
export CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=CFPAT-aea9459fd221f34000ef1ccd88fda3208a5d4ff944083a115ffce2fdaec3fae7
export SPACE=nk1sa4wmi9ob

serve:
	python -m SimpleHTTPServer 5000

update: extension.json
	contentful-extension update --space-id $(SPACE)

update-local: extension.json
	contentful-extension update --space-id $(SPACE) --force --src http://localhost:5000

update-force: extension.json
	contentful-extension update --space-id $(SPACE) --force

create: extension.json
	contentful-extension create --space-id $(SPACE)

delete:
	contentful-extension delete --space-id $(SPACE) --id alloy
