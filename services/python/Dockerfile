
FROM python:3.9


WORKDIR /code

COPY ./services/python/requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./services/python/app /code/app
COPY ./.env /code/app

CMD ["fastapi", "run", "app/main.py", "--port", "80", "--reload"]