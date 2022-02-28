const api = {
  getUsers: async function() {
    const res = await fetch('https://randomuser.me/api/?results=15', {
      method: 'GET'
    });

    return await res.json();
  }
};

export default api;