
export async function getAllPosts(){
    // This is where out data fetching code will go
    const posts = postsGenerator()
    return posts

}

export async function getPostByUri(uri){
    // This is where out data fetching code will go
    const posts = postsGenerator()
    const post = posts.filter(post => post.uri === `/${uri}`)[0]
    const response = {
      data: {
        post
      }
    }
    return response
}

function postsGenerator(){
    return [
        {
          title:"Blog Post Title 1",
          content: loremIpsum,
          uri: "/title-1",
          author: {
            node: {
              firstName: "Jeff",
              lastName: "Everhart"
            }
          },
          date: "02/31/2022"
        }, 
        {
          title:"Blog Post Title 2",
          content: loremIpsum,
          uri: "/title-2",
          author: {
            node: {
              firstName: "Jeff",
              lastName: "Everhart"
            }
          },
          date: "02/31/2022"
        }, 
        {
          title:"Blog Post Title 3",
          content: loremIpsum,
          uri: "/title-3",
          author: {
            node: {
              firstName: "Jeff",
              lastName: "Everhart"
            }
          },
          date: "02/31/2022"
        }, 
        {
          title:"Blog Post Title 4",
          content: loremIpsum,
          uri: "/title-4",
          author: {
            node: {
              firstName: "Jeff",
              lastName: "Everhart"
            }
          },
          date: "02/31/2022"
        }
      ]
}

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nunc mattis enim ut tellus elementum sagittis vitae. Morbi tristique senectus et netus et. Amet est placerat in egestas. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Blandit libero volutpat sed cras ornare arcu dui vivamus. Augue neque gravida in fermentum et sollicitudin. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Nulla porttitor massa id neque aliquam vestibulum morbi.\n\nAliquet nec ullamcorper sit amet risus. Ut aliquam purus sit amet luctus venenatis lectus magna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Consectetur lorem donec massa sapien faucibus et molestie ac. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Sit amet facilisis magna etiam tempor. Ullamcorper sit amet risus nullam eget felis eget nunc lobortis. Et tortor consequat id porta nibh venenatis cras sed felis. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Ut aliquam purus sit amet luctus venenatis. Nam libero justo laoreet sit amet cursus sit. Faucibus et molestie ac feugiat sed lectus. Sagittis id consectetur purus ut. Ut diam quam nulla porttitor massa id neque. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Elementum integer enim neque volutpat ac. Scelerisque felis imperdiet proin fermentum. Eget gravida cum sociis natoque penatibus et. Nec sagittis aliquam malesuada bibendum arcu vitae.\nMattis pellentesque id nibh tortor. Tristique risus nec feugiat in fermentum. Amet massa vitae tortor condimentum lacinia. Pharetra convallis posuere morbi leo urna. Morbi tincidunt ornare massa eget egestas purus viverra. Amet mauris commodo quis imperdiet massa tincidunt nunc. Faucibus nisl tincidunt eget nullam non nisi. Risus nullam eget felis eget. Pretium lectus quam id leo in vitae. Erat pellentesque adipiscing commodo elit. Non nisi est sit amet."