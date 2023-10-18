
export default function ProfileCard({tittle, handle, image, description}) {
    return (
        <div className = "card">
            <div className="card-image">
            <figure className="image is-1by1">
            <img src={image} alt="pda logo"/>
                </figure>    
            </div>


           <div className="card-content">
            <div className="media-content">
                <p className="tittle is-4">{tittle}</p>
                <div className="subtitle is-6">{handle}</div>
            </div>
            <div className="content">
                {description}
            </div>
        </div>
    </div>
    )
}