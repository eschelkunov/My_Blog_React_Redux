import { homeFunc } from './templates/home';
import { newPostTemplate } from './templates/newPost';
import { singlePageFunc } from './templates/singlePost';
import { initListeners } from './src/scripts';

// Router + History API
const bodyContent = document.body;

function routes(id) {
  return {
    '/': homeFunc,
    '/posts': homeFunc,
    '/new': newPostTemplate,
    [`/posts/${id}`]: singlePageFunc(id),
  };
}

function render(pathName) {
  const { route, params: id } = getRoute();
  const result = routes(id);
  switch (pathName) {
    case '/':
    case '/posts':
      result[pathName].then((data) => {
        bodyContent.innerHTML = data.posts;
        handleRoute();
      });
      break;
    case `/posts/${id}`:
      result[pathName].then((data) => {
        bodyContent.innerHTML = data.singlePost;
        handleRoute();
      });
      break;
    case '/new':
      bodyContent.innerHTML = result[pathName];
      handleRoute();
      break;
    default:
      console.log('Invalid URL!');
  }
}

onpopstate = () => {
  console.log('onpopstate:');
  render(location.pathname);
};

export const onNavItemClick = (pathName) => {
  history.pushState({}, pathName, location.origin + pathName);
  render(pathName);
};

function getRoute() {
  const path = location.pathname;
  const [route] = path.match(/[^\d]+/g);
  let id = null;
  if (path.match(/\d+/g)) {
    [id] = path.match(/\d+/g);
  }
  return { route, params: id };
}

function handleRoute() {
  const { route, params } = getRoute();
  // if no id in URL then it's not single page
  if (!params) {
    switch (route) {
      case '/':
      case '/posts':
        initListeners('home');
        console.log('home page listeners are active');
        break;
      case '/new':
        initListeners('new');
        console.log('new page listeners are active');
        break;
    }
  } else {
    initListeners('single');
    console.log('single page listeners are active');
  }
}

render(location.pathname);
