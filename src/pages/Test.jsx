import React from 'react';
import axios from 'axios';

class IPQS extends React.Component {
  key = 'bhlUVtosttEbq0wzuvFQ3Ew32gyvf9zH';

  malicious_url_scanner_api = async (url, vars = {}) => {
    url = `https://www.ipqualityscore.com/api/json/url/${this.key}/${encodeURIComponent(url)}`;
    const response = await axios.get(url, { params: vars });
    console.log(response.data);
    return response.data;
  };

  render() {
    return <div></div>;
  }
}

const Test = () => {
  /*
    URL to scan - URL Encoded in cURL function below.
  */
  const URL = 'https://www.google.com';

  //Adjustable strictness level from 0 to 2. 0 is the least strict and recommended for most use cases. Higher strictness levels can increase false-positives.
  const strictness = 0;

  //custom feilds
  const additional_params = {
    strictness: strictness,
  };

  const ipqs = new IPQS();
  ipqs.malicious_url_scanner_api(URL, additional_params).then((result) => {
    if ('success' in result && result['success'] === true) {
      console.log(result);
    }
  });

  return <div></div>;
};

export default Test;
