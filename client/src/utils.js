const getDate = (unixTime) => {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = new Date(unixTime*1000)

    return {"date": day.getDate(), "day": days[day.getDay()], "month": months[day.getMonth()], "hour": day.getHours()};
}

export default getDate;