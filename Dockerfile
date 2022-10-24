# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3
ENV LANG=CUTF-8 LC-ALL=C:UTF-8

# Create folder
RUN mkdir -p /backend
RUN mkdir -p /scripts
RUN mkdir -p /static-files
RUN mkdir -p /media-files


#pass all the files and folders from local folder to image
COPY ./backend /backend
COPY ./scripts /scripts
RUN chmod +x ./scripts


# create the environment inside the docker container
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml

WORKDIR /backend

# we set the path were all the python pacakages are
ENV PATH /opt/conda/envs/luna_project/bin:$PATH

#activate app
RUN echo "source activate luna_project" >~/.bashrc
