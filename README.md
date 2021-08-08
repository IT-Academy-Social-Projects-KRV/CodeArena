# CodeArena-Django

CodeArena is a web application for coders to increase their knowledge of the programming language by solving tasks, which gives the opportunity to find their first job. This repository includes a back-end and front-end as well.

## About Project

This project is being developed by SoftServe trainees as part of Python and web development training course at IT Academy.
The main goals of this project are to give opportunity for:
* coders to improve their knowledge of programming languages ​​by solving tasks, raise their rating, discuss tasks, add their own and find their first job;
* recruiters to post vacancies, create competitions and select the best coders for recruitment.

### Built With

* [Django REST](https://www.django-rest-framework.org/)
* [React](https://reactjs.org/)
* [MongoDB](https://www.mongodb.com/)
* [PostgreSQL](https://www.postgresql.org/)

### Project Status

This project is currently on skeleton stage.

## Getting Started

Open terminal and follow next steps to run this project.

Check if Python installed on your machine:
```bash
python -V
```
This command should give you version of installed Python. If you get an error, than go to [Python site](https://www.python.org/downloads/) and download latest version. If you want install it via command line, you can search for "python" in your package managers. For example, at Ubuntu 16.10 or newer you should write:
```bash
sudo apt-get update
sudo apt-get install python3.6
```

Make sure that you have pip installed:
```bash
pip -V
```
Check if Node.js installed on your machine:
```bash
node -v
```
This command should give you version of installed Node.js. If you get an error, than go to [Node.js site](https://nodejs.org/en/), download current version and follow README to install. Also, you can go to [this page](https://nodejs.org/uk/download/package-manager/) and follow the instructions for installing it via your package manager.

Create new directory (if you want to) and go to it:
```bash
mkdir my_directory
cd my_directory
```

This command should give you version of installed pip. In case you get error, go to [this tutorial](https://pip.pypa.io/en/stable/installation/) and follow instructions.

Install Django and Django REST via pip (you can install them at your virtual environment if you want to):
```bash
pip install Django
pip install djangorestframework
```

Make sure that you have git installed:
```bash
git --version
``` 

This command should give you version of installed git. In case you get error, go to [git site](https://git-scm.com/downloads) and install latest version of it.

Clone repository and go to CodeArena-Django directory:
```bash
git clone https://github.com/IT-Academy-Social-Projects-KRV/CodeArena-Django.git
cd CodeArena-Django
```

For starting Django app go to CodeArena directory and run command:
```bash
python manage.py runserver
```
For starting React app go to front-end directory and run command:
```bash
npm start
```


## License

Licensed under the [MIT License](LICENSE).