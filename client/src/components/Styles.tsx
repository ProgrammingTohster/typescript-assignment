export const style = {
    Settings:{
        container:{
            backgroundColor: "#2b303e",
            color:"#FFFFFF",
            padding: "16px",
            width:"75%",
            borderRadius: "16px",
            display: "flex",
            marginBottom: "8px"
        },
        label:{
            width: "38.5%"
        },
        input:{
            backgroundColor: "#3b4252",
            // backgroundColor: "lighter color of #2b303e",
            width: "61.5%",
            color: "#FFFFFF",
            border: "none",
            padding: "8px",
            borderRadius: "8px",
            marginLeft: "8px"
        }
    },
    Toast: {
        text: {
            color: '#FFFFFF',
            flexGrow: 1,
        },
        container: {
            backgroundColor: "#2C313E66",
            display: "flex",
            padding: "16px",
            borderRadius: "16px",
            alignItems: "center",
            marginBottom: "4px",
        },
        closeBtn: {
            cursor: "pointer",
            color: "#FFFFFF",
        }
    },
    Page1: {
        paddingLeft:"32px",
        paddingRight:"32px",
        paddingTop:"16px",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #181c2a , #0c1222)",
        fontFamily: '"Roboto", sans-serif',

    },
    Page2: {
        paddingLeft:"32px",
        paddingRight:"32px",
        paddingTop:"16px",
        height: "100vh",
        fontFamily: '"Roboto", sans-serif',
        backgroundImage: "linear-gradient(to right, #171c2b , #0d1322)",


    },
    NavBar: {
        ActiveLink: {
            color: "#8DCAFE",
            borderBottom: "2px solid #8DCAFE",
            paddingBottom: "32px",
            verticalAlign: "center",
            lineHeight: "28px",
            paddingLeft: "12px",
            paddingRight: "12px",
            textDecoration: "none",

        },
        Link: {
            color: "#FFFFFF99",
            borderBottom: "1px solid #FFFFFF99",
            paddingBottom: "32px",
            verticalAlign: "center",
            lineHeight: "28px",
            paddingLeft: "12px",
            paddingRight: "12px",
            textDecoration: "none",

        },
        Container: {
            display: "flex",
            alignItems: "center",
            fontWeight: "500"
        },
        Header: {
            fontSize: "22px",
            verticalAlign: "center",
            lineHeight: "28px",
            paddingLeft: "0",
            color: "#FFFFFF"
        }
    },
    ToastContainer: {
        container: {
            width: "360px",
            zIndex: "10",
        },
        position1: {
            top: "104px",
            left: "35px",
        },
        position2: {
            top: "104px",
            right: "35px",
        },
        position3: {
            bottom: "104px",
            left: "35px",
        },
        position4: {
            bottom: "104px",
            right: "35px",
        }

    }

}

export const position_ref = [
    style.ToastContainer.position1,
    style.ToastContainer.position2,
    style.ToastContainer.position3,
    style.ToastContainer.position4
]