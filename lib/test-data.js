
export async function getAllPosts(){
    // This is where out data fetching code will go
    const posts = postsGenerator()
    return posts

}

export async function getPostByUri(uri){
    // This is where out data fetching code will go
    const posts = postsGenerator()
    const post = posts.filter(post => post.uri === `/${uri}`)[0]
    return post
}

function postsGenerator(){
    return [
        {
          title:"Blog Post Title 1",
          content: "Here is some blog post content",
          uri: "/title-1",
          author: "Jeff Everhart",
          date: "02/31/2022"
        }, 
        {
          title:"Blog Post Title 2",
          content: "Here is some blog post content",
          uri: "/title-2",
          author: "Jeff Everhart",
          date: "02/31/2022"
        }, 
        {
          title:"Blog Post Title 3",
          content: "Here is some blog post content",
          uri: "/title-3",
          author: "Jeff Everhart",
          date: "02/31/2022"
        }, 
        {
          title:"Blog Post Title 4",
          content: "Here is some blog post content",
          uri: "/title-4",
          author: "Jeff Everhart",
          date: "02/31/2022"
        }
      ]
}