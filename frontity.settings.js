import { config } from "dotenv";
config();

const settings = {
  "name": "time-frontity",
  "state": {
    "frontity": {
      recaptchaKey: process.env.RECAPTCHA_KEY,
      isLocal: !!process.env.LOCAL,
      "adminUrl": process.env.ADMIN_URL,
      "url": process.env.SITE_URL,
      "title": "Sirinsoftware",
      "description": "WordPress installation for Frontity development",
      "replaceImageUrl": !!process.env.LOCAL ? [] : [process.env.ADMIN_URL, process.env.SITE_URL]
    } 
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "recaptchaToken": null,
          "menu": {},
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://demo.wp-api.org/wp-json/",
          "homepage": '/home',
          "postsPage": '/blog',
          params: {
            per_page: 10,
            type: ["post", "page", "teammembers", "portfolio"]
          },
          postTypes: [
            {
              type: "teammembers", // type slug
              endpoint: "teammembers", // REST API endpoint
              archive: "/teammembers" // link where this custom posts are listed
            },
            {
              type: "portfolio", // type slug
              endpoint: "portfolio", // REST API endpoint
              archive: "/case-studies" // link where this custom posts are listed
            }
          ],
          taxonomies: [
            {
              taxonomy: "case-studies-cat",
              endpoint: "portfolio-cat",
              postTypeEndpoint: "portfolio",
              params: {
                per_page: 10,
                _embed: true,
              },
            },
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
  ]
};

export default settings;
