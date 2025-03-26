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


  return (
    <>
      {articles.map(item => (
        <div className="container article">
          <ul>
            <li><h3>{item.title}</h3></li>
          </ul>
        </div>
        
      ))}
    </>
  )
}

export default App
