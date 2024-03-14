export let position_key = "position";
export let notification_max_key= "notification_max";
export let notification_timeout ="notification_timeout";

export let notifications_key = "notifications"
export let connected_key = "connected"

if(!localStorage.getItem(position_key)){
    localStorage.setItem(position_key, "1")
}

if(!localStorage.getItem(notification_max_key)){
    localStorage.setItem(notification_max_key, "5")
}

if(!localStorage.getItem(notification_timeout)){
    localStorage.setItem(notification_timeout, "5")
}
