async function getPosts() {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${getId}`)
    const data = await response.json();
    return await data;
}

async function getComments() {
    const response = await fetch(`https://gorest.co.in/public/v2/comments?post_id=${getId}`)
    const data = await response.json()
    return await data;
}

const URLId = new URLSearchParams(window.location.search)
const getId = URLId.get('id')
const posts = await getPosts(getId);
const comments = await getComments(getId);

function post(posts, comments) {
    const titlePost = document.createElement('h2')
    const post = document.createElement('p')
    
    titlePost.textContent = posts.title
    post.textContent = posts.body
    
    document.body.append(titlePost)
    document.body.append(post)

    for (let i = 0; i < comments.length; i++) {
        const container =document.createElement('div')
        const name = document.createElement('p')
        const comment = document.createElement('p')

        container.style.backgroundColor = '#d7d7d7'
        name.textContent = comments[i].name
        name.style.fontWeight = 'bold'
        comment.textContent = comments[i].body

        container.append(name)
        container.append(comment)
        document.body.append(container)
    }
}

post(posts, comments);
