export default class ServiceAPI {
  
  id = null;
  
  async getResponse(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const body = await response.json();
    return body;
  }
  
  async getSearchId() {
    if (!this.id) {
      const { searchId } = await this.getResponse(`https://front-test.beta.aviasales.ru/search`);
      this.id = searchId;
    }
    return this.id;
  }
  
  async receiveTickets() {
    const response = await this.getResponse(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.id}`);
    return response;
  }

}
