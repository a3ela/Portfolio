// get for a Meduim api

const BASE_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abelsintayehu626";

const getBlogs = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error fetching the story:", error);
  }
};

export default { getBlogs };
