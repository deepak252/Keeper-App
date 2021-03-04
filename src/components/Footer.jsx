import React from "react";



function Footer()
{

    var currDate=new Date();
    var year=currDate.getFullYear();
    return (
        <footer>
            <p >Copyright @{year}</p>
        </footer>
    );
}

export default Footer;