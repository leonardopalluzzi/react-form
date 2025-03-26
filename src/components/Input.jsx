export default function Input({ newArticle, setNewArticle, handleSubmit }) {
    return (
        <div className="container">
            <form id='insert_form' onSubmit={e => handleSubmit(e, newArticle)} action="">
                <input
                    className="col-8"
                    onChange={(e) => setNewArticle(e.target.value)}
                    value={newArticle} type="text"
                    placeholder="Insert the article's title" />
                <button type="submit" className="col-2 btn btn-primary mx-4">Add</button>
            </form>
        </div>
    )
}