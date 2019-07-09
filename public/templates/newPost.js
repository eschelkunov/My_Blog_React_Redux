import { onNavItemClick } from '../router';

export const newPostTemplate = ` 
<div class="container">
      <div class="menu">
        <a href="/posts" id="btn-back-to-posts"><i class="fas fa-long-arrow-alt-left"></i> Back to Posts</a>
      </div>
      <header>
        <h1>Please fill in the fields below to add the post:</h1>
      </header>
      <section class="main">
        <div class="form-style">
          <ul>
            <li>
              <input
                id="name"
                type="text"
                name="field1"
                class="field-style field-split align-left"
                placeholder="Name"
              />
              <input
                id="email"
                type="email"
                name="field2"
                class="field-style field-split align-right"
                placeholder="Email"
              />
            </li>
            <li>
              <input
                id="title"
                type="text"
                name="field3"
                class="field-style field-full align-none"
                placeholder="Title"
              />
            </li>
            <li>
              <textarea
                id="content"
                name="field5"
                class="field-style"
                placeholder="Post something here.."
              ></textarea>
            </li>
            <li>
              <div id="submit">Post</div>
            </li>
          </ul>
        </div>
      </section>
      <footer>Copyright Evgeniy Schelkunov</footer>
    </div>
`;
