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
          "homepage": '/main',
          "postsPage": '/blog',
          params: {
            per_page: 10,
            type: ["post", "page"]
          },
          postTypes: [
            {
              type: "teammembers", // type slug
              endpoint: "teammembers", // REST API endpoint
              archive: "/teammembers" // link where this custom posts are listed
            }
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
