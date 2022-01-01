import React from 'react';
import styles from "./DateForm.module.css";
import { Month } from '../../types.model';


interface DateFormProps  {
    convertType: number,
    day: number,
    month: number,
    year: string,
    months: Month[],
    setConvertType : (cType : number) => void,
    setDay : (day : number) => void,
    setMonth : (month : number) => void,
    setYear : (year : string) => void,
}

const DateForm: React.FC<DateFormProps> = (props) => {


    return (
        <div className={`row ${styles.root}`} >
            <div className="col-sm-1"/>
            <div className="col-sm-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">نوع تبدیل</label>
                <select
                    className="form-select"
                    value={props.convertType}
                    onChange={(e) => props.setConvertType(+e.target.value)}
                >
                    <option value="1">خورشیدی (جلالی) به میلادی</option>
                    <option value="2">میلادی به خورشیدی (جلالی)</option>
                </select>
            </div>
            <div className="col-sm-1">
                <label htmlFor="exampleFormControlInput1" className="form-label">روز</label>
                <select
                    className="form-select"
                    value={props.day}
                    onChange={(e) => props.setDay(+e.target.value)}
                >
                    {
                        [...Array(32).keys()].filter(i => i !== 0).map(item => <option key={item} value={item}>{item}</option>)
                    }
                </select>
            </div>
            <div className="col-sm-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">ماه</label>
                <select
                    className="form-select"
                    value={props.month}
                    onChange={(e) => props.setMonth(+e.target.value)}
                >
                    {
                        props.months.map(item =>
                            <option key={item.num} value={item.num}>{item.name}</option>
                        )
                    }
                </select>
            </div>
            <div className="col-sm-2">
                <label htmlFor="exampleFormControlInput1" className="form-label">سال</label>
                <input
                    className="form-control"
                    id="exampleFormControlInput1"
                    style={{direction: 'ltr'}}
                    value={props.year}
                    onChange={(e) => props.setYear(e.target.value)}
                />
            </div>
            <div className="col-sm-1"/>


        </div>
    )
}

export default DateForm;
