# CoastCompanionDemo

### How to use this
Please refer to https://thed3vel0per.github.io/CoastCompanionDemo/guide for a detailed instruction on how to use the new demo page. The demo page now contains documentation and more information. You can directly make a commit to main by editing a file directly on GitHub, and it will **not automatically deploy to GitHub**. Someone has to manually run the deployment script to build and deploy. So if you are making small changes to a markdown file (something like Release Notes), it is encouraged that you just use GitHub, then either deploy it yourself or have Devam deploy it after review.

### ChatBot and Embed Directories
1. Chatbot and Embed Directories in the root folder are **not** being used by the deployment
2. The *NEW* Chatbot directory is in ``backbenchers/static/chatbot``
3. The *NEW* Embed directory is in ``backbenchers/static/embed``
4. **The NEW directories do not have commit history.** If you want commit history from up to now, do ``git mv`` to move the old directories and overwrite the new directories.

### GitHub Pages Deployment Config
Because of Docusaurus, it's easier to deploy using a script to the branch ``gh-pages``. To make that possible...
1. pull
2. Go to the correct directory ``cd backbenchers`` then ``npm install``
3. Deploy by ``USE_SSH=true npm run deploy``. This should [1] Build, [2] Automatically create a gh-pages branch, [3] deploy the static build there.
4. Go to GitHub Repo settings -> Pages and make sure it's "deploy from a branch" and the branch is set to "gh-pages" deploying from "root". If not, change it.
5. Visit the page to see if it worked.