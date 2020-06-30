import axios from "axios";

// fetch breeds

//
export const fetchBreeds = async () => {
  try {
    const r = await axios.get("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": "006b067d-6a37-4786-8052-8a81b43d0235"
      }
    });

    return r.data;
  } catch (err) {
    console.log(err);
  }
};

export const tries = () => {
  return "george ";
};
