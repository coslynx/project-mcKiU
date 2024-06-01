const api = {
  fetchData: async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  },

  fetchDynamicContent: async () => {
    const dynamicContentUrl = 'https://api.example.com/dynamic-content';
    return await api.fetchData(dynamicContentUrl);
  },

  fetchSocialMediaData: async () => {
    const socialMediaUrl = 'https://api.example.com/social-media';
    return await api.fetchData(socialMediaUrl);
  },

  submitContactForm: async (formData) => {
    try {
      const contactFormUrl = 'https://api.example.com/contact';
      const response = await axios.post(contactFormUrl, formData);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return null;
    }
  },

  subscribeNewsletter: async (email) => {
    try {
      const newsletterUrl = 'https://api.example.com/newsletter';
      const response = await axios.post(newsletterUrl, { email });
      return response.data;
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      return null;
    }
  }
};

export default api;