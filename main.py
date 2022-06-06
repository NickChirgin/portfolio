from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from regex import F
from starlette.responses import JSONResponse
from pydantic import BaseModel
from env import FROM_EMAIL, PASSWORD, TO_EMAIL



app = FastAPI()


class Item(BaseModel):
    fname: str
    email1: str
    message1: str


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/forma")
def create_item(item: Item):
    msg = MIMEMultipart()
    msg['From'] = FROM_EMAIL
    msg['To'] = TO_EMAIL
    msg['Subject'] = item.email1
    message = item.message1
    msg.attach(MIMEText(message))

    mailserver = smtplib.SMTP('smtp.yandex.ru', 587)
    # mailserver.ehlo()
    mailserver.starttls()
    # mailserver.ehlo()
    mailserver.login(FROM_EMAIL, PASSWORD)

    mailserver.sendmail(FROM_EMAIL,
                        TO_EMAIL, msg.as_string())

    mailserver.quit()

    return {'message': "email has been sent"}
