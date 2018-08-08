#!/bin/sh 

set -eu

#apk add gtk+3.0
zstd -D /chrome/chromium_lib.dict -d /chrome/chromium_lib.tar.zst
tar xvf /chrome/chromium_lib.tar
mv chromium /usr/lib/chromium
#cd lib
#find ./ -maxdepth 1 '!' -path './' '!' -exec 'mv' '{}' '/usr/lib' ';'
ln -s /usr/lib/chromium/chromium-launcher.sh /usr/bin/chromium-browser
#cd ..
#apk add chromium
#su chrome bash -c "./node_modules/.bin/micro"
./node_modules/.bin/micro

