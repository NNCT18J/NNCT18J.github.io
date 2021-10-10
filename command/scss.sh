cd src

cd css
sass app.scss app.css 
echo "src/app"
cd ..


cd common

cd header/css
sass header.scss header.css
echo "src/common/header"
cd ../..

cd footer/css
sass footer.scss footer.css
echo "src/common/footer"
cd ../..

cd nav/css
sass nav.scss nav.css
echo "src/common/nav"
cd ../..

cd ..


cd components
cd pageTitle/css
sass pageTitle.scss pageTitle.css 
echo "src/components/pageTitle"
cd ../..

cd ..


cd page

cd home/css
sass home.scss home.css 
echo "src/page/home"
cd ../..

cd works/css
sass works.scss works.css 
echo "src/page/links"
cd ../..

cd links/css
sass links.scss links.css 
echo "src/page/works"
cd ../..

cd ..

cd ..