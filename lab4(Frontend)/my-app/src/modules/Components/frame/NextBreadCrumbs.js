import React from 'react';
import {useLocation, useNavigate} from "react-router";

    function NextBreadCrumbs(){
        const location = useLocation();
        const navigate = useNavigate();
        const pathnames = location.pathname.split('/').filter((x) => x);
        return (
            <nav  aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page" onClick={() => navigate("/")}>Home</li>
                    {pathnames.map((name, index) =>{
                        const routeTo = '/' + pathnames.slice(0, index).join("/");
                        if(index == pathnames.length-1){
                            return <li class="breadcrumb-item" key={routeTo}>{name}</li>
                        }
                        else{
                            let returnLink = <li class="breadcrumb-item" key={routeTo} onClick={() => navigate(routeTo)}>{name}</li>;
                            return returnLink;
                        }
                    })}
                </ol>
            </nav>

        );
};

export default NextBreadCrumbs;
