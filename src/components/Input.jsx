export default function Input({ newArticle, setNewArticle, handleSubmit, setNewContent, newContent }) {
    return (
        <div className="container">
            <form className='insert_form d-flex flex-column my-5' onSubmit={e => handleSubmit(e, newArticle, newContent)} action="">
                <input
                    className="col-8 form-control"
                    onChange={(e) => setNewArticle(e.target.value)}
                    value={newArticle}
                    type="text"
                    placeholder="Insert the article's title"
                    required />
                <input
                    onChange={(e) => setNewContent(e.target.value)}
                    value={newContent}
                    className="my-4 form-control"
                    name=""
                    id=""
                    placeholder="Insert your article body"
                    required />
                <button type="submit" className="col-2 btn btn-primary my-3">Add</button>
            </form>
        </div>
    )
}