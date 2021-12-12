import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [images, setImages] = useState([]);

  // const getArticle = async () => {
  //   const url = `http://127.0.0.1:3001/article/${id}`;
  //   await fetch(url).then(async (res) => {
  //     const data = await res.json();
  //     setArticle(data.article);
  //     console.log(data.article);
  //   });
  // };

  // const getImages = async (paths) => {
  //   const urls = paths.map(({ path }) => path);
  //   fetch(`http://127.0.0.1:3001/image?imagePath=${urls}`)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       setImages(res.images);
  //     });
  // };

  // useEffect(() => {
  //   getArticle();
  // }, []);

  // useEffect(() => {
  //   if (article && article.imagesFormatted && article.imagesFormatted.length) {
  //     getImages(article.imagesFormatted);
  //   }
  // }, [article]);

  if (!article) {
    return <div>loading...</div>;
  }

  // "id": "1",
  //     "title": "Welcome to Joomla!",
  //     "title_alias": "Welcome",
  //     "introtext": "If you've read anything at all about Content Management Systems (CMS), you'll probably know at least three things: CMS are the most exciting way to do business, CMS can be really, I mean <i>really</i>, complicated and lastly Portals are absolutely, outrageously, often <i>unaffordably</i> expensive. <br /><br />{mosimage}Joomla! is set to change all that ... Joomla! is different from the normal models for portal software. For a start, it's not complicated. Joomla! has been developed for the masses. It's licensed under the GNU/GPL license, easy to install and administer and reliable. Joomla! doesn't even require the user or administrator of the system to know HTML to operate it once it's up and running.",
  //     "fulltext": "<h4><font color=\"#ff6600\">Joomla! features:</font></h4>\r\n<ul>\r\n<li>Completely database driven site engines </li>\r\n<li>News, products or services sections fully editable and manageable</li> \r\n<li>Topics sections can be added to by contributing authors </li>\r\n<li>Fully customisable layouts including left, center and right menu boxes </li>\r\n<li>Browser upload of images to your own library for use anywhere in the site </li>\r\n<li>Dynamic Forum/Poll/Voting booth for on-the-spot results </li>\r\n<li>Runs on Linux, FreeBSD, MacOSX server, Solaris and AIX \r\n</li></ul>\r\n<h4>Extensive Administration:</h4>\r\n<ul>\r\n<li>Change order of objects including news, FAQs, articles etc. </li>\r\n<li>Random Newsflash generator </li>\r\n<li>Remote author submission module for News, Articles, FAQs and Links </li>\r\n<li>Object hierarchy - as many sections, departments, divisions and pages as you want </li>\r\n<li>Image library - store all your PNGs, PDFs, DOCs, XLSs, GIFs and JPEGs online for easy use </li>\r\n<li>Automatic Path-Finder. Place a picture and let Joomla! fix the link </li>\r\n<li>News feed manager. Choose from over 360 news feeds from around the world </li>\r\n<li>Archive manager. Put your old articles into cold storage rather than throw them out </li>\r\n<li>Email-a-friend and Print-format for every story and article </li>\r\n<li>In-line Text editor similar to Word Pad </li>\r\n<li>User editable look and feel </li>\r\n<li>Polls/Surveys - Now put a different one on each page </li>\r\n<li>Custom Page Modules. Download custom page modules to spice up your site </li>\r\n<li>Template Manager. Download templates and implement them in seconds </li>\r\n<li>Layout preview. See how it looks before going live </li>\r\n<li>Banner manager. Make money out of your site</li></ul>",
  //     "sectionid": "1",
  //     "catid": "1",
  //     "created": "2004-06-12 11:54:06",
  //     "imagesFormatted": [{ "path": "asterisk.png" }]

  return (
    <div>
      <h1>{article.title}</h1>
      <br />
      <p dangerouslySetInnerHTML={{ __html: article.introtext }} />
      <p dangerouslySetInnerHTML={{ __html: article.fulltext }} />

      {images.map((image) => (
        <img src={image} />
      ))}
    </div>
  );
};
