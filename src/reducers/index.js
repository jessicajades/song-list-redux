import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "Cruel Summer", duration: "3:55" },
        { title: "Lover", duration: "3:30" },
        { title: "Cornelia Street", duration: "4:05" },
        { title: "You Need To Calm Down", duration: "4:30" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
