// jokeService.js

export const fetchJoke = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      return data.joke; // Return the joke text
    } catch (error) {
      console.error('Error fetching joke:', error);
      return null;
    }
  };
  