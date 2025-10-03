import axios from "axios";

export const getDataCard = {
  getData: async () => {
    try {
      const response = await axios.get(
        "https://t-core.fit-hub.pro/Test/GetTariffs"
      );
      return response.data;
    } catch (error) {
      console.error("API error:", error);
      return [];
    }
  },
};
