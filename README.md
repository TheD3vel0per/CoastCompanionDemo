# CoastCompanionDemo

### How to use this
Please refer to https://thed3vel0per.github.io/CoastCompanionDemo/guide for a detailed instruction on how to use the new demo page. The demo page now contains documentation and more information. You can directly make a commit to main by editing a file directly on GitHub, and it will **not automatically deploy to GitHub Pages**. Someone has to manually run the deployment script to build and deploy. The scripts pushes the build file into the ``gh-pages`` branch, where it is deployed.

So if you are making small changes to a markdown file (something like Release Notes), it is encouraged that you just use GitHub. If you are making a big change, clone & make a new branch. **Always run the deployment script from main to ensure that the build file is consistent with the main branch**.

### ChatBot and Embed Directories
1. Chatbot and Embed Directories in the root folder are **not** being used by the deployment
2. The *NEW* Chatbot directory is in ``backbenchers/static/chatbot``
3. The *NEW* Embed directory is in ``backbenchers/static/embed``
4. **The NEW directories do not have commit history.** If you want commit history from up to now, do ``git mv`` to move the old directories and overwrite the new directories.
