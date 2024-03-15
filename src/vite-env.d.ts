/// <reference types="vite/client" />

interface Photo {
    id: string;
    name: string;
    likes: number;
    urls: {
      small: string;
    };
    username: {
      username:string
    }
    alt_description: string;
  }