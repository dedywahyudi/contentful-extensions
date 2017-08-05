# These exports are useful when you use contentful-widget cli
# to create/read/update/delete your widget
export CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=CFPAT-aea9459fd221f34000ef1ccd88fda3208a5d4ff944083a115ffce2fdaec3fae7
export SPACE=nk1sa4wmi9ob

build: dist/index.html

dist/app.js: app.js
	mkdir -p dist
	browserify \
	-t [ babelify --presets es2015 --sourceMapRelative .] \
	--entry $^ \
	--outfile $@

dist/index.html: index.html dist/app.js
	cp $< $@
	echo "<script>" >> $@
	cat dist/app.js >> $@
	echo "</script>" >> $@

clean:
	rm -f dist/*

.PHONY: build, clean
