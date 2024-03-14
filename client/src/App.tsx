import React, { Dispatch, useEffect, useState, useRef } from 'react';
import { Notification } from './types';
import { Routes, Route } from 'react-router-dom';
import { Page2 } from './pages/Page2';
import { Link } from 'react-router-dom';
import { position_ref, style } from './components/Styles';
import { Imports } from './components/Imports';
import { NavBar } from './components/Navbar';
import "../public/style.css"
import { connected_key, notification_max_key, notification_timeout, notifications_key, position_key } from './storage';


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/settings" element={<Page2 />} />
            </Routes>
        </>

    );
};

function Page1() {
    return (

        <div style={{ ...style.Page1, ...{ position: "relative" } }}>
            <Imports />
            <NavBar listOfLinks={["Notification task", "Main", "Settings"]} selected="Main" />
            <ToastContainer />
        </div>)
}


function Toast({ notification, setState, setRender }:
    {
        notification: Notification,
        setState: Dispatch<React.SetStateAction<Array<Notification>>>,
        setRender: Dispatch<React.SetStateAction<Array<JSX.Element>>>,
    }) {
        const [timeOut, setTimeOut] = useState<NodeJS.Timeout>();

        useEffect(() => {
            return () =>{
                setTimeOut(setTimeout(() => {
                    setRender((render) => render.filter((toast) => toast.key !== notification.msg_id))
                    setState((data) => data.filter((toast) => toast.msg_id !== notification.msg_id));
                    console.log(localStorage.getItem(notification_max_key)!)
                }, localStorage.getItem(notification_timeout) ? parseInt(localStorage.getItem(notification_timeout)!) * 1000 : 5 * 1000)
                )
            }
        },[])
        
       
    // useEffect(() => {
    //     return () => {
    //         if (timeOut) {
    //             clearTimeout(timeOut);
    //         }
    //     };
    // }, [timeOut])
    return (
        <div style={style.Toast.container} onMouseOver={(e) => {
            clearTimeout(timeOut);
            setTimeOut(setTimeout(() => {
                setRender((render) => render.filter((toast) => toast.key !== notification.msg_id))
                setState((data) => data.filter((toast) => toast.msg_id !== notification.msg_id));
            },  localStorage.getItem(notification_timeout) ? parseInt(localStorage.getItem(notification_timeout)!) * 1000: 5 * 1000))
        }}>
            <p style={style.Toast.text}>{notification.msg}</p>
            <span className="material-symbols-outlined" style={style.Toast.closeBtn} onClick={() => {
                setRender((render) => render.filter((toast) => toast.key !== notification.msg_id))
                setState((data) => data.filter((toast) => toast.msg_id !== notification.msg_id));
            }}>close</span>
        </div>
    )
}

function ToastContainer() {
    const [data, setData] = useState<Array<Notification>>([]);
    const [newData, setNewData] = useState<Notification | undefined>();
    const [render, setRender] = useState<Array<JSX.Element>>([]);
    let notificationArray = localStorage.getItem(notifications_key)
    let connected = localStorage.getItem(connected_key)
    let master = sessionStorage.getItem(connected_key)
    let limit = localStorage.getItem(notification_max_key) ? parseInt(localStorage.getItem(notification_max_key)!) : 5;
    useEffect(() => {
            console.log("Initial Connection")
            const eventSource = new EventSource('http://127.0.0.1:9000/events');
            localStorage.setItem(connected_key, "true");
            sessionStorage.setItem(connected_key, "true");
            eventSource.onmessage = (e) => {
                let notification = JSON.parse(e.data) as Notification;
                console.log(notification)
                setNewData(notification);
            };
            sessionStorage.setItem(connected_key, "true");
            return () => {
                eventSource.close();
            }
        //     console.log("connected!")
        //     window.addEventListener("storage", (e) => {
        //         console.log(sessionStorage.getItem(connected_key))
        //         console.log("Storage listening")
        //         setData(localStorage.getItem(notifications_key) ? JSON.parse(localStorage.getItem(notifications_key)!) : [])
                
        //         console.log(data)
        //         console.log(data[data.length - 1])
        //         let newData = data[data.length - 1] as Notification
        
        //         setNewData(newData);
        //     })
        // }
    }, [])
    useEffect(() => {
        if (newData) {
            console.log("New data updated!")
            if(master === "true"){
                console.log("master")
                let array = localStorage.getItem(notifications_key) ? JSON.parse(localStorage.getItem(notifications_key)!) : [];
                array.push(newData);
                localStorage.setItem(notifications_key, JSON.stringify(array));
                console.log(array)
            }
            setRender((render) => {
                return [...render,
                <Toast
                    key={newData.msg_id}
                    notification={newData}
                    setState={setData}
                    setRender={setRender}
                />]
            });
        }
    }, [newData]);

    useEffect(() => {
        if (render.length > limit) {
            setRender((data) => data.slice(render.length - limit));
        }
        
    }, [data])
    return (<div style={{ ...position_ref[parseInt(localStorage.getItem(position_key)!)], ...style.ToastContainer.container, ...{ position: "absolute" } }}>
        {render}
    </div>
    )
}





// const eventSource: EventSource = new EventSource('http://127.0.0.1:9000/events');

// eventSource.onmessage = (event) => {
//     console.log(event.data);
// };
export default App;
