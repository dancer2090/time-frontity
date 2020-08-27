import { config } from "dotenv";
config();

const settings = [
{
  "name": "time-frontity-uk",
  "match": !!process.env.LOCAL ? [".*"+process.env.SITE_URL2+"\/uk(\/.*)?$"] : [".*"+process.env.SITE_URL_LOCAL+"\/uk(\/.*)?$"],
  "state": {
    "frontity": {
      recaptchaKey: process.env.RECAPTCHA_KEY,
      isLocal: !!process.env.LOCAL,
      "adminUrl": process.env.ADMIN_URL,
      "url": process.env.SITE_URL,
      "title": "Time",
      "description": "WordPress installation for Frontity development",
      "replaceImageUrl": !!process.env.LOCAL ? [] : [process.env.ADMIN_URL, process.env.SITE_URL]
    },
    "theme":{
      "lang": "ru"
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
          "api": "https://time-admin.webbuilder.in.ua/wp-json",
          "homepage": '/',
          "postsPage": '/blog',
          params: {
            per_page: 10,
            type: ["post", "page"]
          },
          postTypes: [
            {
              type: "video", // type slug
              endpoint: "video", // REST API endpoint
              archive: "/video" // link where this custom posts are listed
            },
            {
              type: "images", // type slug
              endpoint: "images", // REST API endpoint
              archive: "/images" // link where this custom posts are listed
            },
            {
              type: "persona", // type slug
              endpoint: "persona", // REST API endpoint
              archive: "/persona" // link where this custom posts are listed
            },
            {
              type: "authors", // type slug
              endpoint: "authors", // REST API endpoint
              archive: "/authors" // link where this custom posts are listed
            }
          ],
          taxonomies: [
            {
              taxonomy: "post_tag",
              endpoint: "tag",
              postTypeEndpoint: "post",
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
}];

export default settings;
