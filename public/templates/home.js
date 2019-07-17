import { getElementById, findElement } from '../src/scripts';
import { getAllPosts } from '../models';

export const homeFunc = new Promise((resolve) => {
  if (['/', '/posts'].includes(location.pathname)) {
    getAllPosts().then((posts) => {
      resolve({ posts: homePageTemplate(posts) });
    });
  }
});

const latestPost = post => `
<div class="latest-post media">
<div class="media-left">
  <i class="fas fa-arrow-circle-right"></i>
</div>
<div class="media-body">
  <h2 class="latest-post-header media-heading">
    <a id="l${post.id}" href="/posts/${post.id}">${post.post_title}</a>
  </h2>
</div>
</div>
`;

const singlePost = post => `
  <div class="short-post" id="${post.id}">
  <h1>${post.post_title}</h1>
  <p>
    ${post.post_content}
  </p>
  <a id="p${post.id}" href="/posts/${
  post.id
}">Continue reading <i class="fas fa-long-arrow-alt-right"></i></a>
  <div class="post-info">
    <div class="post-date">${new Date(Date.parse(post.createdAt)).toDateString()}</div>
    <i class="far fa-comments"></i>
    <span>3</span>
    <i class="far fa-heart"></i>
    <span>5</span>
  </div>
</div>
  `;

const homePageTemplate = listOfPosts => `
<div class="wrapper">  
<div class="header">
  <div class="toolbar">
    <button value="dark">dark</button>
    <button value="light">light</button>
  </div>
  <h1>Blog posts</h1>
  <h1 id="header2">Welcome to my blog...</h1>
</div>
<div class="sidebar">
  <div class="widget">
    <div class="widget blog-widget">
      <h2 class="widget-header">Latest posts(5):</h2>
      ${listOfPosts
    .slice(-5)
    .reverse()
    .map(post => latestPost(post))
    .join(' ')}
    </div>
  </div>
</div>
<div class="content">
  <div class="tabs">
    <div class="left-tab">
      <a id="posts" href="/posts"><i class="fas fa-bars"></i> Posts</a>
    </div>
    <div class="right-tab">
      <a id="new" href="/new"><i class="fas fa-plus"></i> Add new post</a
      >
    </div>
  </div>
  ${listOfPosts
    .reverse()
    .map(post => singlePost(post))
    .join(' ')}
</div>
<div class="footer">Copyright Evgeniy Schelkunov</div>
</div>
`;
