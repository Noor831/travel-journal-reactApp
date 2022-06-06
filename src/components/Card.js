import LocationOnIcon from "@mui/icons-material/LocationOn";

/*
TODO: 
1. Add googleMapsUrl to href and set target to "_blank" 
*/

export default function Card(props) {
    console.log(props);
    return (
        <a href="#">
            <article className="card-container">
                <img src={props.imageUrl} className="card-img" alt="location pic" />

                <div className="card-info">
                    <div className="card-location">
                        <LocationOnIcon
                            className="location-icon"
                            sx={{ fontSize: 12 }}
                        />
                        <p>{props.location}</p>
                    </div>

                    <h1 className="card-title">{props.title}</h1>
                    <p className="card-dates">
                        {props.startDate} - {props.endDate}
                    </p>
                    <p className="card-description">{props.description}</p>
                </div>
            </article>
        </a>
    );
}
