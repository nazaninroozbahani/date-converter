import React from 'react';
import styles from "./ConvertResult.module.css";
import SolarResult from './SolarResult';
import { ConvertResultProps } from '../../types.model';
import GregorianResult from './GregorianResult';
import moment from "moment-jalaali";



const ConvertResult: React.FC<ConvertResultProps> = (props) => {

    const inputDate = `${props.year}/${props.month}/${props.day}`;

    const isValidDate = () => {
        if (props.convertType === 1)
            return moment(inputDate, 'jYYYY/jM/jD').isValid()
        return moment(inputDate, 'YYYY/M/D').isValid()

    };

    return (
        <div className={styles.root}>

            <div className="row h-100">
                {
                    isValidDate() ?
                        props.convertType === 1 ?
                            <>
                                <SolarResult
                                    convertType={props.convertType}
                                    day={props.day}
                                    month={props.month}
                                    year={props.year}
                                />
                                <GregorianResult
                                    convertType={props.convertType}
                                    day={props.day}
                                    month={props.month}
                                    year={props.year}
                                />
                            </>
                            :
                            <>
                                <GregorianResult
                                    convertType={props.convertType}
                                    day={props.day}
                                    month={props.month}
                                    year={props.year}
                                />
                                <SolarResult
                                    convertType={props.convertType}
                                    day={props.day}
                                    month={props.month}
                                    year={props.year}
                                />

                            </>
                        :
                        <p className="text-center">
                            ورودی ها معتبر نمی باشند.
                        </p>
                }
            </div>
        </div>
    )
}

export default ConvertResult;
