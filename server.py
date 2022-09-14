import numpy as np
import pickle
from flask import Flask, render_template, request, jsonify, Response
from dataclasses import field, dataclass

app = Flask(__name__)
log_reg = pickle.load(open('lg.model', 'rb'))
ran_for = pickle.load(open("rf.model","rb"))

@dataclass
class Req:
  """The json that is passed to our model to predict"""
  Sex: int
  Pclass: int
  SibSp: int
  Embarked: int
  def __array__(self):
    return np.array([self.Sex, self.Pclass, self.SibSp, self.Embarked])


@app.route('/predict',methods=['POST'])
def predict():
  payload = request.get_json()

  try:
    req = Req(**payload)
  except TypeError:
    return Response("Bad arguments", status=422)

  req = np.array(req).reshape(1,-1)
  print(req)
  resp = {
    "lg": int(log_reg.predict(req)[0]),
    "rf": int(ran_for.predict(req)[0])
  }

  return resp

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=8080, debug=False, use_reloader=False, threaded=True)