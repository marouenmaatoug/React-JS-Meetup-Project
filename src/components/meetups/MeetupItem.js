import { useContext, useState } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../user_interface/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
    const [isFavorite, setIsFavorite] = useState(favoriteCtx.itemIsFavorite(props.id));

    function toggleFavoriteStatusHandler() {
        if (isFavorite) {
            favoriteCtx.removeFavorite(props.id);
            setIsFavorite(false);
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
            setIsFavorite(true);
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.adress}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? "remove from Favorites" : "To Favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
