import { openPost } from '../models';

const promiseIDs = new Map();

export const singlePageFunc = (id) => {
  if (location.pathname.match(/\d+/g)) {
    let obj = null;
    if (promiseIDs.has(id)) {
      obj = promiseIDs.get(id);
    } else {
      obj = new Promise((resolve) => {
        promiseIDs.set(id, `promise${id}`);
        const [postId] = location.pathname.match(/\d+/g);
        openPost(postId).then((data) => {
          resolve({ singlePost: singlePostTemplate(data) });
          promiseIDs.delete(id);
        });
      });
    }
    return obj;
  }
};

const singlePostTemplate = data => `
<div class="container">
      <div class="menu">
        <a href="/posts" id="btn-back-to-posts"><i class="fas fa-long-arrow-alt-left"></i> Back to Posts</a>
        <a id="btn-edt" href="#edit" ><i class="fas fa-edit"></i> Edit Post</a>
        <a id="btn-rm" href="#remove"><i class="fas fa-trash-alt"></i> Remove Post</a>
      </div>
      <header>
        <h1>Single post page</h1>
      </header>
      <section class="main">
        <div class="post" id="edit-post">
          <h1>
            ${data.post_title}
          </h1>
          <p>
            ${data.post_content}
          </p>
          <div class="post-info">
            <div class="single-post-date">${new Date(
    Date.parse(data.createdAt),
  ).toDateString()}</div>
            <i class="far fa-comments"></i>
            <span>3</span>
            <i class="far fa-heart"></i>
            <span>5</span>
          </div>
        </div>
        <div class="options" id="post-options">
          <a href="#save" class="button" id="save-post">Save</a>
          <a href="#cancel" class="button" id="cancel-post">Cancel</a>
        </div>
        <!-- Modal section -->
        <div class="bg-modal">
          <div class="modal-content">
            <span class="modal-message"></span>
            <div class="options">
              <a href="#" class="button" id="agree">yes</a>
              <a href="#" class="button" id="disagree">no</a>
            </div>
          </div>
        </div>
      </section>
    </div>
`;
