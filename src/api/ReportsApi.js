class ReportsApi {
  static getAllReports() {
    const request = new Request(
      "https://bitbucket.org/purplestudios/purple-front-end-test/raw/bf4bde7cec14ad4472b91cf1b20f6ff0ae063f1c/mock-data.json",
      {
        method: "GET"
      }
    );

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default ReportsApi;
