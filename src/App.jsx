import { useState } from 'react'
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
  const [display, setDisplay] = useState('d-none')
  const [itemId, setItemId] = useState('')

  function handleSubmit(e, newArticle) {
    e.preventDefault()
    console.log('submit');

    setNewList([...articlelesList, {
      id: nextId++,
      title: newArticle
    }])

    setNewArticle('')

    console.log(articlelesList);

  }

  function handleDelete(id) {
    console.log('delete');
    setNewList(articlelesList.filter(item => item.id != id))

  }

  function handleEdit(id) {
    console.log('modify');
    setDisplay('d-block')
    setItemId(id)

  }

  function handleUpdate(e, newArticle) {
    e.preventDefault()
    console.log('submit');
    console.log(articlelesList);


    const updatedList = articlelesList.map(item => {

      if (item.id == itemId) {
        return {
          ...item,
          title: newArticle
        }
      } else {
        return {
          ...item
        }
      }
    })

    setNewList(updatedList)
    setNewArticle('')
    setDisplay('d-none')

    console.log(updatedList);

  }


  return (
    <>
      <div className={`edit_layout ${display}`}>
        <button onClick={() => setDisplay('d-none')}>X</button>
        <div onSubmit={e => handleUpdate(e, newArticle)} className="container">
          <form id='update-form' action="">
            <input onChange={(e) => setNewArticle(e.target.value)} value={newArticle} type="text" />
            <button type="submit" className="btn btn-primary mx-4">Save</button>
          </form>
        </div>
      </div>
      <div className="container w-50">
        {articlelesList.map(item => (
          <div key={item.id} className="article my-4">
            <ul className='row'>
              <li>
                <h3 className='col-8'>{item.title}
                  <button onClick={() => handleEdit(item.id)} className='btn btn-warning col-2 mx-4'>Edit</button>
                  <button onClick={() => handleDelete(item.id)} className='btn btn-danger col-2'>X</button>
                </h3>
              </li>
            </ul>
          </div>
        ))}
        <div className="container">
          <form id='insert-form' onSubmit={e => handleSubmit(e, newArticle)} action="">
            <input onChange={(e) => setNewArticle(e.target.value)} value={newArticle} type="text" />
            <button type="submit" className="btn btn-primary mx-4">Add</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
