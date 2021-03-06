/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace blogger_v2 {
  export interface Options extends GlobalOptions { version: 'v2'; }

  /**
   * Blogger API
   *
   * API for access to the data within Blogger.
   *
   * @example
   * const google = require('googleapis');
   * const blogger = google.blogger('v2');
   *
   * @namespace blogger
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Blogger
   */
  export class Blogger {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    blogs: Resource$Blogs;
    comments: Resource$Comments;
    pages: Resource$Pages;
    posts: Resource$Posts;
    users: Resource$Users;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.blogs = new Resource$Blogs(this);
      this.comments = new Resource$Comments(this);
      this.pages = new Resource$Pages(this);
      this.posts = new Resource$Posts(this);
      this.users = new Resource$Users(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$Blog {
    /**
     * The description of this blog. This is displayed underneath the title.
     */
    description?: string;
    /**
     * The identifier for this resource.
     */
    id?: string;
    /**
     * The kind of this entry. Always blogger#blog
     */
    kind?: string;
    /**
     * The locale this Blog is set to.
     */
    locale?: any;
    /**
     * The name of this blog. This is displayed as the title.
     */
    name?: string;
    /**
     * The container of pages in this blog.
     */
    pages?: any;
    /**
     * The container of posts in this blog.
     */
    posts?: any;
    /**
     * RFC 3339 date-time when this blog was published.
     */
    published?: string;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * RFC 3339 date-time when this blog was last updated.
     */
    updated?: string;
    /**
     * The URL where this blog is published.
     */
    url?: string;
  }
  export interface Schema$BlogList {
    /**
     * The list of Blogs this user has Authorship or Admin rights over.
     */
    items?: Schema$Blog[];
    /**
     * The kind of this entity. Always blogger#blogList
     */
    kind?: string;
  }
  export interface Schema$Comment {
    /**
     * The author of this Comment.
     */
    author?: any;
    /**
     * Data about the blog containing this comment.
     */
    blog?: any;
    /**
     * The actual content of the comment. May include HTML markup.
     */
    content?: string;
    /**
     * The identifier for this resource.
     */
    id?: string;
    /**
     * Data about the comment this is in reply to.
     */
    inReplyTo?: any;
    /**
     * The kind of this entry. Always blogger#comment
     */
    kind?: string;
    /**
     * Data about the post containing this comment.
     */
    post?: any;
    /**
     * RFC 3339 date-time when this comment was published.
     */
    published?: string;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * RFC 3339 date-time when this comment was last updated.
     */
    updated?: string;
  }
  export interface Schema$CommentList {
    /**
     * The List of Comments for a Post.
     */
    items?: Schema$Comment[];
    /**
     * The kind of this entry. Always blogger#commentList
     */
    kind?: string;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;
    /**
     * Pagination token to fetch the previous page, if one exists.
     */
    prevPageToken?: string;
  }
  export interface Schema$Page {
    /**
     * The author of this Page.
     */
    author?: any;
    /**
     * Data about the blog containing this Page.
     */
    blog?: any;
    /**
     * The body content of this Page, in HTML.
     */
    content?: string;
    /**
     * The identifier for this resource.
     */
    id?: string;
    /**
     * The kind of this entity. Always blogger#page
     */
    kind?: string;
    /**
     * RFC 3339 date-time when this Page was published.
     */
    published?: string;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * The title of this entity. This is the name displayed in the Admin user
     * interface.
     */
    title?: string;
    /**
     * RFC 3339 date-time when this Page was last updated.
     */
    updated?: string;
    /**
     * The URL that this Page is displayed at.
     */
    url?: string;
  }
  export interface Schema$PageList {
    /**
     * The list of Pages for a Blog.
     */
    items?: Schema$Page[];
    /**
     * The kind of this entity. Always blogger#pageList
     */
    kind?: string;
  }
  export interface Schema$Post {
    /**
     * The author of this Post.
     */
    author?: any;
    /**
     * Data about the blog containing this Post.
     */
    blog?: any;
    /**
     * The content of the Post. May contain HTML markup.
     */
    content?: string;
    /**
     * The identifier of this Post.
     */
    id?: string;
    /**
     * The kind of this entity. Always blogger#post
     */
    kind?: string;
    /**
     * The list of labels this Post was tagged with.
     */
    labels?: string[];
    /**
     * RFC 3339 date-time when this Post was published.
     */
    published?: string;
    /**
     * The container of comments on this Post.
     */
    replies?: any;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * The title of the Post.
     */
    title?: string;
    /**
     * RFC 3339 date-time when this Post was last updated.
     */
    updated?: string;
    /**
     * The URL where this Post is displayed.
     */
    url?: string;
  }
  export interface Schema$PostList {
    /**
     * The list of Posts for this Blog.
     */
    items?: Schema$Post[];
    /**
     * The kind of this entity. Always blogger#postList
     */
    kind?: string;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken?: string;
    /**
     * Pagination token to fetch the previous page, if one exists.
     */
    prevPageToken?: string;
  }
  export interface Schema$User {
    /**
     * Profile summary information.
     */
    about?: string;
    /**
     * The container of blogs for this user.
     */
    blogs?: any;
    /**
     * The timestamp of when this profile was created, in seconds since epoch.
     */
    created?: string;
    /**
     * The display name.
     */
    displayName?: string;
    /**
     * The identifier for this User.
     */
    id?: string;
    /**
     * The kind of this entity. Always blogger#user
     */
    kind?: string;
    /**
     * This user&#39;s locale
     */
    locale?: any;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * The user&#39;s profile page.
     */
    url?: string;
  }


  export class Resource$Blogs {
    root: Blogger;
    constructor(root: Blogger) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * blogger.blogs.get
     * @desc Gets one blog by id.
     * @alias blogger.blogs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId The ID of the blog to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Blogs$Get,
        options?: MethodOptions): AxiosPromise<Schema$Blog>;
    get(params: Params$Resource$Blogs$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Blog>,
        callback: BodyResponseCallback<Schema$Blog>): void;
    get(params: Params$Resource$Blogs$Get,
        callback: BodyResponseCallback<Schema$Blog>): void;
    get(callback: BodyResponseCallback<Schema$Blog>): void;
    get(paramsOrCallback?: Params$Resource$Blogs$Get|
        BodyResponseCallback<Schema$Blog>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Blog>,
        callback?: BodyResponseCallback<Schema$Blog>):
        void|AxiosPromise<Schema$Blog> {
      let params = (paramsOrCallback || {}) as Params$Resource$Blogs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Blogs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/blogger/v2/blogs/{blogId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Blog>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Blog>(parameters);
      }
    }
  }

  export interface Params$Resource$Blogs$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the blog to get.
     */
    blogId?: string;
  }


  export class Resource$Comments {
    root: Blogger;
    constructor(root: Blogger) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * blogger.comments.get
     * @desc Gets one comment by id.
     * @alias blogger.comments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId ID of the blog to containing the comment.
     * @param {string} params.commentId The ID of the comment to get.
     * @param {string} params.postId ID of the post to fetch posts from.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Comments$Get,
        options?: MethodOptions): AxiosPromise<Schema$Comment>;
    get(params: Params$Resource$Comments$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback: BodyResponseCallback<Schema$Comment>): void;
    get(params: Params$Resource$Comments$Get,
        callback: BodyResponseCallback<Schema$Comment>): void;
    get(callback: BodyResponseCallback<Schema$Comment>): void;
    get(paramsOrCallback?: Params$Resource$Comments$Get|
        BodyResponseCallback<Schema$Comment>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Comment>,
        callback?: BodyResponseCallback<Schema$Comment>):
        void|AxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/blogger/v2/blogs/{blogId}/posts/{postId}/comments/{commentId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['blogId', 'postId', 'commentId'],
        pathParams: ['blogId', 'commentId', 'postId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }


    /**
     * blogger.comments.list
     * @desc Retrieves the comments for a blog, possibly filtered.
     * @alias blogger.comments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId ID of the blog to fetch comments from.
     * @param {boolean=} params.fetchBodies Whether the body content of the comments is included.
     * @param {integer=} params.maxResults Maximum number of comments to include in the result.
     * @param {string=} params.pageToken Continuation token if request is paged.
     * @param {string} params.postId ID of the post to fetch posts from.
     * @param {string=} params.startDate Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Comments$List, options?: MethodOptions):
        AxiosPromise<Schema$CommentList>;
    list(
        params: Params$Resource$Comments$List,
        options: MethodOptions|BodyResponseCallback<Schema$CommentList>,
        callback: BodyResponseCallback<Schema$CommentList>): void;
    list(
        params: Params$Resource$Comments$List,
        callback: BodyResponseCallback<Schema$CommentList>): void;
    list(callback: BodyResponseCallback<Schema$CommentList>): void;
    list(
        paramsOrCallback?: Params$Resource$Comments$List|
        BodyResponseCallback<Schema$CommentList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CommentList>,
        callback?: BodyResponseCallback<Schema$CommentList>):
        void|AxiosPromise<Schema$CommentList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/blogger/v2/blogs/{blogId}/posts/{postId}/comments')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CommentList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommentList>(parameters);
      }
    }
  }

  export interface Params$Resource$Comments$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of the blog to containing the comment.
     */
    blogId?: string;
    /**
     * The ID of the comment to get.
     */
    commentId?: string;
    /**
     * ID of the post to fetch posts from.
     */
    postId?: string;
  }
  export interface Params$Resource$Comments$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of the blog to fetch comments from.
     */
    blogId?: string;
    /**
     * Whether the body content of the comments is included.
     */
    fetchBodies?: boolean;
    /**
     * Maximum number of comments to include in the result.
     */
    maxResults?: number;
    /**
     * Continuation token if request is paged.
     */
    pageToken?: string;
    /**
     * ID of the post to fetch posts from.
     */
    postId?: string;
    /**
     * Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
     */
    startDate?: string;
  }


  export class Resource$Pages {
    root: Blogger;
    constructor(root: Blogger) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * blogger.pages.get
     * @desc Gets one blog page by id.
     * @alias blogger.pages.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId ID of the blog containing the page.
     * @param {string} params.pageId The ID of the page to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Pages$Get,
        options?: MethodOptions): AxiosPromise<Schema$Page>;
    get(params: Params$Resource$Pages$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Page>,
        callback: BodyResponseCallback<Schema$Page>): void;
    get(params: Params$Resource$Pages$Get,
        callback: BodyResponseCallback<Schema$Page>): void;
    get(callback: BodyResponseCallback<Schema$Page>): void;
    get(paramsOrCallback?: Params$Resource$Pages$Get|
        BodyResponseCallback<Schema$Page>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Page>,
        callback?: BodyResponseCallback<Schema$Page>):
        void|AxiosPromise<Schema$Page> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/blogger/v2/blogs/{blogId}/pages/{pageId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['blogId', 'pageId'],
        pathParams: ['blogId', 'pageId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Page>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Page>(parameters);
      }
    }


    /**
     * blogger.pages.list
     * @desc Retrieves pages for a blog, possibly filtered.
     * @alias blogger.pages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId ID of the blog to fetch pages from.
     * @param {boolean=} params.fetchBodies Whether to retrieve the Page bodies.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Pages$List, options?: MethodOptions):
        AxiosPromise<Schema$PageList>;
    list(
        params: Params$Resource$Pages$List,
        options: MethodOptions|BodyResponseCallback<Schema$PageList>,
        callback: BodyResponseCallback<Schema$PageList>): void;
    list(
        params: Params$Resource$Pages$List,
        callback: BodyResponseCallback<Schema$PageList>): void;
    list(callback: BodyResponseCallback<Schema$PageList>): void;
    list(
        paramsOrCallback?: Params$Resource$Pages$List|
        BodyResponseCallback<Schema$PageList>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$PageList>,
        callback?: BodyResponseCallback<Schema$PageList>):
        void|AxiosPromise<Schema$PageList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/blogger/v2/blogs/{blogId}/pages')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PageList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PageList>(parameters);
      }
    }
  }

  export interface Params$Resource$Pages$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of the blog containing the page.
     */
    blogId?: string;
    /**
     * The ID of the page to get.
     */
    pageId?: string;
  }
  export interface Params$Resource$Pages$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of the blog to fetch pages from.
     */
    blogId?: string;
    /**
     * Whether to retrieve the Page bodies.
     */
    fetchBodies?: boolean;
  }


  export class Resource$Posts {
    root: Blogger;
    constructor(root: Blogger) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * blogger.posts.get
     * @desc Get a post by id.
     * @alias blogger.posts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId ID of the blog to fetch the post from.
     * @param {string} params.postId The ID of the post
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Posts$Get,
        options?: MethodOptions): AxiosPromise<Schema$Post>;
    get(params: Params$Resource$Posts$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Post>,
        callback: BodyResponseCallback<Schema$Post>): void;
    get(params: Params$Resource$Posts$Get,
        callback: BodyResponseCallback<Schema$Post>): void;
    get(callback: BodyResponseCallback<Schema$Post>): void;
    get(paramsOrCallback?: Params$Resource$Posts$Get|
        BodyResponseCallback<Schema$Post>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Post>,
        callback?: BodyResponseCallback<Schema$Post>):
        void|AxiosPromise<Schema$Post> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/blogger/v2/blogs/{blogId}/posts/{postId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['blogId', 'postId'],
        pathParams: ['blogId', 'postId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Post>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Post>(parameters);
      }
    }


    /**
     * blogger.posts.list
     * @desc Retrieves a list of posts, possibly filtered.
     * @alias blogger.posts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.blogId ID of the blog to fetch posts from.
     * @param {boolean=} params.fetchBodies Whether the body content of posts is included.
     * @param {integer=} params.maxResults Maximum number of posts to fetch.
     * @param {string=} params.pageToken Continuation token if the request is paged.
     * @param {string=} params.startDate Earliest post date to fetch, a date-time with RFC 3339 formatting.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Posts$List, options?: MethodOptions):
        AxiosPromise<Schema$PostList>;
    list(
        params: Params$Resource$Posts$List,
        options: MethodOptions|BodyResponseCallback<Schema$PostList>,
        callback: BodyResponseCallback<Schema$PostList>): void;
    list(
        params: Params$Resource$Posts$List,
        callback: BodyResponseCallback<Schema$PostList>): void;
    list(callback: BodyResponseCallback<Schema$PostList>): void;
    list(
        paramsOrCallback?: Params$Resource$Posts$List|
        BodyResponseCallback<Schema$PostList>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$PostList>,
        callback?: BodyResponseCallback<Schema$PostList>):
        void|AxiosPromise<Schema$PostList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Posts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Posts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/blogger/v2/blogs/{blogId}/posts')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['blogId'],
        pathParams: ['blogId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PostList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PostList>(parameters);
      }
    }
  }

  export interface Params$Resource$Posts$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of the blog to fetch the post from.
     */
    blogId?: string;
    /**
     * The ID of the post
     */
    postId?: string;
  }
  export interface Params$Resource$Posts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of the blog to fetch posts from.
     */
    blogId?: string;
    /**
     * Whether the body content of posts is included.
     */
    fetchBodies?: boolean;
    /**
     * Maximum number of posts to fetch.
     */
    maxResults?: number;
    /**
     * Continuation token if the request is paged.
     */
    pageToken?: string;
    /**
     * Earliest post date to fetch, a date-time with RFC 3339 formatting.
     */
    startDate?: string;
  }


  export class Resource$Users {
    root: Blogger;
    blogs: Resource$Users$Blogs;
    constructor(root: Blogger) {
      this.root = root;
      this.getRoot.bind(this);
      this.blogs = new Resource$Users$Blogs(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * blogger.users.get
     * @desc Gets one user by id.
     * @alias blogger.users.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId The ID of the user to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Users$Get,
        options?: MethodOptions): AxiosPromise<Schema$User>;
    get(params: Params$Resource$Users$Get,
        options: MethodOptions|BodyResponseCallback<Schema$User>,
        callback: BodyResponseCallback<Schema$User>): void;
    get(params: Params$Resource$Users$Get,
        callback: BodyResponseCallback<Schema$User>): void;
    get(callback: BodyResponseCallback<Schema$User>): void;
    get(paramsOrCallback?: Params$Resource$Users$Get|
        BodyResponseCallback<Schema$User>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$User>,
        callback?: BodyResponseCallback<Schema$User>):
        void|AxiosPromise<Schema$User> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/blogger/v2/users/{userId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$User>(parameters, callback);
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the user to get.
     */
    userId?: string;
  }

  export class Resource$Users$Blogs {
    root: Blogger;
    constructor(root: Blogger) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * blogger.users.blogs.list
     * @desc Retrieves a list of blogs, possibly filtered.
     * @alias blogger.users.blogs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Users$Blogs$List, options?: MethodOptions):
        AxiosPromise<Schema$BlogList>;
    list(
        params: Params$Resource$Users$Blogs$List,
        options: MethodOptions|BodyResponseCallback<Schema$BlogList>,
        callback: BodyResponseCallback<Schema$BlogList>): void;
    list(
        params: Params$Resource$Users$Blogs$List,
        callback: BodyResponseCallback<Schema$BlogList>): void;
    list(callback: BodyResponseCallback<Schema$BlogList>): void;
    list(
        paramsOrCallback?: Params$Resource$Users$Blogs$List|
        BodyResponseCallback<Schema$BlogList>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$BlogList>,
        callback?: BodyResponseCallback<Schema$BlogList>):
        void|AxiosPromise<Schema$BlogList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Blogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Blogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/blogger/v2/users/{userId}/blogs')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BlogList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BlogList>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Blogs$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * ID of the user whose blogs are to be fetched. Either the word 'self'
     * (sans quote marks) or the user's profile identifier.
     */
    userId?: string;
  }
}
