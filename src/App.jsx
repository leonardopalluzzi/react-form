import Articles from './components/Articles'

const articles = [
  {
    id: 1,
    title: 'article 1',
    content: 'artcile 1 content',
    author: 'article 1 author'
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
      <header>
        <div className="container text-center py-5">
          <h1>Articles</h1>
        </div>
      </header>
      <div className="container_articles position-relative">
        <Articles data={articles} />
      </div>

    </>
  )
}

export default App
