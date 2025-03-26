export default function Input({ newArticle, setNewArticle, handleSubmit }) {
    return (
        <div className="container">
            <form id='insert-form' onSubmit={e => handleSubmit(e, newArticle)} action="">
                <input onChange={(e) => setNewArticle(e.target.value)} value={newArticle} type="text" />
                <button type="submit" className="btn btn-primary mx-4">Add</button>
            </form>
        </div>
    )
}