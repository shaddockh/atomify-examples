Examples using browserify to "atomify" javascript and modules from npm 
so that they can run inside the Atomic Game Engine.

Preparing to run the examples

* Install node.js: https://nodejs.org/
* Install atomic-cli globally "npm install -g atomic-cli"
* Install gulp globally "npm install -g gulp"

For each example

* cd to the example directory
* Install dependencies: "npm install"
* Build the atomified Javascript: "gulp"
* cd to the build directory
* Run "atomic-cli run mac"



##### Additional Changes (shaddockh - 2015-07-09)
The current implementation works fine if all of your external modules are only referenced from your main or anything in your scripts directories.  If you 
want to allow any of your components to require in some of the npm modules, it won't work.  To get around that, I've made some changes that
will allow you to bundle up all of your npm modules into a vendor.js script.  This script also hooks into the Duktape module loader and will intercept any
require calls that are looking for one of the npm modules and pass it back.  If it doesn't recognize the require module being asked for, it will just pass the
request on to the standard module resolver.  In order for this to work, you will currently need to hand-modify the vendor.js map of require names/require calls at the bottom.

Changes:
* modified the process to pull vendor.js from the root instead of app.js
* vendor.js contains a customized module load
* moved the contents of app.js into Resources/Scripts/main.js
* moved the construction of the Tween and Star into a star component under Resources/Components


This demonstrates being able to require the Tweening library into a component instead of having all of your logic in main.  Main simply creates the node and adds the JS component.


