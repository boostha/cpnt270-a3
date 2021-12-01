# CPNT270-A3 Social Integration

### Author

David Ha

### Links

- [Github Repo](https://github.com/boostha/cpnt270-a3)
- [Netlify](https://agitated-rosalind-dbd5f0.netlify.app/)

## Market and Problem

### User Story

As a instagram blog-owner, I'd like my posts to also show on my website while being organized and clickable so that I can conveniently do everything on my phone

There are lots of facebook and instagram accounts that like to cover the events that are happening in their city. It was very easy to post a picture, description and link to help advertise the events that are going on, but it can be alot of work to post on their social media accounts then have to edit their website with the same post. My social integration solves that problem, by taking the social media post and automatically posting it on their website while organizing post by hashtags and accompanied by a link so that users can learn or read more about the post.

## Operational Integration

### Documentation
- [Instagram Basic Display API - Uses and Limitations](https://developers.facebook.com/docs/instagram-basic-display-api#legacy-ids)
- [Instagram Basic Display API - Getting Started](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)
- [Instagram Basic Display API - Access Tokens](https://developers.facebook.com/docs/instagram-basic-display-api/guides)
- [Instagram Basic Display API - Endpoint References](https://developers.facebook.com/docs/instagram-basic-display-api/reference)
- [How to create an Instagram post](https://blog.hubspot.com/marketing/how-to-post-on-instagram)
- Avaliable hashtags to use for demonstration
  - #news
  - #blog
  - #food
- **CAPTIONS**
  - In order to take full advantage of integration, please write caption in this exact order:
  - (CAPTION OR DESCRIPTION)(HASHTAGS)(WEBSITE LINK)
  - Example: *Check out this calgary event #blog https://thisisablog.com*

### Task Flow
1. Go to website and take note of current content
2. Log into Instagram account
3. Create a new Instagram post
4. Choose a picture
5. Write a caption
6. Post to Instagram
7. Refresh website to confirm content change

## Secure API Token/key
- To secure my token, I used dotenv and netlify's environment variables option
- [Dotenv Documentation](https://www.npmjs.com/package/dotenv)
- [Netlify environment variables](https://docs.netlify.com/configure-builds/environment-variables/)

## Comments
- To extend the functionality beyond your in class example, I used javascript .search and .slice functions to find links so that the picture and caption are clickable and I also used it to cut out the hashtags to make the post look more professional

## Attributions
- [Peace Bridge](https://unsplash.com/photos/4ZPrc2__Kr0) by [Denisse Leon](https://unsplash.com/@denisseleon) under the [Unsplash License](https://unsplash.com/license)
- [Central Library](https://unsplash.com/photos/0hbtMehsV2I) by [Jay H](https://unsplash.com/@captainhaja) under the [Unsplash License](https://unsplash.com/license)
- [Calgary Snow](https://unsplash.com/photos/i-gfzPOUMW4) by [Haley Truong](https://unsplash.com/@haleytruong) under the [Unsplash License](https://unsplash.com/license)
- [Ice Cream](https://unsplash.com/photos/L1kI8iVH7dM) by [Haley Truong](https://unsplash.com/@haleytruong) under the [Unsplash License](https://unsplash.com/license)
- [Silver Dragon](https://unsplash.com/photos/nuAOmcjs3ZQ) by [Gurpartap Sandhu](https://unsplash.com/@gsandhu) under the [Unsplash License](https://unsplash.com/license)
- [Tony's code for axios and function](https://github.com/acidtone/instagram-netlify/blob/main/netlify/functions/photos.js)
- [Tony's code for netlify function](https://github.com/acidtone/hello-netlify-functions)
