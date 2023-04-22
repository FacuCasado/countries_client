import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getActivityDetail } from "../../Redux/countryActions";
import style from './ActDetail.module.css';
import { Link } from "react-router-dom";

function ActDetail(){
    const {actName}=useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    const searchParams=new URLSearchParams(location.search);
    const detailId=searchParams.get('detailId');
    const activity=useSelector((state)=>state.ActivityDetail)

    useEffect(()=>{
        dispatch(getActivityDetail(actName))
    },[actName])

    const handleBackClick=()=>{
        if(detailId){navigate(`/detail/${detailId}`)}
        else{navigate('/activities')};
    };

    return(
        <div className={style.div}>
            {!activity.name && 
                <div className={style.loader}>
                    <span className={style.loaderText}>loading</span>
                    <span className={style.load}></span>
                </div>
                }
            {activity.name &&
            <div>
                <div className={style.divAct}>
                    <h2>{activity.name}</h2>
                    <h5>Difficulty: {activity.dificulty <= 2 ? <>Easy</> :
                                     activity.dificulty <= 4 ? <>Moderate</>:<>Extreme</>}</h5>
                    <h5>Duration: {activity.duration} Hs</h5>
                    <h5>Season: {activity.season}</h5>
                    <h5>Countries: {activity.countries.map((act, index)=>{
                        return(<>{act.name}
                        {index<activity.countries.length- 1 && ' '}</>)
                        })}</h5>
                <button className={style.button40}onClick={()=>{handleBackClick()}}>Back</button>
                </div>
           </div>
          }
        </div>
    )

}

export default ActDetail;