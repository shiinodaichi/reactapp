import React, {useState, useEffect} from 'react';


const Booklist = props => {
    const [bookData, setBookdata] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookdata(response)); 
    },[props])
    
    return(
        <div className="booklist">
            <ul className="booklist-item">
                {
                    bookData === null
                    ? <p>now loading...</p>
                    :bookData.data.items.map((x,index) => 
                        <li key={index}>
                            <div className="thumbnail">
                                {
                                    x.volumeInfo.readingModes.image === false
                                    ? <div className="noimage"><img src={"../img/noimage.png"}></img><p>no image</p></div>
                                    : <img src={
                                        x.volumeInfo.imageLinks.smallThumbnail 
                                        }>
                                        </img>
                                } 
                            </div>
                            <div className="datalist">
                                <p className="title">{x.volumeInfo.title}</p>
                                <p className="author">{x.volumeInfo.authors}</p>
                                <p className="description">{x.volumeInfo.description}</p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
export default Booklist;
//ページ全体がapp
//booklistが子
//propsはデータの入れ物となるオブジェクト