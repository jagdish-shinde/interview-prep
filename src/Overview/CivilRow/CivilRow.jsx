import React, { useState, useEffect } from 'react';
import './CivilRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import ActivityRow from '../ActivityRow/ActivityRow';

function CivilRow({ data, packageChecked }) {
    const [civilChecked, setCivilChecked] = useState(packageChecked || false);
    const [expandCivil, setExpandCivil] = useState(false);
    
    useEffect(() => {
        setCivilChecked(packageChecked);
    }, [packageChecked]); 

    const handlePlusIcon = () => {
        setExpandCivil(!expandCivil);
    };

    return (
        <div className='civilLayer'>
            <div className='civilRow'>
                <div>
                    <input
                        type="checkbox"
                        checked={civilChecked}
                        onChange={(e) => {
                            setCivilChecked(e.target.checked);
                        }}
                    />
                    <span className='font-semibold'>{data.Package}</span>
                </div>
                <div>
                    <span className='font-semibold'>{data.Rate}</span>
                </div>
                <div>
                    <span className='font-semibold'>{data.Total}</span>
                </div>
                {expandCivil ? (
                    <FontAwesomeIcon
                        icon={faMinus}
                        size="xl"
                        style={{ color: "#63E6BE" }}
                        onClick={handlePlusIcon}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faPlus}
                        size='xl'
                        style={{ color: "#63E6BE" }}
                        onClick={handlePlusIcon}
                    />
                )}
            </div>
            {expandCivil &&
                data.activityArr.map((activity, index) => (
                    <ActivityRow key={index} data={activity} civilChecked={civilChecked} />
                ))}
        </div>
    );
}

export default CivilRow;

