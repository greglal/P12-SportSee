import '../../Styles/userChoice.css';
import SelectUser from '../../Components/SelectUser/selectUser';
import { useState } from 'react';

export let isMock = false;

export default function UserChoice() {
    const [mockData, setMockData] = useState(isMock);

    const handleMockDataChange = () => {
        isMock = !isMock;
        setMockData(isMock);
    };

    return (
        <div>
            <div className="userToSelect">
                <SelectUser user="Karl" id="/12" />
                <SelectUser user="Cécilia" id="/18" />
            </div>
            <div className="setMockData">
                <label>
                    Utiliser les données mockées :
                    {/*<input type="checkbox" checked={isMock} onChange={handleMockDataChange} />*/}
                    <input type="checkbox" checked={mockData} onChange={handleMockDataChange}  />

                </label>
            </div>
        </div>
    );
}
