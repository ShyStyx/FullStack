import React from 'react'
import '../styles/notification.css'

const Notification = ({ notify, notifySuccess}) => {
    return (
        <div>
            {notify === '' ?
                <div></div>
                :
                <div>
                    <div className={notifySuccess? 'notify success' : 'notify failure'} >
                        {notify}
                    </div>
                </div>
            }
        </div>
        
    )
}

export default Notification