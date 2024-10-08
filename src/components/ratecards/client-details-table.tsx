import React, { useCallback, useMemo } from 'react'
import { clientRatecard, clientRatecardColumns, currencyOptions, langaugeOptions } from '../../utils/data'
import { useTheme } from '../../context/theme-context'
import { Dropdown } from 'monday-ui-react-core'
import { processDropdownOptions } from '../../utils/helpers'
import { DropdownOption } from '../../types'

const ClientDetailsTable: React.FC = () => {

    const {clientDetails, setClientDetails} = useTheme()

    const processedLanguagesOptions = useMemo(() => {
        return processDropdownOptions(langaugeOptions)
    },[])

    const options = {
        currency: currencyOptions,
        languages: processedLanguagesOptions
    }
    const findDefaultValue = useCallback(
        (options: DropdownOption[], value: string | string[]) => {
            if (Array.isArray(value)) {
                return options.filter((option: DropdownOption) => 
                    value.includes(
                        typeof option.value === "string" 
                            ? option.value 
                            : JSON.stringify(option.value)
                    )
                );
            } else {
                return options.find((option) => option.value === value);
            }
        },
        [] 
    );
    

  return (
    <div className='client-details-table__container'>
        <table>
            <thead>
                <tr>
                    {clientRatecardColumns.map((column, i) => {
                        if(i === 0 && !clientDetails.showEdit) return
                        return <th>{column}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {Object.values(clientRatecard).map((detail:string, i) => {
                        if(i === 0 )return
                        if(i === 1 && !clientDetails.showEdit) return
                        return <td>{Array.isArray(detail) ? detail.join(", ") : detail}</td>
                    })}
                </tr>
                    {
                        clientDetails.showEdit ? 
                <tr>
    {Object.entries(clientRatecard).map(([key, value], i) => {
        // Skip rendering for "id"
        if (key === "id") return null;
        
        return (
            <td key={i}>
                <div className="client-details-table__input-cont">
                    {key === "languages" || key === "currency" ? (
                        <Dropdown multi={key === "languages"} defaultValue={findDefaultValue(options[key], value)} multiline={key === "languages"}  options={options[key]} menuPosition={Dropdown.menuPositions.FIXED} className="client-details-table__dropdown" size={Dropdown.sizes.XS}/>
                    ) : (
                        <input 
                            type={key === "timezoneOffset" || key === "rate" ? "number" :"text" }
                            defaultValue={clientRatecard[key]} 
                            className={`input client-details-table__text-input ${key === "timezoneOffset" || key === "rate" ? "timezone-offset-input" : ""}`} 
                        />
                    )}
                </div>
            </td>
        );
    })}
</tr> : null}
            </tbody>
        </table>
    </div>
  )
}

export default ClientDetailsTable