import React from 'react'


const Service = (props) => {


    return (
        <>
           
                <div >
                   
                    <div >
                        <div >
                            <div className="card p-1" style={{width:"23rem",height:"25rem"}} >
                                <img src={props.imgsrc} className="card-img-top w-50 mx-auto" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{props.cardtitle}</h5>
                                    <p className="card-text text-center">{props.carddis}</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
            
        </>
    )
};
export default Service;