export const api = {
  async getSearchID() {
    try {
      let res = await fetch('https://aviasales-test-api.kata.academy/search');
      if (!res.ok) return false;
      res = await res.json();
      return res.searchId;
    } catch {
      return false;
    }
  },
  async getTickets(id) {
    try {
      let res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
      if (!res.ok) return false;
      return await res.json();
    } catch {
      return false;
    }
  },
};
