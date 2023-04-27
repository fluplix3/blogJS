async function getPosts() {
    const response = await fetch(`https://gorest.co.in/public/v2/posts?page=${getPage}`)
    const data = await response.json();
    return await data;
}

const URLPage = new URLSearchParams(window.location.search)
const getPage = URLPage.get('page')

const posts = await getPosts();

function postItems(posts) {
    const list = document.createElement('ul')
    for (let i = 0; i < 10; i++) {
        const listItem = document.createElement('li')
        const link = document.createElement('a')

        listItem.style.backgroundColor = '#d7d7d7'
        link.href = `blogPost.html?id=${posts[i].id}`
        link.textContent = posts[i].title;

        listItem.append(link)
        list.append(listItem)
        document.body.append(list)
    }
}

postItems(posts);

function createPagination() {
    const list = document.createElement('ul')
    list.style.display = 'flex'
    for (let i = 1; i < 11; i++) {
        const listItem = document.createElement('li')
        const itemPagination = document.createElement('a')

        itemPagination.href = `index.html?page=${i}`
        itemPagination.textContent = `${i}`

        listItem.append(itemPagination)
        list.append(listItem)
        document.body.append(list)
    }
}

createPagination()







