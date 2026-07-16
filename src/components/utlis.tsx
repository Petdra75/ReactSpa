
const getStoredClicks = () : number | null => {
    const storedClicksString: string | null = localStorage.getItem("clickCount")

    if (!storedClicksString){
        return null
    }

    const storedClicks = parseInt(storedClicksString);
    return storedClicks
} 