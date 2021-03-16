export default class ServiceAPI {
  baseApi = `https://front-test.beta.aviasales.ru`;

  async getResponse(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const body = await response.json();
    return body;
  }

  async getSearchId() {
    const { searchId } = await this.getResponse(`${this.baseApi}/search`);
    return searchId;
  }

  async getTickets(id) {
    const response = await this.getResponse(`${this.baseApi}/tickets?searchId=${id}`);
    return response;
  }
}
