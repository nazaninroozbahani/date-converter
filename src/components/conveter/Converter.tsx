import React, { useEffect, useState } from 'react';
import { gregorianMonths, solarMonths } from '../../data/months';
import { Month } from '../../types.model';
import DateForm from '../dateForm/DateForm';
import ConvertResult from '../result/ConvertResult';
import styles from "./Converter.module.css";
import moment from "moment-jalaali";


const Converter = () => {

    const [convertType, setConvertType] = useState(1);
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState('1400');
    const [months, setMonths] = useState<Month[]>([]);
    const [leapYear, setLeapYear] = useState(false);


    useEffect(() => {
        const currentDate = new Date();

        switch (convertType) {
            case 1:
                setMonths(solarMonths);
                setDay(moment(currentDate).jDate());
                setMonth(moment(currentDate).jMonth() + 1);
                setYear(moment(currentDate).jYear().toString());
                break;
            case 2:
                setMonths(gregorianMonths);
                setDay(currentDate.getDate());
                setMonth(currentDate.getMonth() + 1);
                setYear(currentDate.getFullYear().toString());
                break;
        }
    }, [convertType]);


    const isValidDate = () => {
        if (convertType === 1)
            return moment(`${year}/${month}/${day}`, 'jYYYY/jM/jD').isValid();
        const solar = moment(`${year}/${month}/${day}`, 'YYYY/M/D').format('jYYYY/jM/jD');
        return moment(solar, 'jYYYY/jM/jD').isValid();
    };

    const getIsLeap = () => {
        if (convertType === 1)
            return `سال ${year} کبیسه ${leapYear ? 'است' : 'نیست'}`
        return `سال ${moment(year).jYear()} کبیسه ${leapYear ? 'است' : 'نیست'}`
    };

    useEffect(() => {

        switch (convertType) {
            case 1:
                setLeapYear(moment.jIsLeapYear(+year))
                break;
            case 2:
                break;
        }
    }, [year, convertType]);

    return (
        <div className={styles.root}>
            <div className="container-fluid h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="col-sm-10">
                        <div className={styles.outerBox}>
                            <h5 className={styles.title}>تبدیل تاریخ</h5>
                            <DateForm
                                convertType={convertType}
                                day={day}
                                month={month}
                                year={year}
                                months={months}
                                setConvertType={setConvertType}
                                setDay={setDay}
                                setMonth={setMonth}
                                setYear={setYear}
                            />
                            <ConvertResult
                                convertType={convertType}
                                day={day}
                                month={month}
                                year={year}
                            />
                            {
                                year && isValidDate() &&
                                <p className="m-3">
                                    {
                                        getIsLeap()
                                    }
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Converter;
