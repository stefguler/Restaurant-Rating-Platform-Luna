# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3
ENV LANG=CUTF-8 LC-ALL=C:UTF-8

RUN apt-get update

RUN apt-get upgrade -y

RUN apt-get install curl -y

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs

# Create folder
RUN mkdir -p /backend
RUN mkdir -p /scripts
RUN mkdir -p /static-files
RUN mkdir -p /media-files
RUN mkdir -p /frontend


#pass all the files and folders from local folder to image
COPY ./backend /backend
COPY ./scripts /scripts
RUN chmod +x ./scripts


# create the environment inside the docker container
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml


# we set the path were all the python pacakages are
ENV PATH /opt/conda/envs/luna_project/bin:$PATH

#activate app
RUN echo "source activate luna_project" >~/.bashrc

WORKDIR /frontend
COPY ./frontend/package.json /frontend/
COPY ./frontend/package-lock.json /frontend/
RUN npm install
COPY ./frontend /frontend
RUN npm run build

WORKDIR /backend