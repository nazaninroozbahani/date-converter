import React from 'react';
import moment from "moment-jalaali";
import { ConvertResultProps } from '../../types.model';


const GregorianResult: React.FC<ConvertResultProps> = (props) => {

    const inputDate = `${props.year}/${props.month}/${props.day}`;

    const isValidDate = () => {
        if (props.convertType === 2)
            return moment(inputDate, 'YYYY/M/D').isValid();
        const solar = moment(inputDate, 'jYYYY/jM/jD' ).format('YYYY/M/D');
        return moment(solar, 'YYYY/M/D').isValid();
    };

    return (
        <div className="col-sm-6"
            style={{ borderLeft: props.convertType === 2 ? "1px solid #ccc" : 'none' }}
        >
            <p className="text-center text-danger"><small><strong>میلادی:</strong></small></p>
            {
                isValidDate() ?
                    <>
                        <p className="text-center">
                            {
                                props.convertType === 1 ?
                                    moment(inputDate, 'jYYYY/jM/jD').format('dddd، D MMMM YYYY')
                                    :
                                    moment(inputDate, 'YYYY/M/D').format('dddd، D MMMM YYYY')

                            }
                        </p>
                        <p className="text-center">
                            {
                                props.convertType === 1 ?
                                    moment(inputDate, 'jYYYY/jM/jD').format('YYYY-M-D')
                                    :
                                    moment(inputDate, 'YYYY/M/D').format('YYYY-M-D')

                            }
                        </p>
                    </>
                    :
                    <p className="text-center">
                        inputs are invalid
                    </p>
            }
        </div>
    )
}

export default GregorianResult;
