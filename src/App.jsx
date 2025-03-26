import {useState} from 'react'
const articles = [
  {
    id: 1,
    title: 'article 1',
    content: 'artcile 1 content',
    author: 'article 1 author'
  },
  {
    id: 2,
    title: 'article 2',
    content: 'artcile 2 content',
    author: 'article 2 author'
  },
  {
    id: 3,
    title: 'article 3',
    content: 'artcile 3 content',
    author: 'article 3 author'
  }
]

let nextId = 1;

articles.forEach(item => {
  nextId++
})
console.log(nextId);



function App() {

  const [newArticle, setNewArticle] = useState('')
  const [articlelesList, setNewList] = useState(articles)

  function handleSubmit(e, newArticle){
    e.preventDefault()
    console.log('submit');

    setNewList([...articlelesList, {
      id: nextId++,
      title: newArticle
    }])

    setNewArticle('')

    console.log(articlelesList);
    
    
  }


  return (
    <>
    <div className="container w-50">
       {articlelesList.map(item => (
        <div key={item.id} className="article my-4">
          <ul>
            <li><h3>{item.title}</h3></li>
          </ul>
        </div>
      ))}
      <div onSubmit={e => handleSubmit(e, newArticle)} className="container">
        <form action="">
          <input onChange={(e) => setNewArticle(e.target.value)} value={newArticle} type="text" />
          <button type="submit" className="btn btn-primary mx-4">Add</button>
        </form>
      </div>
    </div>
     
    </>
  )
}

export default App
