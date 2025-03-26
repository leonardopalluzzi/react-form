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


function App() {

  function handleSubmit(e){
    e.preventDefault()
    console.log('submit');
    
  }


  return (
    <>
    <div className="container w-50">
       {articles.map(item => (
        <div key={item.id} className="article my-4">
          <ul>
            <li><h3>{item.title}</h3></li>
          </ul>
        </div>
      ))}
      <div onSubmit={e => handleSubmit(e)} className="container">
        <form action="">
          <input type="text" />
          <button type="submit" className="btn btn-primary mx-4">Add</button>
        </form>
      </div>
    </div>
     
    </>
  )
}

export default App
