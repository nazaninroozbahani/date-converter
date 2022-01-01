import React from 'react'
import { ConvertResultProps } from '../../types.model';
import moment from "moment-jalaali";
moment.loadPersian({ dialect: 'persian-modern' })


const SolarResult: React.FC<ConvertResultProps> = (props) => {

    const inputDate = `${props.year}/${props.month}/${props.day}`;

    const isValidDate = () => {
        if (props.convertType === 1)
            return moment(inputDate, 'jYYYY/jM/jD').isValid();
        const solar = moment(inputDate, 'YYYY/M/D').format('jYYYY/jM/jD');
        return moment(solar, 'jYYYY/jM/jD').isValid();
    };

    return (
        <div className="col-sm-6"
            style={{ borderLeft: props.convertType === 1 ? "1px solid #ccc" : 'none' }}
        >
            <p className="text-center text-danger"><small><strong>خورشیدی:</strong></small></p>
            {
                isValidDate() ?
                    <>
                        <p className="text-center">
                            {
                                props.convertType === 1 ?
                                    moment(inputDate, 'jYYYY/jM/jD').format('dddd، jD jMMMM  jYYYY')
                                    :
                                    moment(inputDate, 'YYYY/M/D').format('dddd، jD jMMMM  jYYYY')

                            }
                        </p>
                        <p className="text-center">
                            {
                                props.convertType === 1 ?
                                    moment(inputDate, 'jYYYY/jM/jD').format('jYYYY/jM/jD')
                                    :
                                    moment(inputDate, 'YYYY/M/D').format('jYYYY/jM/jD')

                            }
                        </p>
                    </>
                    :
                    <p className="text-center">
                        ورودی ها معتبر نمی باشند.
                    </p>
            }

        </div>
    )
}

export default SolarResult
