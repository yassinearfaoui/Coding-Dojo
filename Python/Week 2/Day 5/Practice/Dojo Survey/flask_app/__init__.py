from  flask import Flask

app= Flask(__name__)
app.secret_key = "stay safe"
DATABASE = "dojo_survey_validation"