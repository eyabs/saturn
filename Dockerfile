# Build with: docker build --no-cache -f Dockerfile -t saturn .
# Run with: docker run --rm -v $(pwd):/home/mounted -p 9000:9000 -e "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY" -e "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY" saturn
# Run with: docker run --rm -v $(pwd):/home/mounted -p 9000:9000 saturn

FROM python:3.8

WORKDIR /home

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

WORKDIR /home/mounted/saturn/

EXPOSE 9000
CMD ["python", "manage.py", "runserver", "0.0.0.0:9000"]
